<!DOCTYPE html>
<html>
<head>
	<title><%= title %></title>
	<%- include('header.tpl') %>
</head>
<body>
<%- include('navbar.tpl') %>
<div class="container-fluid">
	<div class="row" style="margin-top: 100px;">
		<div class="col-md-8 col-md-offset-2">
			<div class="panel panel-default">
				<div class="panel-heading">用户注册</div>
				<div class="panel-body">
					<form class="form-horizontal" role="form">
						<div class="form-group">
							<label for="username" class="col-sm-2 control-label">用户名：</label>
							<div class="col-sm-8">
								<input type="text" name="username" class="form-control" id="username" placeholder="请输入用户名">
							</div>
						</div>
						<div class="form-group">
							<label for="password" class="col-sm-2 control-label">密码：</label>
							<div class="col-sm-8">
								<input type="password" name="password" class="form-control" id="pwd" placeholder="请输入密码">
							</div>
						</div>
						<div class="form-group">
							<label for="password" class="col-sm-2 control-label">确认密码：</label>
							<div class="col-sm-8">
								<input type="password" name="password" class="form-control" id="pwd_confirm" placeholder="请重复确认密码">
							</div>
						</div>
						<div class="form-group">
							<div class="col-sm-8 col-sm-offset-2">
								<button type="submit" class="btn btn-primary">注册</button>
							</div>
						</div>
						<input type="text" name="csrf" id="csrf" hidden="true" value="<%= csrf %>">
					</form>
				</div>
			</div>
		</div>
	</div>
</div>
<script type="text/javascript" src="/public/resource/js/register.js"></script>
</body>
</html>