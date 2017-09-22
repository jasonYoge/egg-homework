'use strict';

module.exports = app => {
	class UserController extends app.Controller {
		* index () {
			const { ctx, service } = this;
			const userId = ctx.params.userId;
			const user = yield service.user.find(userId);

			let data = {
	    		title: `${user.user_name}的书单`,
	    		csrf: this.ctx.csrf,
	    		showUser: true,
	    	};
	    	user.isLogin = true;

	    	const list = yield service.sheet.find(userId);
	    	data.list = list;
	    	data.user = user;
	    	ctx.body = yield ctx.renderView('../view/home.tpl', data);
		}
	}
	return UserController;
}