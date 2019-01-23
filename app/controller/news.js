const { Controller } = require('egg');

class NewsController extends Controller {
  async index() {
    let { ctx } = this;
    // 后端渲染 —— 将渲染后的页面发给前台
    let news = [
      {
        title: '为何说中国经济总体平稳、稳中有进',
        url: 'http://news.cctv.com/2019/01/22/ARTIUWajIiyPLNNMY0Yczjg3190122.shtml'
      },
      {
        title: '习近平向全军老同志祝贺新春',
        url: 'http://m.news.cctv.com/2019/01/22/ARTIIhofIPE8S6Wsz3ynqKnY190122.shtml'
      }
    ];

    // 异步操作，需要添加await
    await ctx.render('news.ejs', { news });
  }
}

module.exports = NewsController;