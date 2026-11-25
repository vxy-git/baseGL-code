import request from '@/utils/request'
import { localizePage } from '@/utils/cmsTranslations'

let settingsRequest
let activeLanguage = 'en'

export function getWebsiteLanguages() {
  settingsRequest ||= request.get('/cmsLanguage/public', {}, { timeout: 3000 }).then(result => {
    const config = result.success ? result.data : { default: 'en', languages: [{ code: 'en', name: 'English' }] }
    const saved = localStorage.getItem('cms-language')
    activeLanguage = config.languages.some(language => language.code === saved) ? saved : config.default
    document.documentElement.lang = activeLanguage
    return { ...config, active: activeLanguage }
  })
  return settingsRequest
}

export async function localizeCmsPages(pages) {
  const config = await getWebsiteLanguages()
  return pages.map(page => localizePage(page, config.active, config.default))
}

export async function changeWebsiteLanguage(code) {
  const config = await getWebsiteLanguages()
  if (code === activeLanguage || !config.languages.some(language => language.code === code)) return
  localStorage.setItem('cms-language', code)
  window.location.reload()
}
