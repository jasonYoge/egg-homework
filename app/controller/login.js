'use strict';

module.exports = app => {
	class LoginController extends app.Controller {
		* index () {
			const { ctx, service } = this;
			let userId;
			const username = ctx.request.body.username;
			const password = ctx.request.body.password;
			const data = {};

			if (username.trim() || password.trim()) {
				userId = yield service.user.validate(username, password);
			}
			if (userId) {
				ctx.session.userId = userId;
				data.loginResult = false;
				ctx.redirect('/');
			} else {
				data.loginResult = true;
			}

			ctx.body = yield ctx.renderView('../view/login.tpl', data);
		}
	}
	return LoginController;
}