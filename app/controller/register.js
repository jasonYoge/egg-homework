'use strict';

module.exports = app => {
	class RegisterController extends app.Controller {
		* index () {
			const { ctx } = this;
			const data = {
				title: '用户注册',
				csrf: this.ctx.csrf,
				user: {
					isLogin: false
				},
			};

			ctx.body = yield ctx.renderView('../view/register.tpl', data);
		}

		* submit () {
			const { ctx, service } = this;
			const username = ctx.request.body.username;
			const password = ctx.request.body.password;

			const result = yield service.register.insert({
				username: username.trim(),
				password: password.trim(),
			});

			if (result) {
				ctx.status = 200;
				ctx.body = {
					status: 0,
					message: '成功',
				}
			} else {
				ctx.status = 400;
				ctx.body = {
					status: 1,
					message: '输入格式错误',
				}
			}
		}
	}
	return RegisterController;
}