var noOfQuestions,previousQuestionNo,nextQuestionNo;


 	

displayPopupQuestions();
getQuestion(1);
function displayPopupQuestions()
{
	 $(document).ready(function(){
		 
		 
		 $.post("phpFiles/displayPopupQuestions.php",function(data){
			 
			 
			 
				 var i,j,innerhtml="";
				 
			if(data.error == '1')
				{
					window.open("tests.php","_self");
					return;
				}
				 noOfQuestions = data.noOfQuestions;
				  for(i=1;i<=data.noOfQuestions;i++)
					  {
					   
					  	j=i;
					  	
					  	if(i<10)
						 {
					  		j="0"+i;
						 }
					  	
					    if(i==1)
					    	innerhtml += '<button class="btn btn-success margin-all"  onclick="getQuestion('+i+')">'+j+'</button>';
					    else
					    	innerhtml += '<button class="btn btn-danger margin-all"  onclick="getQuestion('+i+')">'+j+'</button>';
					  }
				 
				 
				  $('#questionsDivision').html(innerhtml);
				  
				 
			 
		 },"json")
	 });
  
}


function clickQuestion(subject,questionNo,calledValue)
{
	var question = 'question'+questionNo;
	var i;
	for(i=1;i<=noOfQuestions;i++)
		{
		   var question1 = 'question'+i;
		   document.getElementById(question1).className = 'notSelected';
		}
	document.getElementById("marksDistribution").className = 'marksDistributionButtonNotSelected';
	
	if(calledValue == 1)
	{
		document.getElementById(question).className = 'selected';
		getPopupQuestion(subject, questionNo);
	}
	else
	{
		document.getElementById("marksDistribution").className = 'marksDistributionButtonSelected';	
		getMarksDistribution(subject);
		
	}

}


function getQuestion(questionNo)
{
	/*
	$('#popupPreviousDivision').show();
	$('#popupQuestionNoDivision').show();
	$('#popupRightOrWrongDivision').show();
	$('#popupMarksDivision').show();
	$('#popupNextDivision').show();
	$('#popupMainDivision').show();
	
	$('#popupMarksDistributionDivision').hide();
	
	
	$('#popupQuestionNoDivision').html('<img src="images/redloader.gif" style="height: 20px;width: 20px">');
	$('#popupQuestionDivision').html('<img src="images/redloader.gif" style="height: 20px;width: 20px">');
	$('#popupImageDivision').html('<img src="images/redloader.gif" style="height: 20px;width: 20px">');
	$('#popupoptionADivision').html('<img src="images/redloader.gif" style="height: 20px;width: 20px">');
	$('#popupoptionBDivision').html('<img src="images/redloader.gif" style="height: 20px;width: 20px">');
	$('#popupoptionCDivision').html('<img src="images/redloader.gif" style="height: 20px;width: 20px">');
	$('#popupoptionDDivision').html('<img src="images/redloader.gif" style="height: 20px;width: 20px">');
	$('#popupYourAnswerDivision').html('<img src="images/redloader.gif" style="height: 20px;width: 20px">');
	$('#popupCorrectAnswerDivision').html('<img src="images/redloader.gif" style="height: 20px;width: 20px">');
	$('#popupSolutionDivision').hide();
	
	*/
	$(document).ready(function(){
		 
		 
		 $.post("phpFiles/getPopupQuestion.php",{questionNo:questionNo},function(data){
			 
			 if(data.error == '1')
			 {
			   window.open("tests.php","_self");
			   return;
			 }
		
			 
			 $('#questionNo').html('<font color="blue">Question No : '+data.questionNo+'</font>');
			 $('#maxMarks').html('<font color="blue">Max Marks : '+data.marks+'</font>');
			 $('#question').html(data.question);
			 
			  if(data.isImage == '1')
				 {
				  	$('#image').show();
				  	$('#image').html('<img class="img img-rounded" src="'+data.imagePath+'">');
				  	
				 }
			 else
				 {
				    $('#image').hide(); 
				    $('#image').html('');
				 }
			 
			 
			 if(data.isNumerical == '0')
				 {
				 		$('#optionA').show();
				 		$('#optionB').show();
				 		$('#optionC').show();
				 		$('#optionD').show();
				 		
				 		$('#optionA').html('A)	'+data.optionA);
				 		$('#optionB').html('B)	'+data.optionB);
				 		$('#optionC').html('C)	'+data.optionC);
				 		$('#optionD').html('D)	'+data.optionD);
				 }
			 else
				 {
				        $('#optionA').hide();
				        $('#optionB').hide();
				        $('#optionC').hide();
				        $('#optionD').hide();
				 }
			 if(data.yourAnswer == "")
				 {
				 		$('#yourAnswer').html('<font color="red">You have not Answered this question</font>');
				 		
				 }
			 else if(data.yourAnswer == data.correctAnswer)
				 {
				 		$('#yourAnswer').html('<font color="green">You have Answered '+data.yourAnswer+'</font>');
				 		
				 }
			 else 
				 {
				 		$('#yourAnswer').html('<font color="red">You have Answered '+data.yourAnswer+'</font>');
				 		
				 }
				 		
			 
			 $('#correctAnswer').html('Correct answer is '+data.correctAnswer);
			 
			 
			 
				 
			 	 
			 $('#solution').html(data.solution);
			 
		 },"json");
	 });
  
}




function getMarksDistribution(subject)
{
	$('#popupPreviousDivision').hide();
	$('#popupQuestionNoDivision').hide();
	$('#popupRightOrWrongDivision').hide();
	$('#popupMarksDivision').hide();
	$('#popupNextDivision').hide();
	$('#popupMainDivision').hide();
	
	$('#popupMarksDistributionDivision').show();
	$('#popupMarksDistributionDivision').html('<img src="images/redloader.gif" style="height: 20px;width: 20px">');
	
	var i;
	 var innerhtml = '<table border="1px solid" style="text-align:center;padding:2px;">'
		  		   + '<tr><td>Question No</td><td>Given Marks</td><td>Status</td><td>Your Marks</td></tr>';
	$(document).ready(function(){
		
		 $.post("phpFiles/getMarksDistribution.php",{subject:subject},function(data){
			 
				 			
				 	for(i=1;i<data.length;i++)
				 		{
				 		
				 		 	innerhtml +='<tr><td>'+data[i].questionNo+'</td><td>'+data[i].marks+'</td>';
				 		 
				 		 	if(data[i].correct == 1)
				 		 		 innerhtml +='<td><image src="images/correct.jpg" style="height:20px;width:20px;border-radius:50%"></td>';
				 		 	else
				 		 		 innerhtml +='<td><image src="images/wrong.jpg" style="height:20px;width:20px;border-radius:50%"></td>';
				 		 	
				 		 	innerhtml += '<td>'+data[i].yourMarks+'</td></tr>';
				 		}
				 	innerhtml +='<tr><td colspan="3">Total Marks</td><td>'+data[0].totalMarks+'</td></tr></table>';
					 
					 $('#popupMarksDistributionDivision').html(innerhtml);
			 
		 },"json");
		 
		 
		 
	});

}












