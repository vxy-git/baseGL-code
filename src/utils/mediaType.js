const IMAGE_EXTENSIONS = ['.jpg', '.jpeg', '.png', '.gif', '.webp', '.svg', '.bmp', '.ico', '.avif']
const VIDEO_EXTENSIONS = ['.mp4', '.webm', '.mov', '.m4v', '.avi', '.ogg', '.ogv', '.video']

export const getUrlPath = (value = '') => {
  const base = typeof window !== 'undefined' ? window.location.origin : 'http://localhost'
  try {
    return new URL(value, base).pathname.toLowerCase()
  } catch {
    return value.split(/[?#]/)[0].toLowerCase()
  }
}

export const detectMediaType = src => {
  const path = getUrlPath(src)
  if (VIDEO_EXTENSIONS.some(ext => path.endsWith(ext))) return 'video'
  if (IMAGE_EXTENSIONS.some(ext => path.endsWith(ext))) return 'image'
  return ''
}

export const isVideoSrc = src => detectMediaType(src) === 'video'
