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
</head>
<body>
	<div class="container-fluid">
		<div class="row" style="background-color: #ff9c00; height: 50px;">
			<div class="col-1"></div>
			<div class="col-11">
				<p class="text-center" style="color: #fefff8; font-size: 18px;margin-top: 8px;">创建店铺</p>
			</div>
		</div>
		<div style="margin-top: 6px;">
			<!-- form 表单 -->
			<div style="margin-top: 8px;">
				<form>
					<div class="row" style="padding: 15px;border-bottom: 1px solid #dfdfdf;">
						<div class="col-3"><label for="loginName">
								<span style="color: red;">*</span>店铺名称:</label>
						</div>
						<div class="col-9">
							<input type="text" class="form-control" style="width: 90%;" id="loginName" placeholder="登陆账号">
						</div>
					</div>
					<div class="row">
						<div class="col-3"></div>
						<div class="col-9"  style="color: gray;font-size: 11px;">店铺名称创建后将不可更改</div>
					</div>
					
					<div class="row" style="padding: 15px;border-bottom: 1px solid #dfdfdf;">
						<div class="col-3">
							<span style="color: red;">*</span>
							<label for="pwd">商铺电话:</label>
						</div>
						<div class="col-9">
							<input type="text" class="form-control" style="width: 90%;" id="tel" placeholder="手机号码">
						</div>
					</div>
					<div class="row">
						<div class="col-3"></div>
						<div class="col-9"  style="color: gray;font-size: 11px;">输入联系电话，用于用户信息的反馈及问题的处理</div>
					</div>
					
					<div class="row" style="padding: 15px;border-bottom: 1px solid #dfdfdf;">
						<div class="col-3">
							<span style="color: red;">*</span>
							<label for="pwd">商铺类目:</label>
						</div>
						<div class="col-9">
							<input type="text" class="form-control" style="width: 90%;" id="tel" placeholder="手机号码">
						</div>
					</div>
					<div class="row">
						<div class="col-3"></div>
						<div class="col-9"  style="color: gray;font-size: 11px;">选择企业单位公司经验产品类型</div>
					</div>

					<div class="row" style="padding: 15px;border-bottom: 1px solid #dfdfdf;">
						<div class="col-3">
							<span style="color: red;">*</span>
							<label for="pwd">logo:</label>
						</div>
						<div class="col-9">
							<input type="file" class="form-control" style="width: 90%;" id="tel" placeholder="图片文件">
						</div>
					</div>
					<div class="row">
						<div class="col-3"></div>
						<div class="col-9"  style="color: gray;font-size: 11px;">选择一张图片做为店铺的logo,此项为飞必填</div>
					</div>
					<div class="row" style="padding: 15px;border-bottom: 1px solid #dfdfdf;">
					     <button type="submit" class="btn btn-primary btn-block" style="background-color:#ff9c00; border: none;">注册</button>
					</div>
				</form>
			</div>
		</div>
	</div>
</body>
</html>