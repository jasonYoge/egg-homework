$(function () {
	var $form = document.forms[0];
	
	$form.addEventListener('submit', function (e) {
		e.preventDefault();
		var pwd = document.getElementById('pwd');
		var pwd_confirm = document.getElementById('pwd_confirm');
		var username = document.getElementById('username');
		var csrf = document.getElementById('csrf');

		if (pwd.value !== pwd_confirm.value) {
			alert('两次输入的密码必须相同');
			pwd.value = '';
			pwd_confirm.value = '';
			return;
		}

		var data = 'username=' + username.value + '&password=' + pwd.value + '&_csrf=' + csrf.value;

		$.ajax({
			url: '/api/v1/register',
			method: 'post',
			dataType: 'json',
			data: data,
			processData: false,
			cache: false
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
			if (err) {
				alert(err.message);
			}
		});
	}, false);
});