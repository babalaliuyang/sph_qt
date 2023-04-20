const { defineConfig } = require('@vue/cli-service')
module.exports = defineConfig({
  transpileDependencies: true,
  // 关闭eslink
  lintOnSave: false,
  // 代理跨域  http://gmall-h5-api.atguigu.cn  
  devServer: {
    proxy: {
      '/api': {
        target: 'http://gmall-h5-api.atguigu.cn',
        // 不需要路径重写
        // pathRewrite: { '^/api': '' },
      },
    },
  },
})
