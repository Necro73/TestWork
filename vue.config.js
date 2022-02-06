module.exports = {
  publicPath: process.env.NODE_ENV === 'production'
      ? '/testw_work/'
      : '/',
  transpileDependencies: [
    'vuetify'
  ]
}
