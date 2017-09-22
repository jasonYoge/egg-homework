'use strict';

module.exports = app => {
  class HomeController extends app.Controller {
    * index() {
    	const { ctx, service } = this;
    	const userId = ctx.session.userId;
    	let user = { isLogin: false };
    	let data = {
    		title: '首页',
    		csrf: this.ctx.csrf,
    		showUser: false,
    	};
    	if (ctx.session.userId) {
    		user = yield service.user.find(userId);
    		user.isLogin = true;
    	}

    	const list = yield service.sheet.list();
    	data.list = list;
    	data.user = user;
    	ctx.body = yield ctx.renderView('../view/home.tpl', data);
    }
  }
  return HomeController;
};
