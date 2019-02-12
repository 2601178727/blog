const { Controller } = require('egg');

class NewsController extends Controller {
  // 一般控制器值处理请求的参数，和返回响应
  async index() {
    let { ctx } = this;
    // 后端渲染 —— 将渲染后的页面发给前台
    let news = await ctx.service.news.fetch(); // 拿到service文件夹下 的news文件中的 fetch方法返回的数据

    // 异步操作，需要添加await
    await ctx.render('news.ejs', { news });
  }
}

module.exports = NewsController;