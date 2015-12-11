

navigate(1);


function navigate(val)
{
	displayPopupQuestions();
	getQuestion(1);
	getMarksDistribution();
	
	if(val==1)
		{
			document.getElementById("marksAndRankings").className='active';
			document.getElementById("answers").className='';
			$('#answersDivision').hide();
			$('#marksAndRankingsDivision').show();
			
		}
	else
		{
			document.getElementById("marksAndRankings").className='';
			document.getElementById("answers").className='active';
			$('#answersDivision').show();
			$('#marksAndRankingsDivision').hide();
			
		}

}
 	


function displayPopupQuestions()
{
	 $(document).ready(function(){
		 
		 
		 $.post("phpFiles/displayPopupQuestions.php",function(data){
			 
			 
			 
				 var i,j,innerhtml="";
				 
			if(data.error == '1')
				{
					window.open("testresults.php","_self");
					return;
				}
				 noOfQuestions = data.noOfQuestions;
				  for(i=1;i<=data[0].noOfQuestions;i++)
					  {
					   
					  	j=i;
					  	
					  	if(i<10)
						 {
					  		j="0"+i;
						 }
					  	
					    if(data[i].correct==1)
					    	innerhtml += '<button class="btn btn-success margin-all"  onclick="getQuestion('+i+')">'+j+'</button>';
					    else
					    	innerhtml += '<button class="btn btn-danger margin-all"  onclick="getQuestion('+i+')">'+j+'</button>';
					  }
				 
				 
				  $('#subjectName').html('<font color="blue">'+data[0].subjectName+'</font>');
				  $('#questionsDivision').html(innerhtml);
				  
				 
			 
		 },"json")
	 });
  
}




function getQuestion(questionNo)
{
	$(document).ready(function(){
		 
		 
		 $.post("phpFiles/getPopupQuestion.php",{questionNo:questionNo},function(data){
			 
			 if(data.error == '1')
			 {
			   window.open("testresults.php","_self");
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




function getMarksDistribution()
{
	var i;
	 var innerhtml =	'<tr><th colspan="4" class="text-center">Marks Distribution</th></tr>'
		 				+'<tr><th>Q.No</th><th>Max Marks</th><th>Answered</th><th>Your Marks</th></tr>';
		 				 
		 	
	$(document).ready(function(){
		
		 $.post("phpFiles/getMarksDistribution.php",function(data){
			 
				 			
				 	for(i=1;i<data.length;i++)
				 		{
				 		
				 		 	
				 		 
				 		 		if(data[i].correct == 1)
				 		 			{
				 		 			
				 		 			innerhtml +='<tr class="bg-success"><td>'+data[i].questionNo+'</td><td>'+data[i].marks+'</td><td>Correct</td>';
				 		 			
				 		 			}
				 		 		 
				 		 	else
				 		 		{
				 		 		innerhtml +='<tr class="bg-danger"><td>'+data[i].questionNo+'</td><td>'+data[i].marks+'</td><td>Wrong</td>';
				 		 		
				 		 		}
				 		 		 
				 		 	
				 		 	innerhtml += '<td>'+data[i].yourMarks+'</td></tr>';
				 		}
				 	innerhtml +='<tr><td colspan="3">Total Marks</td><td>'+data[0].yourMarks+'</td></tr></table>';
					 
					 $('#marksDistribution').html(innerhtml);
					 $('#totalMarks').html('Total Marks : '+data[0].totalMarks);
					 $('#yourMarks').html('Your Marks : '+data[0].yourMarks);
			 
		 },"json");
		 
		 
		 
	});

}









