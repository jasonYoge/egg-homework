<!DOCTYPE html>
<html>
<head>
	<title>登陆</title>
	<%- include('header.tpl') %>
</head>
<body>
<% if (loginResult) { %>
<script type="text/javascript">
	alert('账号或者密码错误');
</script>
<% } %>
</body>
</html>