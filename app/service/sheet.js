'use strict';

module.exports = app => {
	class SheetService extends app.Service {
		* list (pages = 1, count = 10) {
			const sheets = yield this.app.mysql.select('sheets', {
				columns: ['sheet_id', 'sheet_name', 'sheet_time', 'sheet_logo', 'sheet_desc'],
				limit: count,
				offset: (pages - 1) * count,
			});

			const res = this.formatSheets(sheets);
			return res;
		}

		* find (userId, pages = 1, count = 10) {
			const sheets = yield this.app.mysql.select('sheets', {
				where: {
					user_id: `${userId}`
				},
				columns: ['sheet_id', 'sheet_name', 'sheet_time', 'sheet_logo', 'sheet_desc'],
				limit: count,
				offset: (pages - 1) * count,
			});
			const res = this.formatSheets(sheets);
			return res;
		}

		* insert (userId, name, desc, path, booklist) {
			const { app } = this;
			const sheet = yield app.mysql.insert('sheets', {
				user_id: userId,
				sheet_name: name,
				sheet_desc: desc,
				sheet_logo: path,
				sheet_time: new Date(),
			});
			const sheet_id = sheet.insertId;
			let query = [];

			for (let i = 0; i < booklist.length; i++) {
				query.push({
					sheet_id, book_id: booklist[i]
				});
			}
			const res = yield app.mysql.insert('sheet_detail', query);

			return res.affectedRows >= 1;
		}

		* findBookList (sheetId, pages = 1, count = 10) {
			// const booklist = yield this.app.mysql.select('books', {
			// 	where: {
			// 		book_id: [`select book_id from sheet_detail where sheet_id=${sheetId}`]
			// 	},
			// 	columns: ['book_id', 'book_name', 'book_desc', 'book_logo_path'],
			// 	limit: count,
			// 	offset: (pages - 1) * count,
			// });
			const booklist = yield this.app.mysql.query(`select book_id, book_name, book_desc, book_logo_path from books where book_id in (select book_id from sheet_detail where sheet_id=${sheetId})`);

			return booklist;
		}

		formatSheets (sheets) {
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
	}
	return SheetService;
}