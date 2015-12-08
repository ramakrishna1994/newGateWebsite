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
		 .colBorder
  		{
   			border-right:1px solid;
   			border-color:black;
   			height:60%;
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
				<center><img src="../profilePictures/<?php echo $_SESSION['gateimage'] ?>" class="img-circle" width="9%" height="7%" id="miniImage"><b><font color="blue">  <?php echo $_SESSION['gatefirstname'].' '.$_SESSION['gatelastname'] ?></font></center> 
			</div>	
		</div>
		<div class="row text-center margin-up">
			<div class="btn-group">
  				<a href="mytests.php" class="btn btn-primary"><span class="glyphicon glyphicon-list-alt"></span> My Tests</a>
  				<a href="testresults.php" class="btn btn-primary"><span class="glyphicon glyphicon-check"></span> Test Results</a>
  				<a href="testssyllabus.php" class="btn btn-primary"><span class="glyphicon glyphicon-book"></span> Tests Syllabus</a>
  				<a href="accountsettings.php" class="btn btn-primary active"><span class="glyphicon glyphicon-user"></span> Account Settings</a>
  				<a href="buytestseries.php" class="btn btn-primary"><span class="glyphicon glyphicon-credit-card"></span> Buy Test Series</a>
  				<a href="aboutus.php" class="btn btn-primary"><span class="glyphicon glyphicon-globe"></span> About Us</a>
  				<a href="contactus.php" class="btn btn-primary"><span class="glyphicon glyphicon-phone-alt"></span> Contact Us</a>
  				<a href="phpFiles/logout.php" class="btn btn-danger"><span class="glyphicon glyphicon-log-out"></span> Log Out</a>
			</div>
		</div>
	</div>
	
	
	
	
	
	<div class="container margin-up">
	
			<div class="row">
				<div class="alert text-center" id="statusDivision">
					
				</div>
			</div>
			<div class="col-sm-5">
				
				<div class="row text-center">
					<div class="form-horizontal">
			
						<div class="form-group" >
    						<label class="control-label col-sm-5"></label>
    						<div class="col-sm-7"><b><font color="blue">Password Management Section</font></b></div>
  						</div>
  				
  						
  						<div class="form-group" >
    						<label class="control-label col-sm-5" ></label>
    						<div class="col-sm-7"></div>
  						</div>
  				
						<div class="form-group" id="currentPasswordDivision">
    						<label class="control-label col-sm-5" for="currentPassword"><span class = "glyphicon glyphicon-lock"></span></label>
    						<div class="col-sm-7">
      							<input type="password" class="form-control" id="currentPassword" placeholder="Enter Current Password" data-toggle="popover"  data-trigger="hover" data-placement="top" data-content="" autofocus>
      							<span class="" id="currentPasswordErrorSpan"></span>
    						</div>
  						</div>
  						
  						<div class="form-group" id="newPasswordDivision">
    						<label class="control-label col-sm-5" for="newPassword"><span class = "glyphicon glyphicon-lock"></span></label>
    						<div class="col-sm-7">
      							<input type="password" class="form-control" id="newPassword" placeholder="Enter New Password" data-toggle="popover"  data-trigger="hover" data-placement="top" data-content="" autofocus>
      							<span class="" id="newPasswordErrorSpan"></span>
    						</div>
  						</div>
  						
  						<div class="form-group" id="confirmPasswordDivision">
    						<label class="control-label col-sm-5" for="confirmPassword"><span class = "glyphicon glyphicon-lock"></span></label>
    						<div class="col-sm-7">
      							<input type="password" class="form-control" id="confirmPassword" placeholder="Confirm New Password" data-toggle="popover"  data-trigger="hover" data-placement="top" data-content="" autofocus>
      							<span class="" id="confirmPasswordErrorSpan"></span>
    						</div>
  						</div>
  						
  						<div class="form-group"> 
    						<div class="control-label col-sm-offset-1 col-sm-8">
      						<button type="submit" class="btn btn-success" onclick="changePassword()">Submit</button>
    					</div>
  					</div>
  						
  				</div>		
  				
  		
				</div>
			</div>
			
			
			<div class="col-sm-1 colBorder">
				
			</div>
			
			
			<div class="col-sm-4">
				<div class="form-horizontal">
			
						<div class="form-group" >
    						<label class="control-label col-sm-5"></label>
    						<div class="col-sm-7"><b><font color="blue">Profile Picture Section</font></b></div>
  						</div>
  						
  						
  						<div class="form-group" >
    						<label class="control-label col-sm-5"></label>
    						<div class="col-sm-7"></div>	
  						</div>
  						
  						<div class="form-group" >
    						
    						<div class="col-sm-7 col-sm-offset-4 text-center" id="profilePicture">
    							<!-- ---------image Division -->
							</div>
  						</div>
  						
  						<div class="form-group" >
    						<label class="control-label col-sm-5"></label>
    						<div class="col-sm-1 text-center">
    							<input type="file" id="image">
							</div>
  						</div>
  						
  						
  						<div class="form-group" >
    						<label class="control-label col-sm-6"></label>
    						<div class="col-sm-4 text-center" >
    							<button type="submit" class="btn btn-danger" onclick="updateProfilePic()">Submit</button>
							</div>
  						</div>
  				</div>
			</div>
		
	
	</div>
	
	<script type="text/javascript" src="js/accountsettings.js"></script>
</body>
</html>