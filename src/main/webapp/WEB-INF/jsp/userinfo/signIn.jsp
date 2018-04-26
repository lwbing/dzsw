<%@ page language="java" contentType="text/html; charset=utf-8" pageEncoding="utf-8"%>
<!DOCTYPE html>
<html>
<head>
<meta charset="UTF-8" />
<meta name="viewport" content="width=device-width, initial-scale=1, shrink-to-fit=no" />
<title>ç¨æ·ç»å½</title>

<link th:href="@{/bootstrap/css/bootstrap.min.css}" rel="stylesheet"/>
<script th:src="@{/bootstrap/js/jquery.min.js}"></script>
<script th:src="@{/bootstrap/js/bootstrap.min.js}"></script>
</head>
<body>

<div class="container">
  <h2>åèè¡¨å</h2>
  <form class="form-inline" action="signIn" method="post">
  	<div class="">
	  	<label for="email">ç»å½è´¦å·:</label>
	    <input type="email" name="userName" class="form-control" id="email" placeholder="ç¨æ·å" />
  	</div>
    <div>
    	<label for="pwd">ç»å½å¯ç :</label>
    	<input type="password" name="userPwd" class="form-control" id="pwd" placeholder="è¾å¥å¯ç " />
    </div>
    <div>
    	<button type="submit" class="btn btn-primary">ç»å½</button>
    </div>
  </form>
</div>
</body>
</html>