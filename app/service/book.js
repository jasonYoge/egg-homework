'use strict';

module.exports = app => {
	class BookService extends app.Service {
		* insert (name, desc, path) {
			const res = yield this.app.mysql.insert('books', {
				book_name: name,
				book_desc: desc,
				book_logo_path: path,
			});

			return res.affectedRows === 1;
		}

		* find () {
			const booklist = yield this.app.mysql.query('select * from books');
			return booklist;
		}
	}
	return BookService;
}