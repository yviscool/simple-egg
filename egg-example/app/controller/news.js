class Service {
  constructor(ctx) {
    this.ctx = ctx;
    this.app = ctx.app;
    this.config = ctx.app.config;
    this.service = ctx.service;
  }
}

class NewsController extends Service {
  async list() {
    this.ctx.body = await this.service.news.list();
  }
}


module.exports = NewsController;