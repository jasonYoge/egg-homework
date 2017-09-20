'use strict';

module.exports = app => {
	class UserService extends app.Service {
		* find (userId) {
			const user = yield this.app.mysql.get(`users`, {
				user_id: userId
			});
			return { user };
		}
	}

	return UserService;
}