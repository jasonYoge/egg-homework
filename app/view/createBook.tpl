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
				<div class="panel-heading">创建图书</div>
				<div class="panel-body">
					<form class="form-horizontal" id="form" role="form">
						<div class="form-group">
							<label for="bookname" class="col-sm-2 control-label">书名：</label>
							<div class="col-sm-8">
								<input type="text" name="bookname" class="form-control" id="bookname" placeholder="请输入书名">
							</div>
						</div>
						<div class="form-group">
							<label for="bookdesc" class="col-sm-2 control-label">图书描述：</label>
							<div class="col-sm-8">
								<textarea name="bookdesc" class="form-control" rows="3" id="bookdesc" placeholder="请输入图书描述"></textarea>
							</div>
						</div>
						<div class="form-group">
							<div class="col-sm-8 col-sm-offset-2">
								<label class="sr-only" for="bookimg">图书封面</label>
								<input type="file" name="bookimg" id="bookimg">
							</div>
						</div>
						<div class="form-group">
							<div class="col-sm-8 col-sm-offset-2">
								<button type="submit" class="btn btn-primary">添加图书</button>
							</div>
						</div>
						<input type="text" name="csrf" id="csrf" hidden="true" value="<%= csrf %>">
					</form>
				</div>
			</div>
		</div>
	</div>
</div>
<script type="text/javascript" src="/public/resource/js/createBook.js"></script>
</body>
</html>