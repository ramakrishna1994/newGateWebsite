<?php 
require_once 'phpFiles/isSessionSet.php';
?>




<html>
<head>
	<style>
		.margin-up
		{
			margin-top:0.5%;
		}
		  .content
		  {
		  	cursor:pointer;
		  }
	</style>
	<link rel="stylesheet" href="http://maxcdn.bootstrapcdn.com/bootstrap/3.3.5/css/bootstrap.min.css">
	<script src="https://ajax.googleapis.com/ajax/libs/jquery/1.11.3/jquery.min.js"></script>
  	<script src="http://maxcdn.bootstrapcdn.com/bootstrap/3.3.5/js/bootstrap.min.js"></script>
</head>
<body>
	<div class="container-fluid well well-sm">
		<div class="row">
			<div class="col-sm-4">
				
			</div>
			<div class="col-sm-4">
				<div class="row text-center">
					<font size="4%" color="blue"><em><strong>GOODCREED</strong></em></font>
				</div>
				<div class="row text-center">
					<font size="4%"><strong>Gate Online Test Series</strong></font>
				</div>
				<div class="row text-center">
					(Computer Science And Engineering)
				</div>	
			</div>	
			<div class="col-sm-4">
				<center><img src="../profilePictures/<?php echo $_SESSION['gateimage'] ?>" class="img-circle" width="9%" height="7%"><b><font color="blue">  <?php echo $_SESSION['gatefirstname'].' '.$_SESSION['gatelastname'] ?></font></center> 
			</div>
		</div>
		<div class="row text-center margin-up">
			<div class="btn-group">
  				<a href="mytests.php" class="btn btn-primary"><span class="glyphicon glyphicon-list-alt"></span> My Tests</a>
  				<a href="testresults.php" class="btn btn-primary"><span class="glyphicon glyphicon-check"></span> Test Results</a>
  				<a href="testssyllabus.php" class="btn btn-primary active"><span class="glyphicon glyphicon-book"></span> Tests Syllabus</a>
  				<a href="accountsettings.php" class="btn btn-primary"><span class="glyphicon glyphicon-user"></span> Account Settings</a>
  				<a href="buytestseries.php" class="btn btn-primary"><span class="glyphicon glyphicon-credit-card"></span> Buy Test Series</a>
  				<a href="aboutus.php" class="btn btn-primary"><span class="glyphicon glyphicon-globe"></span> About Us</a>
  				<a href="contactus.php" class="btn btn-primary"><span class="glyphicon glyphicon-phone-alt"></span> Contact Us</a>
  				<a href="phpFiles/logout.php" class="btn btn-danger"><span class="glyphicon glyphicon-log-out"></span> Log Out</a>
			</div>
		</div>
	</div>
	
	
	
	
	
	<div class="container margin-up">
	
		<div class="panel-group" id="subjectWise">
		
		
			<div class="panel panel-default">
    			<div class="panel-heading collapsed text-center content" data-toggle="collapse" data-parent="#subjectWise" href="#cn">
      				Computer Networks
      			</div>
    			<div id="cn" class="panel-collapse collapse">
      				<div class="panel-body">
      					Lorem ipsum dolor sit amet, consectetur adipisicing elit,sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim adminim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea
      					commodo consequat.
      				</div>
    			</div>
  			</div>
  			
  			
  			
  			
  			<div class="panel panel-default">
    			<div class="panel-heading collapsed text-center content" data-toggle="collapse" data-parent="#subjectWise" href="#co">
      				Computer Organization
      			</div>
    			<div id="co" class="panel-collapse collapse">
      				<div class="panel-body">
      					Lorem ipsum dolor sit amet, consectetur adipisicing elit,
      					sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad
      					minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea
      					commodo consequat.
      				</div>
    			</div>
  			</div>
  			
  			
  			
  			<div class="panel panel-default">
    			<div class="panel-heading collapsed text-center content" data-toggle="collapse" data-parent="#subjectWise" href="#cd">
      				Compiler Design
      			</div>
    			<div id="cd" class="panel-collapse collapse">
      				<div class="panel-body">
      					Lorem ipsum dolor sit amet, consectetur adipisicing elit,
      					sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad
      					minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea
      					commodo consequat.
      				</div>
    			</div>
  			</div>
  			
  			
  			
  			
  			
  			
  			
  			
		</div>
	</div>
</body>
</html>