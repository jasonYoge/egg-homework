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
				<div class="panel-heading">创建书单</div>
				<div class="panel-body">
					<form class="form-horizontal" id="form" role="form">
						<div class="form-group">
							<label for="sheetname" class="col-sm-2 control-label">书单名：</label>
							<div class="col-sm-8">
								<input type="text" name="sheetname" class="form-control" id="sheetname" placeholder="请输入书单名">
							</div>
						</div>
						<div class="form-group">
							<label for="sheetdesc" class="col-sm-2 control-label">书单描述：</label>
							<div class="col-sm-8">
								<textarea name="sheetdesc" class="form-control" rows="3" id="sheetdesc" placeholder="请输入书单描述"></textarea>
							</div>
						</div>
						<div class="form-group">
							<label for="booklist" class="col-sm-2 control-label">选择图书：</label>
							<div class="col-sm-8">
								<select name="booklist" multiple class="form-control" id="booklist">
									<% booklist.forEach(function (book) { %>
									<option value="<%= book.book_id %>"><%= book.book_name %></option>
									<% }) %>
								</select>
							</div>
						</div>
						<div class="form-group">
							<div class="col-sm-8 col-sm-offset-2">
								<label class="sr-only" for="sheetimg">书单封面</label>
								<input type="file" name="sheetimg" id="sheetimg">
							</div>
						</div>
						<div class="form-group">
							<div class="col-sm-8 col-sm-offset-2">
								<button type="submit" class="btn btn-primary">添加书单</button>
							</div>
						</div>
						<input type="text" name="csrf" id="csrf" hidden="true" value="<%= csrf %>">
					</form>
				</div>
			</div>
		</div>
	</div>
</div>
<script type="text/javascript" src="/public/resource/js/createSheet.js"></script>
</body>
</html>