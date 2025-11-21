export default {
  plugins: {
    tailwindcss: {},
    'postcss-pxtorem': {
      rootValue: 16,
      propList: ['*'],
      selectorBlackList: ['.no-rem', '.ignore-rem'],
      replace: true,
      mediaQuery: true,
      minPixelValue: 0,
      exclude: /node_modules/i
    },
    autoprefixer: {},
  },
}