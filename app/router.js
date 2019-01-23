/**
 * egg.js 是基于Koa封装的一个上级框架
 * router其实就是路由中间件 router实例，用来定义路由规则
 * controller 控制器的容器 是个对象，属性来自controller文件夹下的文件名
 * get 指的是HTTP方法名
 */
module.exports = function (app) {
  const { router, controller } = app;
  // controller.home 对呀controller文件夹下的 home.js
  router.get('/', controller.home.index);
  router.get('/news', controller.news.index);
}