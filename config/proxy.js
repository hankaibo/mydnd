/**
 * 在生产环境 代理是无法生效的，所以这里没有生产环境的配置
 * The agent cannot take effect in the production environment
 * so there is no configuration of the production environment
 * For details, please see
 * https://pro.ant.design/docs/deploy
 */
export default {
  dev: {
    '/api/': {
      target: 'http://localhost:8080/',
      changeOrigin: true,
      pathRewrite: { '^': '' },
    },
    '/ws/': {
      target: 'http://localhost:8080/',
      ws: true,
      pathRewrite: { '^': '' },
    },
  },
  pre: {
    '/api/': {
      target: 'http://58.87.121.239:9002/',
      changeOrigin: true,
      pathRewrite: { '^': '' },
    },
    '/ws/': {
      target: 'http://58.87.121.239:9002/',
      ws: true,
      pathRewrite: { '^': '' },
    },
  },
};