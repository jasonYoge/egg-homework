'use strict';

module.exports = app => {
	class SheetService extends app.Service {
		* list (pages = 1, count = 10) {
			const sheets = yield this.app.mysql.select('sheets', {
				columns: ['sheet_id', 'sheet_name', 'sheet_time', 'sheet_logo', 'sheet_desc'],
				limit: count,
				offset: (pages - 1) * count,
			});

			let res = [];
			sheets.forEach(item => {
				let timer = new Date(item.sheet_time);
				res.push({
					id: item.sheet_id,
					time: `${timer.getFullYear()}-${timer.getMonth() + 1}-${timer.getDate()} 
						${timer.getHours()}:${timer.getMinutes()}:${timer.getSeconds()}`,
					logo: item.sheet_logo,
					desc: item.sheet_desc,
					name: item.sheet_name,
				});
			});

			return res;
		}

		* find (userId, pages = 1, count = 10) {
			const bookList = yield this.app.mysql.select('books', {
				where: {
					book_id: [`select book_id from sheets where user_id=${userId}`]
				},
				columns: ['book_id', 'book_name', 'book_desc', 'book_logo_path'],
				limit: count,
				offset: (pages - 1) * count,
			});
			return { bookList };
		}
	}
	return SheetService;
}