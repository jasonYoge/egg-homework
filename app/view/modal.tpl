<div class="modal fade" id="login-modal" tabindex="-1" role="dialog" aria-labelledby="myModalLabel" aria-hidden="true">
	<div class="modal-dialog modal-sm">
	    <div class="modal-content">
	        <div class="modal-header">
	            <button type="button" class="close" data-dismiss="modal" aria-hidden="true">&times;</button>
	            <h4 class="modal-title" id="myModalLabel">登陆我的账号</h4>
	        </div>
	        <form action="/api/v1/login?_csrf=<%= csrf %>" method="post" role="form">
	        	<div class="modal-body">
	        		<div class="form-group">
	        			<label for="username">用户名：</label>
	        			<input type="text" name="username" placeholder="用户名" class="form-control">
	        		</div>
	        		<div class="form-group">
	        			<label for="username">密码：</label>
	        			<input type="password" name="password" placeholder="密码" class="form-control">
	        		</div>
		        </div>
		        <div class="modal-footer">
		            <button type="reset" class="btn btn-default" data-dismiss="modal">取消</button>
		            <button type="submit" class="btn btn-primary">登陆</button>
		        </div>
	        </form>
	    </div><!-- /.modal-content -->
	</div><!-- /.modal -->
</div>