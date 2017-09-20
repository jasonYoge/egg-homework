'use strict';

module.exports = app => {
  class HomeController extends app.Controller {
    * index() {
    	const user = yield this.service.user.find(1001);
    	this.ctx.body = {
    		status: 0,
    		message: user
    	};
    }
  }
  return HomeController;
};
