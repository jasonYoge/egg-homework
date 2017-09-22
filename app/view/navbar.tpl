<nav id="navbar" class="navbar navbar-fixed-top navbar-dark bg-primary">
	<a href="/" class="navbar-brand">MyBookList</a>
	<ul class="nav navbar-nav pull-right">
		<% if (user.isLogin) { %>
		<li class="nav-item active">
			<a href="/user/<%= user.user_id %>" class="nav-link"><%= user.user_name %>的书单</a>
		</li>
		<li class="nav-item active">
			<a href="/createSheet" class="nav-link">添加书单</a>
		</li>
		<li class="nav-item active">
			<a href="/createBook" class="nav-link">添加图书</a>
		</li>
		<% } else { %>
		<li class="nav-item">
			<a href="#login-modal" data-toggle="modal" id="login" class="nav-link">登陆</a>
		</li>
		<li class="nav-item">
			<a href="/register" id="register" class="nav-link">注册</a>
		</li>
		<% } %>
	</ul>
</nav>