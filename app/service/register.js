'use strict';

module.exports = app => {
	class RegisterService extends app.Service {
		* insert (obj) {
			const res = yield this.app.mysql.insert('users', {
				user_name: obj.username,
				user_password: obj.password,
			});

			return res.affectedRows === 1;
		}
	}
	return RegisterService;
}