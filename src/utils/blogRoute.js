const BLOG_ROUTE_PREFIX = '/blog'

export const slugify = value =>
  String(value || '')
    .trim()
    .toLowerCase()
    .replace(/[^a-z0-9]+/g, '-')
    .replace(/^-+|-+$/g, '')

export const normalizePath = value => {
  if (typeof value !== 'string') return ''
  const pathname = value.split(/[?#]/)[0].trim()
  if (!pathname) return ''
  return pathname.startsWith('/') ? pathname : `/${pathname}`
}

export const matchRoutePattern = (pattern, actualPath) => {
  const normalizedPattern = normalizePath(pattern)
  const normalizedActual = normalizePath(actualPath)

  if (!normalizedPattern || !normalizedActual) return false
  if (normalizedPattern === normalizedActual) return true

  const patternSegments = normalizedPattern.split('/').filter(Boolean)
  const actualSegments = normalizedActual.split('/').filter(Boolean)

  if (patternSegments.length !== actualSegments.length) return false

  return patternSegments.every((segment, index) => {
    if (segment === '*') return true
    if (segment.startsWith(':')) return actualSegments[index].length > 0
    return segment === actualSegments[index]
  })
}

export const getBlogTagFromPath = path => {
  const segments = normalizePath(path).split('/').filter(Boolean)
  if (segments[0] !== 'blog') return ''
  const tag = segments[1] || ''
  return tag.startsWith(':') ? '' : tag
}

export const getBlogTagFromCategory = category => {
  if (!category) return ''
  if (category.slug) return category.slug
  const fromUrl = getBlogTagFromPath(category.navUrl)
  if (fromUrl) return fromUrl
  return slugify(category.label || category.navName || '')
}

export const buildBlogDetailPath = (tag, id) => {
  const safeTag = slugify(tag) || 'blog'
  return `${BLOG_ROUTE_PREFIX}/${safeTag}/${id}`
}

export const buildBlogDetailPathFromCategory = (category, id) =>
  buildBlogDetailPath(getBlogTagFromCategory(category), id)
