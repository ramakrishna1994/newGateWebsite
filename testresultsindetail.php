<?php 
require_once 'phpFiles/isSessionSet.php';
if(isset($_POST['subjectresult']))
	$_SESSION['subjectresult']=$_POST['subjectresult'];
else 
	header('location:testresults.php');
//echo $_POST['subjectresult'];
?>




<html>
<head>
	<style>
		.margin-up
		{
			margin-top:0.5%;
		}
		.margin-all
		{
			margin:0.5%;
		}
		.well
		{
			background: #000000;
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
					<font size="4%" color="black"><strong>Gate Online Test Series</strong></font>
				</div>
				<div class="row text-center">
					<font color="black">(Computer Science And Engineering)</font>
				</div>	
			</div>
			<div class="col-sm-4">
				<center><img src="../profilePictures/<?php echo $_SESSION['gateimage'] ?>" class="img-circle" width="9%" height="7%" ><b><font color="blue">  <?php echo $_SESSION['gatefirstname'].' '.$_SESSION['gatelastname'] ?></font></center> 
			</div>	
		</div>
		<div class="row text-center margin-up">
			<div class="btn-group">
  				<a href="mytests.php" class="btn btn-primary"><span class="glyphicon glyphicon-list-alt"></span> My Tests</a>
  				<a href="testresults.php" class="btn btn-primary"><span class="glyphicon glyphicon-check"></span> Test Results</a>
  				<a href="testssyllabus.php" class="btn btn-primary"><span class="glyphicon glyphicon-book"></span> Tests Syllabus</a>
  				<a href="accountsettings.php" class="btn btn-primary"><span class="glyphicon glyphicon-user"></span> Account Settings</a>
  				<a href="buytestseries.php" class="btn btn-primary"><span class="glyphicon glyphicon-credit-card"></span> Buy Test Series</a>
  				<a href="aboutus.php" class="btn btn-primary"><span class="glyphicon glyphicon-globe"></span> About Us</a>
  				<a href="contactus.php" class="btn btn-primary"><span class="glyphicon glyphicon-phone-alt"></span> Contact Us</a>
  				<a href="phpFiles/logout.php" class="btn btn-danger"><span class="glyphicon glyphicon-log-out"></span> Log Out</a>
			</div>
		</div>
	</div>
	
	
	
	
	
	<div class="container margin-up">
	
		<div class="table-condensed ">
			
				
				<ul class="nav nav-tabs" style="cursor:pointer;">
    				<li class="active" id="marksAndRankings" onclick="navigate(1)"><a>Marks And Rankings</a></li>
    				<li id="answers" onclick="navigate(2)"><a>Check Your Answers</a></li>
    				<li class="pull-right" id="subjectName">Computer Networks Chapter 01 Test 01</li>
    				
  				</ul>
  				
  				
  				
  				<!-- ----------------------Answers Division --------------------------------------------->		
  				<div class="row" id="answersDivision">
  					<div class="col-sm-9 well well-sm">
							<div class="media">
								<div class="col-sm-10 text-center" id="questionNo">Question no : 01</div>
  								<div class="col-sm-2 text-right" id="maxMarks">Max Marks:2</div>
  								
  							</div>
  							
  							<div class="media" id="question">
  								
    									Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis pharetra varius quam sit amet vulputate. Quisque mauris augue, molestie tincidunt condimentum vitae, gravida a libero. Aenean sit amet felis dolor, in sagittis nisi. Sed ac orci quis tortor imperdiet venenatis. Duis elementum auctor accumsan. Aliquam in felis sit amet augue.
  							</div>
  							<div class="media" id="image">
  								
    								
  							</div>
  							<div class="media" id="numerical">
  								
    								
  							</div>
  							<div class="media" id="optionA">
  								
    									Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis pharetra varius quam sit amet vulputate. Quisque mauris augue, molestie tincidunt condimentum vitae, gravida a libero. Aenean sit amet felis dolor, in sagittis nisi. Sed ac orci quis tortor imperdiet venenatis. Duis elementum auctor accumsan. Aliquam in felis sit amet augue.
  							</div>
  							<div class="media" id="optionB">
  								
    									Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis pharetra varius quam sit amet vulputate. Quisque mauris augue, molestie tincidunt condimentum vitae, gravida a libero. Aenean sit amet felis dolor, in sagittis nisi. Sed ac orci quis tortor imperdiet venenatis. Duis elementum auctor accumsan. Aliquam in felis sit amet augue.
  							</div>
  							<div class="media" id="optionC">
  								
    									Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis pharetra varius quam sit amet vulputate. Quisque mauris augue, molestie tincidunt condimentum vitae, gravida a libero. Aenean sit amet felis dolor, in sagittis nisi. Sed ac orci quis tortor imperdiet venenatis. Duis elementum auctor accumsan. Aliquam in felis sit amet augue.
  							</div>
  							<div class="media" id="optionD">
  								
    									Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis pharetra varius quam sit amet vulputate. Quisque mauris augue, molestie tincidunt condimentum vitae, gravida a libero. Aenean sit amet felis dolor, in sagittis nisi. Sed ac orci quis tortor imperdiet venenatis. Duis elementum auctor accumsan. Aliquam in felis sit amet augue.
  							</div>
  							
  							<div class="media text-center">
  								<div class="col-sm-6" id="yourAnswer">
  									You have answered B
  								</div>
  								<div class="col-sm-6" id="correctAnswer">
	  								You have answered B
  								</div>
  							</div>
  							
  							<div class="media text-center">
  								<button type="button" class="btn btn-info" data-toggle="collapse" data-target="#solution">View Solution</button>
  							</div>
							
							<div class="media">
  								<div class="collapse" id="solution">
    									Lorem ipsum dolor sit amet, consectetur adipisicing elit,sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam,quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
  								</div>						
							</div>
							
					</div>
  					<div class="col-sm-3 well well-sm" id="questionsDivision">
  						
  						<button class="btn btn-default margin-up">1</button>
  						<button class="btn btn-default margin-up">1</button>
  						<button class="btn btn-default margin-up">1</button>
  						<button class="btn btn-default margin-up">1</button>
  						<button class="btn btn-default margin-up">1</button>
  						<button class="btn btn-default margin-up">1</button>
  						<button class="btn btn-default margin-up">1</button>
  						<button class="btn btn-default margin-up">1</button>
  						<button class="btn btn-default margin-up">1</button>
  						<button class="btn btn-default margin-up">1</button>
  						<button class="btn btn-default margin-up">1</button>
  						<button class="btn btn-default margin-up">1</button>
  						<button class="btn btn-default margin-up">1</button>
  						<button class="btn btn-default margin-up">1</button>
  						<button class="btn btn-default margin-up">1</button>
  						<button class="btn btn-default margin-up">1</button>
  						<button class="btn btn-default margin-up">1</button>
  						<button class="btn btn-default margin-up">1</button>
  						<button class="btn btn-default margin-up">1</button>
  						<button class="btn btn-default margin-up">1</button>
  					</div>
  				
  			</div>
			
			
			<!-- ---------------------------------------------------------------------------------------------------- -->
			
			
			
			
			<!-- --------------------------------------Marks And Rankings--------------------------------------------- -->
			
				<div class="row well well-sm" id="marksAndRankingsDivision">
					
					<div class="col-sm-8">
						
							<div class="media text-center ">
  							
    							<img class="img-circle" src="images/user.jpg" style="width:100px;height:100px">
  							
  							
  							<div class="row margin-up" id="totalMarks">
    							
    						</div>
    						<div class="row margin-up" id="yourMarks">
    							Your Marks : 2.33
    						</div>
    						
						
						</div>
						
						
					</div>
					<div class="col-sm-4">
						
							<table class="table table-condensed table-bordered text-center" id="marksDistribution">
								<tr>
									<th colspan="4" class="text-center">Marks Distribution</th>
									
								</tr>
								<tr>
									<th>Q.No</th>
									<th>Max Marks</th>
									<th>Answered</th>
									<th>Your Marks</th>
									
								</tr>
								<tr class="bg-success">
									<td>1</td>
									<td>2</td>
									<td>AB</td>
									<td>-0.33</td>
									
								</tr>
								
							</table>
						
					</div>
						
				</div>			
			
				
			
			<!-- ----------------------------------------------------------------------------------------------------- -->
		</div>
		
	</div>
	<script src="js/testresultsindetail.js"></script>
</body>
</html>













