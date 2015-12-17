<?php 
require_once 'phpFiles/isSessionSet.php';
require_once 'phpFiles/isSubscribed.php';
?>




<html>
<head>
	<script language="javascript">
		document.onmousedown=disableclick;
		status="Right Click Disabled";
		function disableclick(event)
		{
  			if(event.button==2)
   			{
     			//alert(status);
     			return false;    
   			}
		}
	</script>
	
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
	<script src="http://maxcdn.bootstrapcdn.com/bootstrap/3.3.5/js/bootstrap.min.js"></script>
	  <script src="js/exam.js"></script>
	<script src="js/getAndUpdateTimer.js"></script>
	<script src="js/saveAndNext.js"></script>
	<script src="js/reviewAndNext.js"></script>
	<script src="js/getQuestion.js"></script>
	<script src="js/firstTimeIndexPageLoad.js"></script>    
</head>
<body oncontextmenu="return false">


	<div class="container-fluid well well-sm">
	
	
	
	
	<!-- Modal -->
<div id="endTestDialogue" class="modal fade" role="dialog">
  <div class="modal-dialog">

    <!-- Modal content-->
    <div class="modal-content">
      <div class="modal-header">
        
        
      </div>
      <div class="modal-body">
        <p><b><center>If you end the test now , you will not be able to continue it in the future.<br>Do you really want to end the test ?</center></b></p>
      </div>
      <div class="modal-footer text-center">
        <button type="button" class="btn btn-success" onclick="endTest()">Yes</button>
        <button type="button" class="btn btn-danger" data-dismiss="modal">No</button>
      </div>
    </div>

  </div>
</div>






		<div class="row text-center">
		<div class="col-sm-offset-2 col-sm-8 text-center">
		<font color="blue"><b>
		 <?php echo $_SESSION['fullNameOfSubject'];?>
		</b></font></div>
		<div class="col-sm-2 text-center">
		<img src="profilePictures/<?php echo $_SESSION['gateimage']?>" class="img-circle text-right" width="20px" height="20px"> <b><font color="red"><?php echo $_SESSION['gatefirstname'].' '.$_SESSION['gatelastname']?></font></b></div>
		</div>
	</div>
	
	<div class="container-fluid margin-up">
	
		
		<div class="col-sm-10">
			<div class="row text-center" id="questionNo">
  				<strong>QUESTION NO : 01</strong>		
  			</div>
  			
			<div class="question">
			
				<div class="media margin-up" >
  					<div class="media-body" id="question">
  						 				Lorem ipsum dolor sit amet, consectetur adipisicing elit,sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim adminim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea
      									commodo consequat.	
      							
					</div>
				</div>
					
				
  				
  				<div class="panel panel-default" id="numericalAnswerDivision">
  					<div class="panel-heading">
  						
  						Please Enter your Value : <input type="text" id="numericalAnswer">
					</div>
  				</div>
  				
  				<div class="media margin-up" >
  					<div class="media-body" id="imageDivision">
  						 				Lorem ipsum dolor sit amet, consectetur adipisicing elit,sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim adminim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea
      									commodo consequat.	
      							
					</div>
				</div>
				
  				
  				
  					<div class="media " onclick="setAnswer(1)" style="cursor: pointer;" id="optionADivision">
  						<div class="media-left"><span class="glyphicon glyphicon-unchecked " id="optionACheckDivision"></span><br> A</div>
  					
  					<div class="media-body" id="optionA">
  						 				Lorem ipsum dolor sit amet, consectetur adipisicing elit,sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim adminim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea
      									commodo consequat.	
      							
					</div>
					</div>
  				
  				
  				
  				<div class="media " onclick="setAnswer(2)" style="cursor: pointer;" id="optionBDivision">
  						<div class="media-left"><span class="glyphicon glyphicon-unchecked " id="optionBCheckDivision"></span><br> B</div>
  					
  					<div class="media-body" id="optionB">
  						 				Lorem ipsum dolor sit amet, consectetur adipisicing elit,sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim adminim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea
      									commodo consequat.	
      							
					</div>
				</div>
  				
  				
  				<div class="media " onclick="setAnswer(3)" style="cursor: pointer;" id="optionCDivision">
  						<div class="media-left"><span class="glyphicon glyphicon-unchecked " id="optionCCheckDivision"></span><br> C</div>
  					
  					<div class="media-body" id="optionC">
  						 				Lorem ipsum dolor sit amet, consectetur adipisicing elit,sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim adminim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea
      									commodo consequat.	
      							
					</div>
				</div>
  				
  				<div class="media" onclick="setAnswer(4)" style="cursor: pointer;" id="optionDDivision">
  						<div class="media-left"><span class="glyphicon glyphicon-unchecked " id="optionDCheckDivision"></span><br> D</div>
  					
  					<div class="media-body" id="optionD">
  						 				Lorem ipsum dolor sit amet, consectetur adipisicing elit,sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim adminim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea
      									commodo consequat.	
      							
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
  					<b><button type="button" class="btn btn-primary" id="hoursDivision" title="Hours">00</button> :
  					<button type="button" class="btn btn-primary" id="minutesDivision" title="Minutes">00</button> :
  					<button type="button" class="btn btn-primary" id="secondsDivision" title="Seconds">30</button></b>
				</div>
			</div>
			<div class="row margin-up pallete" id="numbersDivision" style="border-bottom:1px solid;border-top:1px solid;border-color:black">
			
			
				<!-- -----------------will be filled dynamically -->
				 
				 
				 
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
			<button type="button" class="btn btn-danger margin-up" onclick="manualEndTest()">End Test</button>
			</div>
			</div>
	</div>
</body>
</html>