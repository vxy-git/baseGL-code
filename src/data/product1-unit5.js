/**
 * Product1 Unit5 产品细节展示数据配置
 * @typedef {Object} TabData
 * @property {string} label - 标签文本
 * @property {string} description - 描述文本
 * @property {string} type - 媒体类型
 * @property {string} src - 图片路径
 * @property {string} alt - 替代文本
 */

/**
 * 主标题
 */
export const MAIN_TITLE = 'Every Detail Matters'

/**
 * 标签列表
 */
export const TABS_LIST = [
  'Smooth yet Rugged Design',
  'Dual-Color Mouthpiece',
  'Large Side Display'
]

/**
 * 对应的描述文本列表
 */
export const DESCRIPTIONS = [
  "The edge is clean and bold, making the shape stand out from everything else.",
  "Smart design can feel as good as it looks—cooling every puff while turning the tip into a tiny work of art.",
  "Creative yet smart, the screen paints your vivid brand story while keeping every puff in perfect check."
]

/**
 * 媒体资源列表
 * @type {TabData[]}
 */
export const MEDIA_LIST = [
  {
    label: 'Smooth yet Rugged Design',
    description: "The edge is clean and bold, making the shape stand out from everything else.",
    type: 'image',
    src: '/assets/product1/Smooth_yet_Rugged_Design.jpg',
    alt: 'Smooth yet Rugged Design'
  },
  {
    label: 'Dual-Color Mouthpiece',
    description: "Smart design can feel as good as it looks—cooling every puff while turning the tip into a tiny work of art.",
    type: 'image',
    src: '/assets/product1/Dual_Color_Mouthpiece.jpg',
    alt: 'Dual-Color Mouthpiece'
  },
  {
    label: 'Large Side Display',
    description: "Creative yet smart, the screen paints your vivid brand story while keeping every puff in perfect check.",
    type: 'image',
    src: '/assets/product1/Large_Side_Display.jpg',
    alt: 'Large Side Display'
  }
]
