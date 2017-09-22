<!DOCTYPE html>
<html>
<head>
	<title><%= title %></title>
	<%- include('header.tpl') %>
	<link rel="stylesheet" type="text/css" href="/public/resource/css/sheet.css">
</head>
<body>
<%- include('navbar.tpl') %>
<div class="container-fluid">
	<% booklist.forEach(function (item) { %>
	<div class="row">
		<div class="col-md-8 col-md-offset-2">
			<div class="panel panel-default">
				<div class="panel-heading"><%= item.book_name %></div>
				<div class="panel-body">
					<div class="book-img">
						<% if (item.book_logo_path) { %>
						<img src="/public/resource/img/<%= item.book_logo_path %>">
						<% } else { %>
						<img src="http://via.placeholder.com/450x300">
						<% } %>
					</div>
					<div class="book-desc">
						<p><%= item.book_desc %></p>
					</div>
				</div>
			</div>
		</div>
	</div>
	<% }) %>
</div>
</body>
</html>