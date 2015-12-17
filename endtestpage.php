<?php 
require_once 'phpFiles/isSessionSet.php';
?>



<html>
<head>
	<style>
		.margin-up
		{
			margin-top:50%;
		}
	
	</style>
	<link rel="stylesheet" href="http://maxcdn.bootstrapcdn.com/bootstrap/3.3.5/css/bootstrap.min.css">
	
  	
</head>

<body>

	<div class="container-fluid">
		<div class="col-sm-offset-4 col-sm-4">
			<div class="panel panel-primary margin-up">
  				<div class="panel-heading text-center">
  				
  				
					You have successfully completed your test.<br>
					Please click on <b>TEST RESULTS</b> tab for more details.<br>
					<b><span class="glyphicon glyphicon-thumbs-up"></span> Thanks!!</b><br><br>
					<button type="button" class="btn btn-primary" onclick="window.close()">Close Window</button>
  				
  				</div>
			</div>
		</div>
	</div>
</body>
</html>