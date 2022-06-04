const px2rem = require('postcss-pxtorem')
module.exports = {
  plugins: [
    px2rem(
      {
        rootValue: 37.5,
        propList: ['*']
      })
  ]
}
