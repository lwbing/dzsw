<%@ page language="java" contentType="text/html; charset=utf-8" pageEncoding="utf-8"%>
<!DOCTYPE html>
<html>
<head>
<meta charset="utf-8">
<meta name="viewport" content="width=device-width, initial-scale=1">

<link rel="stylesheet" href="/bootstrap/css/bootstrap.min.css" />
<script src="/bootstrap/js/jquery.min.js"></script>
<script src="/bootstrap/js/bootstrap.min.js"></script>
<link rel="stylesheet" href="/bootstrap/css/dzsw.css"></link>
</head>
<body>
	<div class="container-fluid">
		<div class="row" style="background-color: #ff9c00; height: 50px;">
			<div class="col-xs-1"></div>
			<div class="col-xs-11">
				<p class="text-center" style="color: #fefff8; font-size: 18px;">用户登录</p>
			</div>
		</div>
		<div style="margin-top: 6px;">
			<!-- form 表单 -->
			<div style="margin-top: 8px;">
				<form>
					<div class="row" style="padding: 15px;border-bottom: 1px solid #dfdfdf;">
						<div class="col-3"><label for="loginName">账号:</label></div>
						<div class="col-9">
							<input type="text" class="form-control" style="width: 90%;" id="loginName" placeholder="登陆账号">
						</div>
					</div>
					<div class="row" style="padding: 15px;border-bottom: 1px solid #dfdfdf;">
						<div class="col-3"><label for="pwd">密码:</label></div>
						<div class="col-9">
							<input type="password" class="form-control" style="width: 90%;" id="pwd" placeholder="登陆密码">
						</div>
					</div>
					
					<div class="row" style="padding: 15px;border-bottom: 1px solid #dfdfdf;">
						<div class="col-3"><label for="pwd">验证码:</label></div>
						<div class="col-6">
							<input type="text" class="form-control" style="width: 90%;" id="code" placeholder="输入验证码">
						</div>
						<div class="col-3">
							<input type="button" value="发送" class="form-control" style="width: 90%;">
						</div>
					</div>
					<div class="row" style="padding: 15px;border-bottom: 1px solid #dfdfdf;">
					     <button type="submit" class="btn btn-primary btn-block" style="background-color:#ff9c00; border: none;">登陆</button>
					</div>
				</form>
			</div>
		</div>
	</div>
</body>
</html>