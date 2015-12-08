
function resetPassword()
{
	
	var emailid = document.getElementById("resetEmail").value;
	$('#statusDivision').html('<img src="images/redloader.gif" style="height: 2%;width: 2%">');
	
	if(emailid == '')
	 {
		
		document.getElementById("resetEmailDivision").className = 'form-group has-error has-feedback';
	    document.getElementById("resetEmailErrorSpan").className = 'glyphicon glyphicon-remove form-control-feedback';
		document.getElementById("resetEmail").setAttribute("data-content", "Please Enter Email address");
		document.getElementById("resetEmail").focus();
		$('#statusDivision').html('');
		return false;
	 
	 }
	 
	else if (!(/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/.test(emailid)))  
	  {  
		document.getElementById("resetEmailDivision").className = 'form-group has-error has-feedback';
	    document.getElementById("resetEmailErrorSpan").className = 'glyphicon glyphicon-remove form-control-feedback';
	   document.getElementById("resetEmail").setAttribute("data-content", "Please Enter Valid Email Address");
	   document.getElementById("resetEmail").focus();
	   $('#statusDivision').html('');	
	   return;
		 	  
	  }  
	else
	{
		$(document).ready(function(){
			
			
			$.post("phpFiles/forgotPassword.php",{emailid : emailid},function(data){
				
				if(data.error == 1)
					{
					
					 $('#statusDivision').html('<font color="red">Email Address Does Not Exists</font>');
					}
				else
					{
					
					 $('#statusDivision').html('<font color="green">A link to reset your password has been sent to your Email Id</font>');
					 
					}
				
			},"json");
		});
	  

	
	}
}