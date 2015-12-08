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
	
	</style>
	<link rel="stylesheet" href="http://maxcdn.bootstrapcdn.com/bootstrap/3.3.5/css/bootstrap.min.css">
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
  				<a href="testssyllabus.php" class="btn btn-primary"><span class="glyphicon glyphicon-book"></span> Tests Syllabus</a>
  				<a href="accountsettings.php" class="btn btn-primary"><span class="glyphicon glyphicon-user"></span> Account Settings</a>
  				<a href="buytestseries.php" class="btn btn-primary"><span class="glyphicon glyphicon-credit-card"></span> Buy Test Series</a>
  				<a href="aboutus.php" class="btn btn-primary active"><span class="glyphicon glyphicon-globe"></span> About Us</a>
  				<a href="contactus.php" class="btn btn-primary"><span class="glyphicon glyphicon-phone-alt"></span> Contact Us</a>
  				<a href="phpFiles/logout.php" class="btn btn-danger"><span class="glyphicon glyphicon-log-out"></span> Log Out</a>
			</div>
		</div>
	</div>
	
	
	
	
	
	<div class="container margin-up text-justify">
	
		   
    <div class="col-sm-offset-2 col-sm-2"><img src="images/rk.jpg" class="img img-circle"></div>
    	<div class="col-sm-6">Hi. I am <b>Krishna Saradhi</b> , <b>CEO</b> and founder of  <i>GOODCREED</i> and designer of 
     this GATE Online Test Series .I am a gate aspirant like you and i have completed my B-tech from <b>JNTUH college of Engineering 
     </b>,Hyderabad in <i>Computer Science and Engineering</i> in 2015.
     I have taken gate exam in 2015 and ended up with <b>5083 </b>rank.
     
   
   When i first started  preparing for the gate exam , i found it very difficult to select an online test series best suitable for me.
   There are many online test series available
     out there with big names.Big names comes with big price.Even if we decide to buy the 
     test series by spending the money , they may still lack some of the features like chapter
     wise tests and unit tests etc.If we want to have all the features , then we have to pay 
     extra money and get the best test series.So i thought,if i am facing this difficulty,
     then every gate aspirant might be facing this difficulty.So i have designed this website
     considering all the common , basic and advanced features one tets series has to have
     which makes the aspirant life easy and allows him to focus more on gate preparation rather
     than wasting time in selecting the test series.
   
   </div>
	</div>
</body>
</html>