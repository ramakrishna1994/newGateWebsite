

$(document).ready(function(){
  
    
    $('[data-toggle="popover"]').popover();
    
});



function clearParameters()
{
	
	document.getElementById("currentPasswordDivision").className = 'form-group';
	document.getElementById("newPasswordDivision").className = 'form-group';
	document.getElementById("confirmPasswordDivision").className = 'form-group';
	
	document.getElementById("currentPasswordErrorSpan").className = '';
	document.getElementById("confirmPasswordErrorSpan").className = '';
	document.getElementById("newPasswordErrorSpan").className = '';
	
	
	$('#statusDivision').html('');
	
}


function changePassword()
{
	clearParameters();
	 $('#statusDivision').html('<img src="images/loader.gif" style="height: 3%;width: 2%;">');
	var currentpassword = document.getElementById('currentPassword').value;
	var newpassword = document.getElementById('newPassword').value;
	var confirmnewpassword = document.getElementById('confirmPassword').value;
   
	if(currentpassword == "")
	{
		
		  	document.getElementById("currentPasswordDivision").className = 'form-group has-error has-feedback';
		    document.getElementById("currentPasswordErrorSpan").className = 'glyphicon glyphicon-remove form-control-feedback';
		    document.getElementById("currentPassword").setAttribute("data-content", "Please Enter Password");
		    document.getElementById("currentPassword").focus();
		    $('#statusDivision').html('');
		    return false;
		        	
 	}


	else if(newpassword == "")
	{
		
		document.getElementById("newPasswordDivision").className = 'form-group has-error has-feedback';
	    document.getElementById("newPasswordErrorSpan").className = 'glyphicon glyphicon-remove form-control-feedback';
	    document.getElementById("newPassword").setAttribute("data-content", "Please Enter New Password");
	    document.getElementById("newPassword").focus();
	    $('#statusDivision').html('');
	    return false;      	
	}


	else if(confirmnewpassword == "")
	{
		
		document.getElementById("confirmPasswordDivision").className = 'form-group has-error has-feedback';
	    document.getElementById("confirmPasswordErrorSpan").className = 'glyphicon glyphicon-remove form-control-feedback';
	    document.getElementById("confirmPassword").setAttribute("data-content", "Please Confirm New Password");
	    document.getElementById("confirmPassword").focus();
	    $('#statusDivision').html('');
	    return false;	
	}
	
	else if(newpassword != confirmnewpassword)
		{
		
		document.getElementById("newPasswordDivision").className = 'form-group has-error has-feedback';
	    document.getElementById("newPasswordErrorSpan").className = 'glyphicon glyphicon-remove form-control-feedback';
	    document.getElementById("newPassword").setAttribute("data-content", "Passwords do not match");
	    document.getElementById("newPassword").focus();
	    
	    document.getElementById("confirmPasswordDivision").className = 'form-group has-error has-feedback';
	    document.getElementById("confirmPasswordErrorSpan").className = 'glyphicon glyphicon-remove form-control-feedback';
	    document.getElementById("confirmPassword").setAttribute("data-content", "Passwords do not match");
	    document.getElementById("confirmPassword").focus();
	    $('#statusDivision').html('');
	    return false;
		
		}
	
	else
		{
		
		 var formData = new FormData();
	     formData.append("currentpassword", currentpassword);
	     formData.append("newpassword", newpassword);
	     
		 
		 $(document).ready(function(){
			 

			 $.ajax({
			        url: "phpFiles/updatePassword.php",// give your url
			        type: "POST",
			        data: formData,
			        dataType: 'json',
			        processData: false,
			        contentType: false,
			        success: function (response) {
			            console.log(response.error);
			            
			            if(response.error == 1)
			            	{
			            	 
			            	
			      		     $('#statusDivision').html('<font color="red">Please Enter Correct Password</font>');

			     		  	document.getElementById("currentPasswordDivision").className = 'form-group has-error has-feedback';
			     		    document.getElementById("currentPasswordErrorSpan").className = 'glyphicon glyphicon-remove form-control-feedback';
			     		    document.getElementById("currentPassword").focus();
			     		    
			      		     return;	
			            	}
			            else
			            	{
			            	$('#statusDivision').html('<font color="green">Your Password has been updated Successfully !!</font>');
			            	document.getElementById('currentPassword').value="";
			            	document.getElementById('newPassword').value="";
			            	document.getElementById('confirmPassword').value="";
			            	return;
			            	}
			        }
			    });
	 });
		}

}


getProfilePic();






function getProfilePic()
{
	$(document).ready(function(){
		
		$.getJSON("phpFiles/getProfile.php",{},function(data){
			 
			
			$('#profilePicture').html('<img src="profilePictures/'+data.image+'?'+new Date().getTime()+'" class="img-rounded" width="50%" height="20%">');
			document.getElementById("miniImage").src='profilePictures/'+data.image+'?'+new Date().getTime();
		});
	});


	 
}


function updateProfilePic()
{
	
	 $('#statusDivision').html('<img src="images/loader.gif" style="height: 3%;width: 2%">');
	 var formData = new FormData();
     
     formData.append( 'image', $( '#image' )[0].files[0] );
	 
	 $(document).ready(function(){
		 

		 $.ajax({
		        url: "phpFiles/updateProfile.php",// give your url
		        type: "POST",
		        data: formData,
		        dataType: 'json',
		        processData: false,
		        contentType: false,
		        success: function (response) {
		            console.log(response.error);
		           
		            if(response.error == 1){
						 
					    
			        	
		            	$('#statusDivision').html('<font color="red">File is not an Image</font>');
			        	
				     }
				 
				 else if(response.error == 2)
					 {
					  
			        	
					 $('#statusDivision').html('<font color="red">Image size should be less than 100 KB</font>');
			        	
					 }
				 
				 else if(response.error == 3)
					 {
					  
			        	
					 $('#statusDivision').html('<font color="red">Image Format not Supported</font>');
			        	
					 }
				 else if(response.error == -1)
				 {
					 $('#statusDivision').html('<font color="red">Please upload an Image</font>');
		        	
				 }
				 else
					 {
					 $('#statusDivision').html('<font color="green">Your Profile Picture has been updated Successfully !!</font>');
					 getProfilePic();
					 }
				 
		            
		        }
		    });
 });
}