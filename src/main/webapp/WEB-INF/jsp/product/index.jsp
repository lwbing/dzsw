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
 <style>
  .carousel-inner img {
      width: 100%;
      height: 100%;
  }
  </style>
</head>
<body>
	<div class="container-fluid">
		<div class="row">
			<div id="head_imgs" class="carousel slide" data-ride="carousel">
				<!-- 指示符 -->
				<ul class="carousel-indicators">
					<li data-target="#head_imgs" data-slide-to="0" class="active"></li>
					<li data-target="#head_imgs" data-slide-to="1"></li>
					<li data-target="#head_imgs" data-slide-to="2"></li>
				</ul>

				<!-- 轮播图片 -->
				<div class="carousel-inner">
					<div class="carousel-item active">
						<img src="http://static.runoob.com/images/mix/img_fjords_wide.jpg">
					</div>
					<div class="carousel-item">
						<img src="http://static.runoob.com/images/mix/img_nature_wide.jpg">
					</div>
					<div class="carousel-item">
						<img src="http://static.runoob.com/images/mix/img_mountains_wide.jpg">
					</div>
				</div>
			</div>
		</div>
		<!-- 分类 -->
		<div class="cats">
			<div class="row">
				<div class="col-3"><a></a></div>
				<div class="col-3"></div>
				<div class="col-3"></div>
				<div class="col-3"></div>
			</div>
		</div>
		<div class="row" style="margin-top: 10px;border-bottom: 1px solid #dfdfdf;">
			<div class="col-9">
				<ul style="height: 25px; overflow: hidden;">
						<li class="line_li"></li>
						<li class="inline_block">限时特卖</li>
				</ul>
			</div>
			<div class="col-3">
				<p><a href="#">更多</a></p>
			</div>
		</div>
	</div>
</body>
</html>