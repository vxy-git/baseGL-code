/**
 * Product1 Unit7 智能显示和单按钮控制数据配置
 */

/**
 * Product1 Unit7 数据对象
 */
export const product1Unit7Data = {
  /**
   * 主标题
   */
  mainTitle: 'Smart Display',

  /**
   * 副标题
   */
  subTitle: 'Upgrade your adventure',

  /**
   * 升级功能卡片数据
   */
  upgradeCards: [
    {
      tag: '3-Temperature Control',
      video: '/api/uploads/file/default/assets/product1/unit7/3_Temperature_Control.mp4',
    },
    {
      tag: 'Activation Indication',
      video: '/api/uploads/file/default/assets/product1/unit7/Activation_Indication.mp4',
    },
    {
      tag: 'Battery Life Monitor',
      video: '/api/uploads/file/default/assets/product1/unit7/Battery_Life_Monitor.mp4',
    },
    {
      tag: 'Preheat Status Indication',
      video: '/api/uploads/file/default/assets/product1/unit7/Preheat_Status_Indication.mp4',
    },
  ],

  /**
   * 单按钮控制数据
   */
  oneButtonControl: {
    greenText: 'The Enhanced',
    title: 'One-Button Control',
    description: `With just one button, you can easily turn on/off, pre-heat, and adjust temperature settings. Take full control of your experience and embark on your own unique adventure.Take full control of your experience with the one-button controls for pre-heating, temperature settings, and child safety lock.`,
    video: '/api/uploads/file/default/assets/product1/one-R.mp4',
    steps: [
      {
        icon: '/api/uploads/file/default/assets/product1/one-taps1.png',
        title: '1 Tap',
        label: 'Check temp',
      },
      {
        icon: '/api/uploads/file/default/assets/product1/one-taps2.png',
        title: '2 Taps',
        label: 'Warm up',
      },
      {
        icon: '/api/uploads/file/default/assets/product1/one-taps3.png',
        title: '3 Taps',
        label: 'Change temp',
      },
      {
        icon: '/api/uploads/file/default/assets/product1/one-taps4.png',
        title: '5 Taps',
        label: 'Turn on/off',
      },
    ],
  },
}
