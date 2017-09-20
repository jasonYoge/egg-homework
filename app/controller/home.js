'use strict';

module.exports = app => {
  class HomeController extends app.Controller {
    * index() {
    	const { ctx, service } = this;
    	let data = {
    		title: '首页',
    		isLogin: false,
    	};

    	const list = yield service.sheet.list();
    	data.list = list;
    	ctx.body = yield ctx.renderView('../view/home.tpl', data);
    }
  }
  return HomeController;
};
