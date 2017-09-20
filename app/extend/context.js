'use strict';
//db reference
module.exports = {
	db: {
		* query (queryStr) {
			let res = yield this.app.mysql.query(queryStr);
			return res;
		}
	}
}