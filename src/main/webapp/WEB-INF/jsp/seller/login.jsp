<%@ page language="java" contentType="text/html; charset=utf-8" pageEncoding="utf-8"%>
<%@taglib uri="http://java.sun.com/jsp/jstl/core" prefix="c"%>
<!DOCTYPE html>
<html>
<head>
<meta charset="utf-8">
<meta name="viewport" content="width=device-width, initial-scale=1">

<link rel="stylesheet" href="/bootstrap/css/bootstrap.min.css" />
<script src="/bootstrap/js/jquery.min.js"></script>
<script src="/bootstrap/js/bootstrap.min.js"></script>
<link rel="stylesheet" href="/bootstrap/css/dzsw.css"></link>
<link rel="stylesheet" href="/bootstrap/css/login.css"></link>
</head>
<body>
	<div class="container-fluid">
		<div id="login_top">
		<div id="welcome">
			欢迎使用商户后台管理系统
		</div>
		<div id="back">
			<a href="#">返回首页</a>&nbsp;&nbsp; | &nbsp;&nbsp;
			<a href="#">帮助</a>
		</div>
	</div>
	<div id="login_center">
		<div id="login_area">
			<div id="login_form">
				<form action="index.html" method="post">
					<div id="login_tip">
						用户登录&nbsp;&nbsp;UserLogin
					</div>
					<div><input type="text" class="username"></div>
					<div><input type="text" class="pwd"></div>
					<div id="btn_area">
						<input type="submit" name="submit" id="sub_btn" value="登&nbsp;&nbsp;录">&nbsp;&nbsp;
						<input type="text" class="verify">
						<img src="/images/login/verify.png" alt="" width="80" height="40">
					</div>
				</form>
			</div>
		</div>
	</div>
	<div id="login_bottom">
		版权所有
	</div>
	</div>
</body>
</html>