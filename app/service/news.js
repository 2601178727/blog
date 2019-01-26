const { Service } = require('egg');

class NewsService extends Service{
  // egg.js里内置了一个方法 用来读取远程接口数据
  async fetch() {
    let { data } = await this.ctx.curl('http://news.baidu.com');
    data = data.toString(); // 此时拿到的是网易源代码
    return [
      {
        title: '为何说中国经济总体平稳、稳中有进',
        url: 'http://news.cctv.com/2019/01/22/ARTIUWajIiyPLNNMY0Yczjg3190122.shtml'
      },
      {
        title: '习近平向全军老同志祝贺新春',
        url: 'http://m.news.cctv.com/2019/01/22/ARTIIhofIPE8S6Wsz3ynqKnY190122.shtml'
      }
    ];
  }
}

module.exports = NewsService;