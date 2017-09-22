'use strict';

module.exports = app => {
	class SheetController extends app.Controller {
		* index () {
			const { ctx, service } = this;
			const sheetId = ctx.params.sheetId;
			const userId = ctx.session.userId;
			let user = { isLogin: false };
			const data = {
				title: '创建书单',
				csrf: this.ctx.csrf,
			};
			if (userId) {
	    		user = yield service.user.find(userId);
	    		user.isLogin = true;
	    	}
	    	const booklist = yield service.sheet.findBookList(sheetId);

	    	data.booklist = booklist;
	    	data.user = user;
			ctx.body = yield ctx.renderView('../view/sheet.tpl', data);
		}
	}
	return SheetController;
}