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
		
		.mine
		{
			border-color:black;
			border-right:1px solid;
		}
	</style>
	<link rel="stylesheet" href="http://maxcdn.bootstrapcdn.com/bootstrap/3.3.5/css/bootstrap.min.css">
	<script src="https://ajax.googleapis.com/ajax/libs/jquery/1.11.3/jquery.min.js"></script>
  	<script type="text/javascript" src="js/updateprofile.js"></script>
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
  				<a href="accountsettings.php" class="btn btn-primary "><span class="glyphicon glyphicon-user"></span> Account Settings</a>
  				<a href="buytestseries.php" class="btn btn-primary active"><span class="glyphicon glyphicon-credit-card"></span> Buy Test Series</a>
  				<a href="aboutus.php" class="btn btn-primary"><span class="glyphicon glyphicon-globe"></span> About Us</a>
  				<a href="contactus.php" class="btn btn-primary"><span class="glyphicon glyphicon-phone-alt"></span> Contact Us</a>
  				<a href="phpFiles/logout.php" class="btn btn-danger"><span class="glyphicon glyphicon-log-out"></span> Log Out</a>
			</div>
		</div>
	</div>
	
	
	
	
	
	<div class="container margin-up text-justify col-sm-offset-2 col-sm-8">
			
		<font size="3%">Thanks for considering in buying our Test Series.Please complete all the sample tests to get a good load of our website.
      	Unfortunately we don't have online payment system as of now.If you want to buy the test series , you need to pay Rs.<b>200</b>/-
      	.You can transfer this money to the given account details either by internet banking or by challan as per your comfort.
      	After You complete the payment,note down your transaction/reference number and mail it to the given emailid below to activate
      your test series account.We sincerely request you not to spam our Mail Id.If you have any queries regarding the payment, please contact us at the given mail id.
      </font>
      <br>
      <br>
      
      <div class="table-condensed col-sm-offset-3 col-sm-6">
      <table  class="table table-striped text-center">
      <tr><td>Bank Name</td><td>STATE BANK OF INDIA</td></tr>
      <tr><td>Account Name</td><td>SARADHI RAMAKRISHNA</td></tr>
      <tr><td>Account Number</td><td>00000032876669568</td></tr>
      <tr><td>IFSC Code</td><td>SBIN0010098</td></tr>
      <tr><td>Branch Address</td><td>KUKATPALLY,HYDERABAD</td></tr>
      <tr><td>Email Id</td><td>payment@goodcreed.com</td></tr>
      </table>
      
      
    </div>
    </div>
    
	
</body>
</html>