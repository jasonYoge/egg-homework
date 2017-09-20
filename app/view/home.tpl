<!DOCTYPE html>
<html>
<head>
	<title><%= title %></title>
	<%- include('header.tpl') %>
	<link rel="stylesheet" type="text/css" href="/public/resource/css/home.css">
</head>
<body>
<%- include('navbar.tpl') %>
<div class="container-fluid">
	<% list.forEach(function (item) { %>
	<div class="row">
		<div class="col-md-8 col-md-offset-2">
			<a class="sheet-link" href="./sheet/<%= item.id %>">
				<div class="list-panel">
					<div class="list-panel-logo">
						<% if (item.logo) { %>
						<img src="<%= item.logo %>">
						<% } else { %>
						<img src="http://via.placeholder.com/450x300">
						<% } %>
					</div>
					<div class="list-panel-main">
						<h3><%= item.name %></h3>
						<p class="text-muted"><%= item.time %></p>
						<p><%= item.desc %></p>
					</div>
				</div>
			</a>
		</div>
	</div>
	<% }) %>
</div>
</body>
</html>