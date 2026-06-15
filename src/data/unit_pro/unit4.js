/**
 * Unit Pro Unit4 功能展示数据配置
 * @typedef {Object} SectionData
 * @property {string} greenText - 绿色标签文本
 * @property {string} title - 标题文本
 * @property {string} description - 描述文本
 * @property {Object} videos - 视频路径
 * @property {string} videos.left - 左侧视频路径
 * @property {string} videos.right - 右侧视频路径
 */

/**
 * Unit Pro Unit4 数据对象
 */
export const unit4Data = {
  /**
   * 主标题
   */
  mainTitle: `Consistent Temp\nIdeal for Rosin`,

  /**
   * 第一部分数据: RTD Control
   */
  section1: {
    greenText: 'RTD Control',
    title: 'Best flavor preservation',
    description: `Powered by Unicore tech, UNIT PRO combines smoothness with purity, ensuring efficient THC and terpene extraction without burning, and guarantees an exceptional session every time.`,
    videos: {
      left: '/api/uploads/file/default/assets/unit_pro/best-L.mp4',
      right: '/api/uploads/file/default/assets/unit_pro/best-R.mp4',
    },
  },

  /**
   * 第二部分数据: Built-in Wires
   */
  section2: {
    greenText: 'Built-in Wires',
    title: 'No more dry burning',
    description: `The heating coil is embedded within the ceramic core, this way, the oil is heated by the ceramic core and not by exposed hot wires, maximizing prevention of burnt flavors and preservation.`,
    videos: {
      left: '/api/uploads/file/default/assets/unit_pro/no-L.mp4',
      right: '/api/uploads/file/default/assets/unit_pro/no-R.mp4',
    },
  },
}
