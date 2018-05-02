<%@ page language="java" contentType="text/html; charset=utf-8" pageEncoding="utf-8"%>
<%@taglib uri="http://java.sun.com/jsp/jstl/core" prefix="c"%>  
<!DOCTYPE html>
<html>
<head>
<meta charset="UTF-8" />
<meta name="viewport"
	content="width=device-width, initial-scale=1, shrink-to-fit=no" />
<title>用户登录</title>

<link href="/bootstrap/css/bootstrap.min.css" rel="stylesheet" />
<script src="/bootstrap/js/jquery.min.js"></script>
<script src="/bootstrap/js/bootstrap.min.js"></script>
</head>
<body>

	<div class="container-fluid">
		<div class="row" style="height: 80px; background-color: #1c87ef;"></div>
		<div class="row">
			<div class="col-md-3" style="width: 280px;">
				<h2></h2>
				<ul class="list-group">
					<li class="list-group-item">First item</li>
					<li class="list-group-item">Second item</li>
					<li class="list-group-item">Third item</li>
				</ul>
			</div>
			<div class="col-md-9">
				<div class="row" style="border-left: 6px solid #01add5; height: 25px; padding-left: 10px; margin-top: 8px;">快速检票</div>
				<div class="row" style="border-bottom: 2px solid #dcdcdc; margin-top: 6px;"></div>
				<div class="row" style="margin-top: 10px; padding: 12px; background-color: #f1faf9;">
					<form action="selectCode" method="post">
						<input type="text" name="validateCode" style="width: 280px; height: 40px;" /> 
						<input type="submit" id="selectBtn" class="bg-warning text-white" value="查询" style="width: 150px; height: 40px;" />
					</form>
				</div>
				<div>
					<table class="table" id="orders">
						<thead>
							<tr>
								<th>订单号</th>
								<th>产品名称</th>
								<th>人数</th>
								<th>联系人/电话</th>
								<th>下单日期</th>
								<th>状态</th>
								<th>付款金额</th>
								<th>操作</th>
							</tr>
						</thead>
						<tbody>
							<c:forEach items="${order}" var="lm">
								<tr>
									<td>${lm.orderCode}</td>
									<td>${lm.productName}</td>
									<td>${lm.num}</td>
									<td>${lm.mobileNumber}</td>
									<td>${lm.createTime}</td>
									<td>${lm.isValidate}</td>
									<td>${lm.money}</td>
									<td ><button id="obtn" class="bg-warning text-white">使用</button></td>
								</tr>
							</c:forEach>
						</tbody>
					</table>
				</div>
			</div>
		</div>
	</div>

</body>
</html>