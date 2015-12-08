<?php 
require_once 'phpFiles/isSessionSet.php';
require_once 'phpFiles/isSubscribed.php';
?>




<html>
<head>
	<style>
		.margin-up,.margin-up:after,.margin-up:before
		{
			margin-top:2%;
		}
		
		.margin-all
		{
			
			margin:1%;
			margin-top:2%;
		}
		
		.question
		{
			height:68%;
			overflow-y:auto;
		}
		
		.pallete
		{
			height:48%;
			overflow-y:auto;
			margin-top:3%;
		}
		
		.optionDivision
		{
			padding-left:10%;
			cursor:pointer;
		}
	
		
	</style>
	<link rel="stylesheet" href="http://maxcdn.bootstrapcdn.com/bootstrap/3.3.5/css/bootstrap.min.css">
	<script src="https://ajax.googleapis.com/ajax/libs/jquery/1.11.3/jquery.min.js"></script>
	  <script src="js/exam.js"></script>
	<script src="js/getAndUpdateTimer.js"></script>
	<script src="js/saveAndNext.js"></script>
	<script src="js/reviewAndNext.js"></script>
	<script src="js/getQuestion.js"></script>
	<script src="js/firstTimeIndexPageLoad.js"></script>    
</head>
<body>

	<div class="container-fluid well well-sm">
		<div class="row text-center">
			COMPILER DESIGN CHAPTER 01 TEST 01
		</div>
	</div>
	
	<div class="container-fluid margin-up">
	
		
		<div class="col-sm-10">
			<div class="row text-center" id="questionNo">
  				<strong>QUESTION NO : 01</strong>		
  			</div>
  			
			<div class="panel-group question">
				<div class="panel panel-default">
  					<div class="panel-heading">
  						<table>
  							<tr>
  								<td id="question">
  									What is 2*3 value?	
      							</td>
      						</tr>
      					</table>
					</div>
  				</div>
  				
  				
  				<div class="panel panel-default" id="numericalAnswerDivision">
  					<div class="panel-heading">
  						
  						Please Enter your Value : <input type="text" id="numericalAnswer">
					</div>
  				</div>
  				
  				
  				
  				<div class="panel panel-default" style="cursor: pointer;" id="optionADivision">
  					<div class="panel-heading" onclick="setAnswer(1)">
  						<table>
  							<tr>
  								<td><span class="glyphicon glyphicon-unchecked" id="optionACheckDivision"></span><br> A</td>
  						 		<td class="optionDivision" id="optionA">
  						 				Lorem ipsum dolor sit amet, consectetur adipisicing elit,sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim adminim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea
      									commodo consequat.	
      							</td>
      						</tr>
      					</table>
					</div>
  				</div>
  				
  				
  				<div class="panel panel-default" style="cursor: pointer;" id="optionBDivision">
  					<div class="panel-heading" onclick="setAnswer(2)">
  						<table>
  							<tr>
  								
  								<td><span class="glyphicon glyphicon-unchecked" id="optionBCheckDivision"></span><br> B</td>
  						 		<td class="optionDivision" id="optionB">
  						 				Lorem ipsum dolor sit amet, consectetur adipisicing elit,sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim adminim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea
      									commodo consequat.	
      							</td>
      						</tr>
      					</table>
					</div>
  				</div>
  				
  				
  				
  				<div class="panel panel-default" style="cursor: pointer;" id="optionCDivision">
  					<div class="panel-heading" onclick="setAnswer(3)">
  						<table>
  							<tr>
  								<td><span class="glyphicon glyphicon-check" id="optionCCheckDivision"></span><br> C</td>
  						 		<td class="optionDivision" id="optionC">
  						 				Lorem ipsum dolor sit amet, consectetur adipisicing elit,sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim adminim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea
      									commodo consequat.	
      							</td>
      						</tr>
      					</table>
					</div>
  				</div>
  				
  				
  				<div class="panel panel-default" style="cursor: pointer;" id="optionDDivision">
  					<div class="panel-heading" onclick="setAnswer(4)">
  						<table>
  							<tr>
  								<td><span class="glyphicon glyphicon-unchecked" id="optionDCheckDivision"></span><br> D</td>
  						 		<td class="optionDivision" id="optionD">
  						 				Lorem ipsum dolor sit amet, consectetur adipisicing elit,sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim adminim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea
      									commodo consequat.	
      							</td>
      						</tr>
      					</table>
					</div>
  				</div>
  				
  				
  				
  			</div>
  			
  			<div class="panel panel-info text-center">
  					<div class="panel-body">
  						<div class="col-sm-2"></div>
  						<div class="col-sm-4">
  							<button type="button" class="btn btn-success btn-block" id="saveAndNextDivision">SAVE AND NEXT</button>
  						</div>
  						<div class="col-sm-4">
  						  	<button type="button" class="btn btn-primary btn-block" id="reviewAndNextDivision">MARK FOR REVIEW AND NEXT</button>
  						</div>
  						<div class="col-sm-2"></div>
					</div>
  				</div>
  			
  		</div>
  		
		<div class="col-sm-2">
			
			<div class="row text-center">
				<div class="btn-group">
  					<b><button type="button" class="btn btn-primary" id="hoursDivision">00</button>
  					<button type="button" class="btn btn-primary" id="minutesDivision">00</button>
  					<button type="button" class="btn btn-primary" id="secondsDivision">30</button></b>
				</div>
			</div>
			<div class="row margin-up pallete" id="numbersDivision" style="border-bottom:1px solid;border-top:1px solid;border-color:black">
			
				
				<button type="button" class="btn btn-default margin-up">1</button>
				<button type="button" class="btn btn-default margin-up">1</button>
				<button type="button" class="btn btn-default margin-up">1</button>
				<button type="button" class="btn btn-default margin-up">1</button>
				<button type="button" class="btn btn-default margin-up">1</button>
				<button type="button" class="btn btn-default margin-up">1</button>
				<button type="button" class="btn btn-default margin-up">1</button>
				<button type="button" class="btn btn-default margin-up">1</button>
				<button type="button" class="btn btn-default margin-up">1</button>
				<button type="button" class="btn btn-default margin-up">1</button>
				<button type="button" class="btn btn-default margin-up">1</button>
				<button type="button" class="btn btn-default margin-up">1</button>
				<button type="button" class="btn btn-default margin-up">1</button>
				<button type="button" class="btn btn-default margin-up">1</button>
				<button type="button" class="btn btn-default margin-up">1</button>
				<button type="button" class="btn btn-default margin-up">1</button>
				<button type="button" class="btn btn-default margin-up">1</button>
				<button type="button" class="btn btn-default margin-up">1</button>
				<button type="button" class="btn btn-default margin-up">1</button>
				<button type="button" class="btn btn-default margin-up">1</button>
				<button type="button" class="btn btn-default margin-up">1</button>
				<button type="button" class="btn btn-default margin-up">1</button>
				<button type="button" class="btn btn-default margin-up">1</button>
				<button type="button" class="btn btn-default margin-up">1</button>
				<button type="button" class="btn btn-default margin-up">1</button>
				<button type="button" class="btn btn-default margin-up">1</button>
				<button type="button" class="btn btn-default margin-up">1</button>
				<button type="button" class="btn btn-default margin-up">1</button>
				<button type="button" class="btn btn-default margin-up">1</button>
				<button type="button" class="btn btn-default margin-up">1</button>
				<button type="button" class="btn btn-default margin-up">1</button>
				<button type="button" class="btn btn-default margin-up">1</button>
				<button type="button" class="btn btn-default margin-up">1</button>
				<button type="button" class="btn btn-default margin-up">1</button>
				<button type="button" class="btn btn-default margin-up">1</button>
				<button type="button" class="btn btn-default margin-up">1</button>
				<button type="button" class="btn btn-default margin-up">1</button>
				<button type="button" class="btn btn-default margin-up">1</button>
				<button type="button" class="btn btn-default margin-up">1</button>
				<button type="button" class="btn btn-default margin-up">1</button>
				<button type="button" class="btn btn-default margin-up">1</button>
				<button type="button" class="btn btn-default margin-up">1</button>
				<button type="button" class="btn btn-default margin-up">1</button>
				<button type="button" class="btn btn-default margin-up">1</button>
				<button type="button" class="btn btn-default margin-up">1</button>
				<button type="button" class="btn btn-default margin-up">1</button>
				<button type="button" class="btn btn-default margin-up">1</button>
				<button type="button" class="btn btn-default margin-up">1</button>
				<button type="button" class="btn btn-default margin-up">1</button>
				<button type="button" class="btn btn-default margin-up">1</button>
				<button type="button" class="btn btn-default margin-up">1</button>
				<button type="button" class="btn btn-default margin-up">1</button>
				 
				 
				 
			</div>
			
			
			
			<button class="btn btn-default btn-block" style="margin-top: 2%">
  				Not Answered
			</button>
			
			<button class="btn btn-success btn-block">
  				Answered
			</button>
			
			
			<button class="btn btn-primary btn-block">
  				Marked For Review
			</button>
			<br>
			<div class="margin-up text-center" style="border:1px solid;border-color:black;padding-bottom:3%">
			<button type="button" class="btn btn-danger margin-up">End Test</button>
			</div>
			</div>
	</div>
</body>
</html>