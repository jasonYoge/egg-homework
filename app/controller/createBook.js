'use strict';
const path = require('path');
const fs = require('fs');
const crypto = require('crypto');
const sendToWormhole = require('stream-wormhole');

module.exports = app => {
	class CreateBookController extends app.Controller {
		* index () {
			const { ctx, service } = this;
			const data = {
				title: '添加图书',
				csrf: this.ctx.csrf,
			};
			let user;
			const userId = ctx.session.userId;
			if (userId) {
	    		user = yield service.user.find(userId);
	    		user.isLogin = true;
	    	} else {
	    		ctx.redirect('/');
	    	}

	    	data.user = user;
			ctx.body = yield ctx.renderView('../view/createBook.tpl', data);
		}

		* upload () {
			const { ctx, service } = this;
			const stream = yield ctx.getFileStream();

			const ext = stream.mimeType.slice(stream.mimeType.indexOf('/') + 1);
			const name = `${crypto.createHash('md5').update(stream.filename.slice(0, -4)).digest('hex').slice(0, 20)}.${ext}`;
			const img_path = path.resolve(__dirname, '../public/resource/img', name);

			try {
				let writeStream = fs.createWriteStream(img_path);
				stream.pipe(writeStream);
			} catch (err) {
				yield sendToWormhole(stream);
				ctx.status = 500;
				ctx.body = {
					status: 1,
					message: '服务器错误',
				}
				throw err;
			}

			const res = yield service.book.insert(stream.fields.bookname, stream.fields.bookdesc,
				name);

			if (res) {
				ctx.body = {
					status: 0,
					message: '创建成功',
				}
			} else {
				ctx.body = {
					status: 1,
					message: '创建失败',
				}
			}
		}
	}
	return CreateBookController;
}