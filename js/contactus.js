
function sendFeedback()
{
	
  $('#statusDivision').html('<img src="images/loader.gif" style="height: 3%;width: 2%;">');
 var feedback = document.getElementById("feedback").value; 
 var emailid = document.getElementById("feedbackemailid").value;
 
 if(feedback != "")
  {
 $(document).ready(function(){
	 
	 $.post("phpFiles/sendFeedback.php",{feedback : feedback , emailid :emailid},function(){
		 
		   $('#statusDivision').html('<font color="green">Thanks for giving us your feedback!! We appreciate your time and will get back to you as soon as possible.</font>');
		   document.getElementById("feedback").value = ""; 
	 });
	 
 });
 
  }
 else
	 {
	 $('#statusDivision').html('<font color="red">Please Enter your feedback.</font>');
	   document.getElementById("feedback").value = "";
	 }


}