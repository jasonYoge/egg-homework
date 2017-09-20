<nav id="navbar" class="navbar navbar-fixed-top navbar-dark bg-primary">
	<a href="#" class="navbar-brand">MyBookList</a>
	<ul class="nav navbar-nav pull-right">
		<% if (isLogin) { %>
		<li class="nav-item active">
			<a href="#" class="nav-link"><%= user.name %>的书单</a>
		</li>
		<li class="nav-item active">
			<a href="#" class="nav-link">添加图书</a>
		</li>
		<% } else { %>
		<li class="nav-item">
			<a href="#" class="nav-link">登陆</a>
		</li>
		<li class="nav-item">
			<a href="#" class="nav-link">注册</a>
		</li>
		<% } %>
	</ul>
</nav>