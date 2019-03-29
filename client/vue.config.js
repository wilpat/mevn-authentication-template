module.exports = {
  devServer: {
    proxy: {
      '^/users': {
        target: 'http://localhost:5000',
        changeOrigin: true
      },
  	}
  }
}