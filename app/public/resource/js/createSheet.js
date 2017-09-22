$(function () {
	var $sheetname = $('#sheetname');
	var $sheetdesc = $('#sheetdesc');
	var $booklist = $('#booklist');
	var $csrf = $('#csrf');

	$('#form').on('submit', function (e) {
		e.preventDefault();
		var name = $sheetname.val().trim();
		var desc = $sheetdesc.val();
		var booklist = $booklist.val();
		if (booklist.length == 0) {
			alert('请添加书单中的图书');
			return;
		}

		if (name.length >= 32) {
			alert('书单名不能超过31个字符');
			return;
		}
		if (desc.length >= 512) {
			alert('书单描述不能超过511个字符');
			return;
		}

		var formData = new FormData();
		formData.append('sheetname', name);
		formData.append('sheetdesc', desc);
		formData.append('booklist', JSON.stringify(booklist));
		formData.append('sheetimg', $('#sheetimg')[0].files[0]);

		$.ajax({
			url: '/api/v1/createSheet?_csrf=' + $csrf.val(),
			type: 'post',
			cache: false,
			processData: false,
			data: formData,
			dataType: 'json',
			contentType: false
		})
		.done(function (resolve) {
			if (resolve.status === 0) {
				alert(resolve.message);
				window.location = '/';
			} else {
				alert(resolve.message);
			}
		})
		.fail(function (err) {
			alert(err.message);
		});
	});
});