const { Controller } = require('egg');

class HomeController extends Controller {
  // ctx被称为上下文对象,包含很多属性和方法 .request .response
  // ctx.body = ctx.response.body
  async index() {
    this.ctx.body = 'hello world';
  }
}

module.exports = HomeController;