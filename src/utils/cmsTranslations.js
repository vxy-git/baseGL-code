function applyModuleFields(data, fields, typed = false) {
  if (!data || !fields) return data
  for (const [key, value] of Object.entries(fields)) {
    if (!typed && (typeof value !== 'string' || !value.trim())) continue
    let path
    try { path = JSON.parse(key) } catch { continue }
    if (!Array.isArray(path) || !path.length || path.some(part =>
      !['string', 'number'].includes(typeof part) || ['__proto__', 'constructor', 'prototype'].includes(part))) continue
    const field = path.pop()
    const parent = path.reduce((node, segment) =>
      node && Object.hasOwn(node, segment) ? node[segment] : undefined, data)
    if (parent && typeof parent === 'object' && (!Array.isArray(parent) || Number.isInteger(field)) &&
      (typed || (Object.hasOwn(parent, field) && typeof parent[field] === 'string'))) {
      parent[field] = typed ? resolveLocalizedMedia(value) : value
    }
  }
  return data
}

export function localizePage(page, selected, fallback) {
  const translations = page.translations || {}
  const overrides = [...new Set([fallback, selected])].map(code => translations[code]).filter(Boolean)
  if (!overrides.length) return page
  const result = { ...page }
  for (const entry of overrides) {
    for (const key of ['navName', 'headerLabel', 'footerLabel', 'seoTitle', 'seoDescription']) {
      if (typeof entry[key] === 'string' && entry[key].trim()) {
        result[key === 'navName' ? 'localizedNavName' : key] = entry[key]
      }
    }
    if (Array.isArray(entry.seoKeywords) && entry.seoKeywords.length) result.seoKeywords = entry.seoKeywords
    for (const key of ['coverImage', 'coverType', 'hoverCoverUrl', 'hoverCoverType']) {
      if (typeof entry[key] === 'string') result[key] = resolveLocalizedMedia(entry[key])
    }
  }
  const localizeModule = (module, id) => {
      if (!module?.data || !overrides.some(entry => entry.modules?.[id] || entry.moduleValues?.[id])) return module
      const data = structuredClone(module.data)
      for (const entry of overrides) {
        applyModuleFields(data, entry.modules?.[id])
        applyModuleFields(data, entry.moduleValues?.[id], true)
      }
      return { ...module, data }
  }
  if (Array.isArray(page.moduleList)) {
    result.moduleList = page.moduleList.map((module, index) =>
      localizeModule(module, module?.instanceId || `legacy:${module?.moduleKey}:${index}`))
  } else if (page.moduleList && typeof page.moduleList === 'object') {
    result.moduleList = Object.fromEntries(Object.entries(page.moduleList).map(([key, module]) =>
      [key, localizeModule(module, `legacy:${key}`)]))
  }
  return result
}
function resolveLocalizedMedia(value) {
  if (typeof value === 'string' && /^\/api\/uploads\/file\/(?!default\/)/.test(value) &&
    typeof window !== 'undefined') {
    const base = (import.meta.env?.VITE_API_BASE_URL || '/api').replace(/\/$/, '')
    return new URL(base + value.slice('/api'.length), window.location.origin).href
  }
  if (Array.isArray(value)) return value.map(resolveLocalizedMedia)
  if (value && typeof value === 'object') {
    return Object.fromEntries(Object.entries(value).map(([key, entry]) => [key, resolveLocalizedMedia(entry)]))
  }
  return value
}

