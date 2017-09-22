$(function () {
	var $bookname = $('#bookname');
	var $bookdesc = $('#bookdesc');
	var $csrf = $('#csrf');

	$('#form').on('submit', function (e) {
		e.preventDefault();
		var name = $bookname.val().trim();
		var desc = $bookdesc.val();

		if (name.length >= 32) {
			alert('书名不能超过31个字符');
			return;
		}
		if (desc.length >= 512) {
			alert('描述不能超过511个字符');
			return;
		}

		var formData = new FormData();
		formData.append('bookname', name);
		formData.append('bookdesc', desc);
		formData.append('bookimg', $('#bookimg')[0].files[0]);

		$.ajax({
			url: '/api/v1/createBook?_csrf=' + $csrf.val(),
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