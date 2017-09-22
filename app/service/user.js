'use strict';

module.exports = app => {
	class UserService extends app.Service {
		* find (userId) {
			const user = yield this.app.mysql.get(`users`, {
				user_id: userId
			});
			return user;
		}

		* validate (username, password) {
			const user = yield this.app.mysql.get(`users`, {
				user_name: username,
				user_password: password,
			});

			if (user && user.user_id)
				return user.user_id;
			else
				return false;
		}
	}

	return UserService;
}