const { createProxyMiddleware } = require('http-proxy-middleware');

module.exports = function(app) {
  app.use(
    '/superheroapi',
    createProxyMiddleware({
      target: 'https://superheroapi.com',
      changeOrigin: true,
      pathRewrite: {
        '^/superheroapi': ''
      }
    })
  );
};