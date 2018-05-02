<%@ page language="java" contentType="text/html; charset=utf-8"
	pageEncoding="utf-8"%>
<%@taglib uri="http://java.sun.com/jsp/jstl/core" prefix="c"%>
<!DOCTYPE html>
<html>
<head>
<title>Bootstrap 实例</title>
<meta charset="utf-8">
<meta name="viewport" content="width=device-width, initial-scale=1">
<link rel="stylesheet"
	href="https://cdn.bootcss.com/bootstrap/4.0.0-beta/css/bootstrap.min.css">
<script src="https://cdn.bootcss.com/jquery/3.2.1/jquery.min.js"></script>
<script src="https://cdn.bootcss.com/popper.js/1.12.5/umd/popper.min.js"></script>
<script
	src="https://cdn.bootcss.com/bootstrap/4.0.0-beta/js/bootstrap.min.js"></script>
</head>
<body>

	<div class="container-fluid">
		<div class="row">
			<div class="col-lg-3" style="width: 300px;">


				<div id="accordion">
					<div class="card">
						<div class="card-header">
							<a class="card-link" data-toggle="collapse"
								data-parent="#accordion" href="#collapseOne"> Collapsible
								Group Item #1 </a>
						</div>
						<div id="collapseOne" class="collapse show">
							<div class="card-block">Lorem ipsum dolor sit amet,
								consectetur adipisicing elit, sed do eiusmod tempor incididunt
								ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis
								nostrud exercitation ullamco laboris nisi ut aliquip ex ea
								commodo consequat.</div>
						</div>
					</div>
					<div class="card">
						<div class="card-header">
							<a class="collapsed card-link" data-toggle="collapse"
								data-parent="#accordion" href="#collapseTwo"> Collapsible
								Group Item #2 </a>
						</div>
						<div id="collapseTwo" class="collapse">
							<div class="card-block">Lorem ipsum dolor sit amet,
								consectetur adipisicing elit, sed do eiusmod tempor incididunt
								ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis
								nostrud exercitation ullamco laboris nisi ut aliquip ex ea
								commodo consequat.</div>
						</div>
					</div>
					<div class="card">
						<div class="card-header">
							<a class="collapsed card-link" data-toggle="collapse"
								data-parent="#accordion" href="#collapseThree"> Collapsible
								Group Item #3 </a>
						</div>
						<div id="collapseThree" class="collapse">
							<div class="card-block">Lorem ipsum dolor sit amet,
								consectetur adipisicing elit, sed do eiusmod tempor incididunt
								ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis
								nostrud exercitation ullamco laboris nisi ut aliquip ex ea
								commodo consequat.</div>
						</div>
					</div>
				</div>



			</div>
			<div class="col-lg-9"></div>

		</div>




	</div>

</body>
</html>
