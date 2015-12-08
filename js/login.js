
$(document).ready(function(){
  
    $( "#registrationDateOfBirth" ).datepicker({
    	
    	changeMonth: true,
        changeYear: true,
        yearRange: '1985:2015',
        dateFormat:'dd-MM-yy'
    });
    
    $('[data-toggle="popover"]').popover();
    
});




clearParameters();

function clearParameters()
{
	
	document.getElementById("registrationFirstNameDivision").className = 'form-group';
	document.getElementById("registrationLastNameDivision").className = 'form-group';
	document.getElementById("registrationEmailDivision").className = 'form-group';
	document.getElementById("registrationPasswordDivision").className = 'form-group';
	document.getElementById("registrationConfirmPasswordDivision").className = 'form-group';
	document.getElementById("registrationDateOfBirthDivision").className = 'form-group';

	document.getElementById("registrationFirstNameErrorSpan").className = '';
	document.getElementById("registrationLastNameErrorSpan").className = '';
	document.getElementById("registrationEmailErrorSpan").className = '';
	document.getElementById("registrationPasswordErrorSpan").className = '';
	document.getElementById("registrationConfirmPasswordErrorSpan").className = '';
	document.getElementById("registrationDateOfBirthErrorSpan").className = '';


	
	document.getElementById("loginEmailDivision").className = 'form-group';
	document.getElementById("loginPasswordDivision").className = 'form-group';
	
	document.getElementById("loginEmailErrorSpan").className = '';
	document.getElementById("loginPasswordErrorSpan").className = '';
	
	$('#statusDivision').html('');
	
}

var registrationemailid,registrationfirstname,registrationlastname,password,dob; 

function checkRegistrationParameters()
{
	clearParameters();
	 registrationemailid = document.getElementById("registrationEmail").value;
	 registrationfirstname = document.getElementById("registrationFirstName").value;
	 registrationlastname = document.getElementById("registrationLastName").value;
	 password = document.getElementById("registrationPassword").value;
	 dob = document.getElementById("registrationDateOfBirth").value;
	document.getElementById("statusDivision").className = 'alert text-center';
	$('#statusDivision').html('<img src="images/redloader.gif" style="height: 2%;width: 2%">');
	
	
	if(document.getElementById("registrationFirstName").value == "")
	  {
	  
	    document.getElementById("registrationFirstNameDivision").className = 'form-group has-error has-feedback';
	    document.getElementById("registrationFirstNameErrorSpan").className = 'glyphicon glyphicon-remove form-control-feedback';
	   document.getElementById("registrationFirstName").setAttribute("data-content", "Please Enter First Name");
	   document.getElementById("registrationFirstName").focus();
	   $('#statusDivision').html('');
	    
	    return false;
	  }

	  if(document.getElementById("registrationLastName").value == "")
	  {
	  
	    document.getElementById("registrationLastNameDivision").className = 'form-group has-error has-feedback';
	    document.getElementById("registrationLastNameErrorSpan").className = 'glyphicon glyphicon-remove form-control-feedback';
	   document.getElementById("registrationLastName").setAttribute("data-content", "Please Enter Last Name");
	   document.getElementById("registrationLastName").focus();
	   $('#statusDivision').html('');

	    
	    return false;
	  }

	  
  if(document.getElementById("registrationEmail").value == "")
	  {
	  
	    document.getElementById("registrationEmailDivision").className = 'form-group has-error has-feedback';
	    document.getElementById("registrationEmailErrorSpan").className = 'glyphicon glyphicon-remove form-control-feedback';
	   document.getElementById("registrationEmail").setAttribute("data-content", "Please Enter Email address");
	   document.getElementById("registrationEmail").focus();
	   
	   $('#statusDivision').html('');
	    return false;
	  }
  
  if (!(/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/.test(document.getElementById("registrationEmail").value)))  
  {  

	  document.getElementById("registrationEmailDivision").className = 'form-group has-error has-feedback';
	   document.getElementById("registrationEmailErrorSpan").className = 'glyphicon glyphicon-remove form-control-feedback';
	   document.getElementById("registrationEmail").setAttribute("data-content", "Please Enter Valid Email address");
	   document.getElementById("registrationEmail").focus();
	   $('#statusDivision').html('');
	   return false;
	 	  
  }  

 
  
  if(document.getElementById("registrationPassword").value == "")
  {
  
    document.getElementById("registrationPasswordDivision").className = 'form-group has-error has-feedback';
    document.getElementById("registrationPasswordErrorSpan").className = 'glyphicon glyphicon-remove form-control-feedback';
   document.getElementById("registrationPassword").setAttribute("data-content", "Please Enter Password");
   document.getElementById("registrationPassword").focus();
   $('#statusDivision').html('');
    
    return false;
  }

  if(document.getElementById("registrationConfirmPassword").value == "")
  {
  
    document.getElementById("registrationConfirmPasswordDivision").className = 'form-group has-error has-feedback';
    document.getElementById("registrationConfirmPasswordErrorSpan").className = 'glyphicon glyphicon-remove form-control-feedback';
   document.getElementById("registrationConfirmPassword").setAttribute("data-content", "Please Confirm Password");
   document.getElementById("registrationConfirmPassword").focus();
   $('#statusDivision').html('');

    
    return false;
  }

  if(document.getElementById("registrationConfirmPassword").value != document.getElementById("registrationPassword").value)
  {
  
	  document.getElementById("registrationPasswordDivision").className = 'form-group has-error has-feedback';
	    document.getElementById("registrationPasswordErrorSpan").className = 'glyphicon glyphicon-remove form-control-feedback';
	   document.getElementById("registrationPassword").setAttribute("data-content", "Passwords do not match");
	   document.getElementById("registrationPassword").focus();
	   
    document.getElementById("registrationConfirmPasswordDivision").className = 'form-group has-error has-feedback';
    document.getElementById("registrationConfirmPasswordErrorSpan").className = 'glyphicon glyphicon-remove form-control-feedback';
   document.getElementById("registrationConfirmPassword").setAttribute("data-content", "Passwords do not match");
   document.getElementById("registrationConfirmPassword").focus();
   $('#statusDivision').html('');

    
    return false;
  }
  	
  
  
  if(document.getElementById("registrationDateOfBirth").value == "")
  {
  
    document.getElementById("registrationDateOfBirthDivision").className = 'form-group has-error has-feedback';
    document.getElementById("registrationDateOfBirthErrorSpan").className = 'glyphicon glyphicon-remove form-control-feedback';
   document.getElementById("registrationDateOfBirth").setAttribute("data-content", "Please Enter Date Of Birth");
   document.getElementById("registrationDateOfBirth").focus();
   $('#statusDivision').html('');
    
    return false;
  }
  
  return doRegistration(registrationemailid,registrationfirstname,registrationlastname,password,dob);

  
}












function checkLoginParameters()
{
	
	clearParameters();
	document.getElementById("statusDivision").className = 'alert text-center';
	$('#statusDivision').html('<img src="images/redloader.gif" style="height: 2%;width: 2%">');

	
	if(document.getElementById("loginEmail").value == "")
	 {
	  
		document.getElementById("loginEmailDivision").className = 'form-group has-error has-feedback';
		document.getElementById("loginEmailErrorSpan").className = 'glyphicon glyphicon-remove form-control-feedback';
		document.getElementById("loginEmail").setAttribute("data-content", "Please Enter Email address");
		document.getElementById("loginEmail").focus();
		$('#statusDivision').html('');
		return false;
	 }
	
	 if (!(/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/.test(document.getElementById("loginEmail").value)))  
	   {  

		 document.getElementById("loginEmailDivision").className = 'form-group has-error has-feedback';
		 document.getElementById("loginEmailErrorSpan").className = 'glyphicon glyphicon-remove form-control-feedback';
		 document.getElementById("loginEmail").setAttribute("data-content", "Please Enter Valid Email address");
		 document.getElementById("loginEmail").focus();
		 $('#statusDivision').html('');
		 return false;
		 	  
	   }  


	if(document.getElementById("loginPassword").value == "")
	{

		document.getElementById("loginPasswordDivision").className = 'form-group has-error has-feedback';
		document.getElementById("loginPasswordErrorSpan").className = 'glyphicon glyphicon-remove form-control-feedback';
		document.getElementById("loginPassword").setAttribute("data-content", "Please Enter Password");
		document.getElementById("loginPassword").focus();
		$('#statusDivision').html('');
		return false;
	}
	
	return doLogin();
	  

}
























/////////////////////////////////////////////////////////////







function doLogin()
{
 var loginemailid = document.getElementById("loginEmail").value;
 var password = document.getElementById("loginPassword").value;
 
 //alert(loginemailid);
 //alert(password);
 
 $(document).ready(function(){
	 
	 
	 
		 $.post( "phpFiles/login.php", {loginemailid : loginemailid , password : password},function( data ) {
		   
		  //alert(data.error);
		 if(data.error == 1)
			 {	
			 		
		        	$('#statusDivision').html('<font color="red">The email Id and password you entered don\'t match.</font>');
		       
		     }
		 
		 else
		 {
			  window.open('mytests.php','_self');
			
		 }
		
	 },"json");
 });
}






function doRegistration(registrationemailid,registrationfirstname,registrationlastname,password,dob)
{

 
// alert(username);
 //alert(password);
 
 $(document).ready(function(){
	 

		 $.post( "phpFiles/newRegistration.php", 
				 
				 {  registrationfirstname : registrationfirstname ,
			   		registrationlastname : registrationlastname, 
			   		registrationemailid : registrationemailid,
			   		password : password,
			   		dob : dob
				 },function( data ) {
		
		 if(data.error == 1)
			 {
			 	$('#statusDivision').html('<font color="red">Email Id Already Exists</font>');
		       
			 }
		 else
		 {
			
			 $(document).ready(function(){
     		    
     	        $("#mainDivision").load("verification.php", function(responseTxt, statusTxt, xhr){
     	        	$('#statusDivision').html('');
     	        });
     	    
     		});
			 
			 var request = $.ajax({
		                url: 'phpFiles/sendVerificationCode.php',
		                type: 'POST',
		               data:
		               {
		                	registrationemailid : registrationemailid ,
		                	
		                	
		                }
		            });
		        	
		        
			 
		 }
	 },"json");
 });
}













function verifyVerificationNumber()
{
	
	
	var verificationnumber = document.getElementById("verificationnumber").value;
	
	
	 $('#statusDivision').html('<img src="images/redloader.gif" style="height: 3%;width: 2%">');
	 
	 if(verificationnumber == "")
		 {
		  
     	  $('#statusDivision').html('<font color="red">Please Enter Verification Code</font>');
     	  return;
		 }
	
	 
	$(document).ready(function(){
		 
		 
		
		 $.post( "phpFiles/verifyVerificationNumber.php", 
				 
		  {
			 emailid : registrationemailid, 
			 firstname : registrationfirstname,
			 lastname :registrationlastname ,
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
		    	  
		    	  
			    
	        	$('#statusDivision').html('<font color="green">Successfully registered!! Please Login</font>');
	        	document.getElementById("verificationnumber").value="";
	        	
	        	
		    	  }
		 
		 
		
	 },"json");
});
}



function resendCode()
{
	
	 $('#statusDivision').html('<img src="images/redloader.gif" style="height: 3%;width: 2%">');
	
	$(document).ready(function(){
		var request = $.ajax({
            url: 'phpFiles/sendVerificationCode.php',
            type: 'POST',
           data:
           {
            	registrationemailid : registrationemailid ,
            	
            }
        });
    	
    	$.when(request).done(function(){
    		
        	$('#statusDivision').html('<font color="green">Successfully Sent !!</font>');
        	
    	});
		
	});
}







