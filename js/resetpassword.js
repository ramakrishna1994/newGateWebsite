$(document).ready(function(){
  
    $('[data-toggle="popover"]').popover();
    
});

clearParameters();

function clearParameters()
{
	document.getElementById("resetPasswordDivision").className = 'form-group';
	document.getElementById("resetConfirmPasswordDivision").className = 'form-group';
	document.getElementById("resetPasswordErrorSpan").className = '';
	document.getElementById("resetConfirmPasswordErrorSpan").className = '';
	document.getElementById("resetPassword").setAttribute("data-content", "");
	document.getElementById("resetConfirmPassword").setAttribute("data-content", "");
	

}


function checkPasswordParameters()
{
	clearParameters();
	document.getElementById("statusDivision").className = 'alert text-center';
	$('#statusDivision').html('<img src="images/loader.gif" style="height: 2%;width: 2%">');
	
	if(document.getElementById("resetPassword").value == "")
	  {
	  
	    document.getElementById("resetPasswordDivision").className = 'form-group has-error has-feedback';
	    document.getElementById("resetPasswordErrorSpan").className = 'glyphicon glyphicon-remove form-control-feedback';
	   document.getElementById("resetPassword").setAttribute("data-content", "Please Enter Password");
	   document.getElementById("resetPassword").focus();
	   $('#statusDivision').html('');
	    
	    return false;
	  }

	  if(document.getElementById("resetConfirmPassword").value == "")
	  {
	  
	    document.getElementById("resetConfirmPasswordDivision").className = 'form-group has-error has-feedback';
	    document.getElementById("resetConfirmPasswordErrorSpan").className = 'glyphicon glyphicon-remove form-control-feedback';
	   document.getElementById("resetConfirmPassword").setAttribute("data-content", "Please Confirm Password");
	   document.getElementById("resetConfirmPassword").focus();
	   $('#statusDivision').html('');

	    
	    return false;
	  }
	  
	  
	  if(document.getElementById("resetConfirmPassword").value != document.getElementById("resetPassword").value)
	  {
	  
		  document.getElementById("resetPasswordDivision").className = 'form-group has-error has-feedback';
		    document.getElementById("resetPasswordErrorSpan").className = 'glyphicon glyphicon-remove form-control-feedback';
		   document.getElementById("resetPassword").setAttribute("data-content", "Passwords do not match");
		   document.getElementById("resetPassword").focus();
		   
	    document.getElementById("resetConfirmPasswordDivision").className = 'form-group has-error has-feedback';
	    document.getElementById("resetConfirmPasswordErrorSpan").className = 'glyphicon glyphicon-remove form-control-feedback';
	   document.getElementById("resetConfirmPassword").setAttribute("data-content", "Passwords do not match");
	   document.getElementById("resetConfirmPassword").focus();
	   $('#statusDivision').html('');

	    
	    return false;
	  }
	  
	  
	  
	  doResetPassword();
}




function doResetPassword()
{
	
	var password = document.getElementById("resetPassword").value;
	var p = document.getElementById("p").value;
	
	$(document).ready(function(){
		 
		 
		 
		 $.post( "phpFiles/resetpassword.php", {p : p , password : password},function( data ) {
		   
		  //alert(data.error);
		 if(data.error == 1)
			 {	
			 		
		        	$('#statusDivision').html('<font color="red">Link has been expired.</font>');
		       
		     }
		 
		 else if(data.error == 2)
		 	{
			 		$('#statusDivision').html('<font color="red">You have entered the password<br> which has been used previously.</font>');
			
		 	}
		 else
			 {
		 			$('#statusDivision').html('<font color="green">Your password is changed successfully.<br>Please Click on <a type="button" href="home.html" class="btn btn-success btn-xs">Login</a> to proceed</font>');
			 }
		 
		 clearParameters();
		
		 },"json");
	});

}