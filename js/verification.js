
function verifyVerificationId()
{
	
	var emailid = document.getElementById("verificationemailid").value;
	var verificationnumber = document.getElementById("verificationnumber").value;
	var firstname = document.getElementById("verificationfirstname").value;
	var lastname = document.getElementById("verificationlastname").value;
	var password = document.getElementById("verificationpassword").value;
	var dob = document.getElementById("verificationdob").value;
	
	
	 $('#errorOrSuccessDivision').html('<img src="images/redloader.gif" style="height: 30px;width: 30px">');
	 
	 if(verificationnumber == "")
		 {
		  document.getElementById("errorOrSuccessDivision").className = 'failureStatus';
     	  $('#errorOrSuccessDivision').html("Please Enter Verification Code");
     	  return;
		 }
	
	 
	$(document).ready(function(){
		 
		 
		
		 $.post( "phpFiles/verifyVerificationNumber.php", 
				 
		  {
			 emailid : emailid , 
			 firstname : firstname,
			 lastname :lastname ,
			 password :password ,
			 dob:dob,
			 verificationnumber : verificationnumber,
			 
		  },function(data) {
		   
		      if(data.error == 1)
		    	  {
		    	  
		    	  
		     	   $('#statusDivision').html('<font color="red">Verification Code is wrong</font>');
		    	  }
		 
		      else
		    	  {
		    	  
		    	  
			    
	        	$('#statusDivision').html('<font color="red">Successfully registered!! Please Login</font>');
	        	
	        	
		    	  }
		 
		 
		
	 },"json");
});
}



function resendCode()
{
	
	 $('#errorOrSuccessDivision').html('<img src="images/redloader.gif" style="height: 30px;width: 30px">');
	var emailid = document.getElementById("verificationemailid").value;
	$(document).ready(function(){
		var request = $.ajax({
            url: 'phpFiles/sendVerificationCode.php',
            type: 'POST',
           data:
           {
            	registrationemailid : emailid ,
            	
            }
        });
    	
    	$.when(request).done(function(){
    		document.getElementById("errorOrSuccessDivision").className = 'successStatus';
        	$('#errorOrSuccessDivision').html("We have sent the Verification code to your Mail Id . Please enter it below to verify your account");
        	
    	});
		
	});
}



















