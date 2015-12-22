<?php
	if(isset($_GET['p']))
		$password = $_GET['p'];
	else
		header('location:home.html');
	
?>


<!DOCTYPE html>
<html lang="en">
<head>
  <title>GoodCreed</title>
  <meta charset="utf-8">
  <meta name="viewport" content="width=device-width, initial-scale=1">
  <link rel="stylesheet" href="http://maxcdn.bootstrapcdn.com/bootstrap/3.3.5/css/bootstrap.min.css">
  <script src="https://ajax.googleapis.com/ajax/libs/jquery/1.11.3/jquery.min.js"></script>
  <script src="http://maxcdn.bootstrapcdn.com/bootstrap/3.3.5/js/bootstrap.min.js"></script>
    <link rel="stylesheet" href="http://code.jquery.com/ui/1.11.4/themes/smoothness/jquery-ui.css">
  <script src="http://code.jquery.com/ui/1.11.4/jquery-ui.js"></script>
  
  
  <style>
 
  .margin-all
  {
   
    margin-top:1%;
  }
  
  .colBorder
  {
   border-right:1px solid;
   border-color:black;
   height:350px;
  }
  
  .fixed
  {
   
   background-color: black;
   position:fixed;
  }
  
  .well {
    background: #000000;
	}
  </style>
  <script>

</script>
</head>
<body>
		
		
		
		<div class="container-fluid">
	
	
		<div class="row well bg-success">
			<div class="col-sm-4">
				
			</div>
			<div class="col-sm-4 text-center">
				<font color="white" size="4px"><b><em>GOODCREED</em> </b></font><br>
				<font color="white" size="4px">GATE Online Test Series <br>
					(Computer Science And Engineering)</font>
			</div>
			<div class="col-sm-3 margin-all">
						<div class = "btn-group" data-toggle = "buttons">
   							<button class = "btn btn-primary" onclick="window.open('home.html','_self')"><span class="glyphicon glyphicon-home"> Home</span></button>
      						<button class="btn btn-primary" onclick="window.open('aboutus1.html','_self')"><span class="glyphicon glyphicon-list-alt"> AboutUs</span></button>	
						</div>
			
			</div>
		</div>
		
		
		
		
		<div class="row" >
				<div class = "alert text-center" id="statusDivision">
			<!-- -	<img src="images/redloader.gif">   -->	
				</div>
		</div>
		
		
		<div class="row" id="mainDivision">
		
		
		
		
		
			<div class="col-sm-offset-3 col-sm-5">
			
			
			
		<div class="form-horizontal" >
			
				<div class="form-group" >
    				<label class="control-label col-sm-5"></label>
    				<div class="col-sm-7"></div>
  				</div>
  				
  				<div class="form-group" >
    				<label class="control-label col-sm-5" ></label>
    				<div class="col-sm-7"></div>
  				</div>
  				
  				
  				
  				
  				
  				
				<div class="form-group" id="resetPasswordDivision">
    				<label class="control-label col-sm-4" for="resetPassword"><span class = "glyphicon glyphicon-lock"></span></label>
    				<div class="col-sm-7"> 
      					<input type="password" class="form-control" id="resetPassword" placeholder="Password" data-toggle="popover"  data-trigger="hover" data-placement="top" data-content="">
      					<span class="" id="resetPasswordErrorSpan"></span>
    				</div>
    			</div>
    			
    			<input type="hidden" value="<?php echo $password?>" id="p">
    			
    			<div class="form-group" id="resetConfirmPasswordDivision">
    				<label class="control-label col-sm-4" for="resetConfirmPassword"><span class = "glyphicon glyphicon-lock"></span></label>
    				<div class="col-sm-7"> 
      					<input type="password" class="form-control" id="resetConfirmPassword" placeholder="Confirm password" data-toggle="popover"  data-trigger="hover" data-placement="top" data-content="">
      					<span class="" id="resetConfirmPasswordErrorSpan"></span>
   				 	</div>
  				</div>
    
    
    
  				<div class="form-group"> 
    				<div class="control-label col-sm-offset-1 col-sm-7">
      					<button type="submit" class="btn btn-success" onclick="return checkPasswordParameters()">Submit</button>
    				</div>
  				</div>
  				
  				
    			
  			</div>
  			</div>
  			
  			
 			</div>
			</div>
		



<script src="js/resetpassword.js"></script>


</body>
</html>