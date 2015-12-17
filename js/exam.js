$(document).ready(function(){
	
	var innerHtml="<b>";
	$.getJSON("phpFiles/firstTimeIndexPageLoad.php",function(data){
		var i,j;
		var markedarray= data.marked;
		
		for(i=1; i<=markedarray.length;i++)
			{
			  //alert('inside1');
			j=i;
			  if(i<10)
				  {
				  j="0"+i;
				  }
		      if(markedarray[i-1]==0)
		    	  {
			       innerHtml +='<button type="button" class="btn btn-default margin-all" id="question'+i+'" onclick="getQuestion('+i+')">'+j+'</button>';
		    	   //alert('o1');
		    	  }
			       
		      else if(markedarray[i-1]==1)
		    	  {
				   innerHtml +='<button type="button" class="btn btn-success margin-all" id="question'+i+'" onclick="getQuestion('+i+')">'+j+'</button>';
				   //alert('o2');
		    	  }
		      
				  else
					  {
		             innerHtml +='<button type="button" class="btn btn-primary margin-all" id="question'+i+'" onclick="getQuestion('+i+')">'+j+'</button>';
		             //alert('o3');
					  }
			}
		
		innerHtml+='</b>'
		$("#numbersDivision").html("");
		$("#numbersDivision").html(innerHtml);
	
	});
	
});



/*****************************timer functions*********************************/


var hours,minutes,seconds,time,id;
var pastMinute,pastSecond;
var subjectName;

$(document).ready(function(){
	
	
	
	$.getJSON("phpFiles/getTimer.php",function(data){
		
		      subjectName = data.subjectname;
              time=data.timer;
              var timeArray = time.split(":");
              //alert(timeArray);
			  hours=timeArray[0];
              minutes=timeArray[1];
              seconds=timeArray[2];
			  $("#hoursDivision").html("");
			  $("#minutesDivision").html("");
			  $("#secondsDivision").html("");
			  $("#hoursDivision").html('<b>'+hours+'</b>');
			  $("#minutesDivision").html('<b>'+minutes+'</b>');
			  $("#secondsDivision").html('<b>'+seconds+'</b>');
			
			  id = setInterval(function(){startTimer();}, 1000);
			  
			  
		
	
	});
	
});






function startTimer()
{
	
    hours=parseInt(hours);
	minutes=parseInt(minutes);
	seconds=parseInt(seconds);
	
	
	pastMinute = minutes;
	
	//alert(hours);
	
    seconds=seconds-1;
    if(seconds == -1)
    	{
    	seconds=59;
    	minutes=minutes-1;
    	presenttMinute = minutes;
    	}
    if(minutes == -1)
    	{
    	 if(hours!=0)
    	  hours=hours-1;
    	 minutes=59;
    	}
    if(hours==0 && minutes==0 && seconds==0)
    	{
    	window.clearInterval(id);
    	 
    	 
    	 endTest();
    	 
    	 
    	}
    	
    if(hours < 10)
    	{
    	 hours = "0"+hours;
    	}
    if(minutes < 10)
    	{
    	 minutes="0"+minutes;
    	}
    if(minutes == 0)
    	{
    		if(seconds%2 == 0)
    		{
    			document.getElementById('secondsDivision').className = 'btn btn-danger';
    			document.getElementById('minutesDivision').className = 'btn btn-danger';
    			document.getElementById('hoursDivision').className = 'btn btn-danger';
    		}
    		if(seconds%2 == 1)
        	{
    			document.getElementById('secondsDivision').className = 'btn btn-primary';
    			document.getElementById('minutesDivision').className = 'btn btn-primary';
    			document.getElementById('hoursDivision').className = 'btn btn-primary';
        	}
        
    	}
    if(seconds < 10)
    	{
    	 seconds="0"+seconds;
    	}
    
      $("#hoursDivision").html("");
	  $("#minutesDivision").html("");
	  $("#secondsDivision").html("");
	  $("#hoursDivision").html('<b>'+hours+'</b>');
	  $("#minutesDivision").html('<b>'+minutes+'</b>');
	  $("#secondsDivision").html('<b>'+seconds+'</b>');
	
	  if(parseInt(seconds)%5 == 0)
         updateTimerToDatabase(hours,minutes,seconds);
		  
	
}


function updateTimerToDatabase(hours,minutes,seconds)
{
 
	var timer = hours+":"+minutes+":"+seconds;
	 $.ajax({
	        url: 'phpFiles/updateTimer.php',
	        type: 'POST',
	        data: 
	        {
	            timer : timer,
	         }
	    });
	
}

function endTest()
{
	
	window.clearInterval(id);
	
	var request = $.ajax({
        url: 'phpFiles/endTest.php',
        type: 'POST',
        data: 
        {
            subjectname : subjectName,
         }
    });
	$.when(request).done(function(){
		
		
		window.open("endtestpage.php","_self"); 
        	
	});
	
}


function manualEndTest()
{

		$('#endTestDialogue').modal('show');
	
}


/****************************************************************************/


/*********************************getQuestions******************************/



getQuestion(1);

function setAnswer(val)
{
	//alert(val);
	var array=['dummy','A','B','C','D'];	
 var id="option"+array[val]+"CheckDivision";

 
 document.getElementById(id).className="glyphicon glyphicon-check";
 
 
 var i=0;
 for(i=1;i<=4;i++)
	 {
	 id="option"+array[i]+"CheckDivision";
	  if(i!=val)
		  {
   //      alert(1);
		  document.getElementById(id).className="glyphicon glyphicon-unchecked";
		   
		  }
	 }


 
}

 function getQuestion(current){
	 
	  $(document).ready(function(){
		  
		  $("#imageDivision").hide();
			 $("#questionNo").html('<img src="images/redloader.gif" style="height: 3%;width: 2%">');
			  $("#question").html('<img src="images/redloader.gif" style="height: 3%;width: 2%">');
		      $("#optionA").html('<img src="images/redloader.gif" style="height: 3%;width: 2%">');
		      $("#optionB").html('<img src="images/redloader.gif" style="height: 3%;width: 2%">');
		      $("#optionC").html('<img src="images/redloader.gif" style="height: 3%;width: 2%">');
		      $("#optionD").html('<img src="images/redloader.gif" style="height: 3%;width: 2%">');
		 
		  
		  $.getJSON( "phpFiles/getQuestion.php", { questionNo: current}, function( data ) {
		
			  $("#questionNo").html("<b>QUESTION NO : "+data.questionNo+"</b>");
	          $("#question").html('<b>'+data.question+'</b>');
	          if(data.error == '1')
	        	  {
	        	   window.location.reload();
	        	   return;
	        	  }
	          if(data.isNumerical == '0')
	          {
	        	  $("#numericalAnswerDivision").hide();
	        	  $("#imageDivision").hide();
	        	  $("#optionADivision").show();
	        	  $("#optionBDivision").show();
	        	  $("#optionCDivision").show();
	        	  $("#optionDDivision").show();
	        	  $("#optionA").html(data.optionA);
	        	  $("#optionB").html(data.optionB);
	        	  $("#optionC").html(data.optionC);
	        	  $("#optionD").html(data.optionD);
	        	  
	        	  document.getElementById("numericalAnswer").value="";

	        	  document.getElementById("optionACheckDivision").className='glyphicon glyphicon-unchecked';
	      		  document.getElementById("optionBCheckDivision").className='glyphicon glyphicon-unchecked';
	      		  document.getElementById("optionCCheckDivision").className='glyphicon glyphicon-unchecked';
	      		  document.getElementById("optionDCheckDivision").className='glyphicon glyphicon-unchecked';
	    		
	    		  
	    		  var answer = data.answered;
	 	    	 
	 	    	  if(answer!= '')
	     		  {
	 	    		 // alert(data.answered);
	     		    
	     		    var radioButton="option"+answer+"CheckDivision";
	     		    document.getElementById(radioButton).className='glyphicon glyphicon-check';
	       		    
	     		    
	     		   
	     		  }
	 	    	  
	 	    	  if(data.isImage == '1')
	 	    		  {
	 	    		   $('#imageDivision').show();
	 	    		   $('#imageDivision').html('<img src="images/redloader.gif" style="height: 20px;width: 20px">');
	 	    		  $('#imageDivision').html('<img src="'+data.imagePath+'">');
	 	    		   
	 	    		  }
	 	    	  else
	 	    		  {
	 	    		 $('#imageDivision').hide();
	 	    		  }
	        	  
	          }
	          else
	          {
	        	  $("#optionADivision").hide();
	        	  $("#optionBDivision").hide();
	        	  $("#optionCDivision").hide();
	        	  $("#optionDDivision").hide();
	        	  $('#imageDivision').hide();
	        	 
	      		  
	        	  $("#numericalAnswerDivision").show();
	        	  document.getElementById("numericalAnswer").value="";
	        	  var answer = data.answered;
		 	    	 
		 	    	  
		 	    	  if(answer!= '')
		     		  {
		     		    
		     		    document.getElementById("numericalAnswer").value=answer;
		       		    
		     		    
		     		  }

		 	    	  if(data.isImage == '1')
		 	    		  {
		 	    		    $('#imageDivision').show();
		 	    		    $('#imageDivision').html('<img src="images/redloader.gif" style="height: 20px;width: 20px">');
		 	    		    $('#imageDivision').html('<img src="'+data.imagePath+'" >');
		 	    		   
		 	    		  }
		 	    	  else
		 	    		  {
		 	    		   $('#imageDivision').hide();
		 	    		  }
		        	  
		 	    	  
	          }
		      document.getElementById("saveAndNextDivision").setAttribute("onclick","saveAndNext("+data.current+",'"+data.isNumerical+"')");
	    	  document.getElementById("reviewAndNextDivision").setAttribute("onclick","reviewAndNext("+data.current+",'"+data.isNumerical+"')");

	    	 
    	  
	    	});
		  
	  });	 
 }
 
 
/**************************************************************************************/

 
 
 
/******************************************reviewAndNext******************************/
 
 
 
 
 function reviewAndNext(current,isNumerical){ 

	  var questionNo="question"+current;
	 //alert("enteredrev");

	
	 
		 
		 var value,marked;
		 
	if(isNumerical == '0')
	{
		 if(document.getElementById("optionACheckDivision").className=='glyphicon glyphicon-check')
			 {
			 
			 value="A";
			 marked="2";
			 document.getElementById(questionNo).className="btn btn-primary margin-all";	 
			 }
		 else if(document.getElementById("optionBCheckDivision").className=='glyphicon glyphicon-check')
		 {
			 
			 value="B";
			 marked="2";
			 document.getElementById(questionNo).className="btn btn-primary margin-all";	 
			 }

		 else if(document.getElementById("optionCCheckDivision").className=='glyphicon glyphicon-check')
		 {
			 
			 value="C";
			 marked="2";
			 document.getElementById(questionNo).className="btn btn-primary margin-all";	 
			 }

		 else if(document.getElementById("optionDCheckDivision").className=='glyphicon glyphicon-check')
		 {
			 
			 value="D";
			 marked="2";
			 document.getElementById(questionNo).className="btn btn-primary margin-all";	 
		 }
		 else
			 {
			 
			 value="";
			 marked="0";
			 }
	}
	else
	{
		 value=document.getElementById("numericalAnswer").value;
		// alert("numerical");
		 if(value!="")
			 {
			 marked="2";
			 document.getElementById(questionNo).className="btn btn-primary margin-all";	 
			 }
		 else
			 {
			  marked="0";
			 }
		 
	}
		
		 	 

	 $("#questionNo").html('<img src="images/redloader.gif" style="height: 3%;width: 2%">');
	  $("#question").html('<img src="images/redloader.gif" style="height: 3%;width: 2%">');
    $("#optionA").html('<img src="images/redloader.gif" style="height: 3%;width: 2%">');
    $("#optionB").html('<img src="images/redloader.gif" style="height: 3%;width: 2%">');
    $("#optionC").html('<img src="images/redloader.gif" style="height: 3%;width: 2%">');
    $("#optionD").html('<img src="images/redloader.gif" style="height: 3%;width: 2%">');

	 
 $(document).ready(function(){
	  
	  $.getJSON( "phpFiles/saveAndReviewQuestion.php", { questionNo : current ,answer : value,marked:marked}, function( data ) {
   	 
		  $("#questionNo").html("<b>QUESTION NO : "+data.questionNo+"</b>");
         $("#question").html("<b>"+data.question+"</b>");
         $("#imageDivision").hide();
         
         
		  
		  document.getElementById("optionACheckDivision").className='glyphicon glyphicon-unchecked';
 		  document.getElementById("optionBCheckDivision").className='glyphicon glyphicon-unchecked';
 		  document.getElementById("optionCCheckDivision").className='glyphicon glyphicon-unchecked';
 		  document.getElementById("optionDCheckDivision").className='glyphicon glyphicon-unchecked';
 		  
 		  if(data.error == '1')
 		  {
 			  window.location.reload();
 			  return;
 		  }
 		
         if(data.isNumerical == '0')
         {
       	  
       	  $("#numericalAnswerDivision").hide();
       	  $("#optionADivision").show();
       	  $("#optionBDivision").show();
       	  $("#optionCDivision").show();
       	  $("#optionDDivision").show();
       	  
       	  $("#optionA").html(data.optionA);
   	      $("#optionB").html(data.optionB);
   	      $("#optionC").html(data.optionC);
   	      $("#optionD").html(data.optionD);
       	
   	      document.getElementById("numericalAnswer").value="";
   		  
       	  
       	  if(data.answered!='')
   		  {
   		    
       		  var radioButton="option"+data.answered+"CheckDivision";
     		    
     		    //alert(radioButton);
     		    document.getElementById(radioButton).className='glyphicon glyphicon-check';
     		    
     		    
     		  }
       	  
       	  
	    	  if(data.isImage == '1')
	    		  {
	    		   $('#imageDivision').show();
	    		   $('#imageDivision').html('<img src="images/redloader.gif" style="height: 3%;width: 2%">');
	    		  $('#imageDivision').html('<img src="'+data.imagePath+'">');
	    		   
	    		  }
	    	  else
	    		  {
	    		 $('#imageDivision').hide();
	    		  }

         }
         
         else
       	  {
       	  
       	  $("#optionADivision").hide();
       	  $("#optionBDivision").hide();
       	  $("#optionCDivision").hide();
       	  $("#optionDDivision").hide();
       	  
       	  $("#numericalAnswerDivision").show();
       	  document.getElementById("numericalAnswer").value="";
       	  var answer = data.answered;
	 	    	 
	 	    	  if(answer!= '')
	     		  {
	     		    
	     		    document.getElementById("numericalAnswer").value=answer;
	       		    
	     		    
	     		  }
	 	    	  
	 	    	 
       	  }
           	 
         
         
         
         
         if(data.isImage == '1')
		  {
       	  $('#imageDivision').show();
       	  $('#imageDivision').html('<img src="images/redloader.gif" style="height: 3%;width: 2%">');
       	  $('#imageDivision').html('<img src="'+data.imagePath+'">');
		   
		  }
         else
		  {
       	  $('#imageDivision').hide();
		  }

   	  
   	  document.getElementById("saveAndNextDivision").setAttribute("onclick","saveAndNext("+data.current+",'"+data.isNumerical+"')");
   	  document.getElementById("reviewAndNextDivision").setAttribute("onclick","reviewAndNext("+data.current+",'"+data.isNumerical+"')");
   	  
   	});
 
 });    
}
 
 
/************************************************************************************************/
 
 
 
 
 
/*********************************saveAndNext***************************************************/
 
 function saveAndNext(current,isNumerical){ 
     
	  var questionNo="question"+current;
	  

		
		 
		 var value,marked;
		 
	 if(isNumerical == '0')
	 {
		 if(document.getElementById("optionACheckDivision").className=='glyphicon glyphicon-check')
			 {
			
			 value="A";
			 marked="1";
			 document.getElementById(questionNo).className="btn btn-success margin-all";	 
			 }
		 else if(document.getElementById("optionBCheckDivision").className=='glyphicon glyphicon-check')
		 {
			
			 value="B";
			 marked="1";
			 document.getElementById(questionNo).className="btn btn-success margin-all";	 
			 }

		 else if(document.getElementById("optionCCheckDivision").className=='glyphicon glyphicon-check')
		 {
			
			 value="C";
			 marked="1";
			 document.getElementById(questionNo).className="btn btn-success margin-all";	 
			 }

		 else if(document.getElementById("optionDCheckDivision").className=='glyphicon glyphicon-check')
		 {
			
			 value="D";
			 marked="1";
			 document.getElementById(questionNo).className="btn btn-success margin-all";	 
		 }
		 else
		 {
			
			 value="";
			 marked="0";
		}
	 }
	 else
	 {
		
			 
			 value=document.getElementById("numericalAnswer").value;
			 
			 if(value != "")
				 {
				 marked="1";
				 document.getElementById(questionNo).className="btn btn-success margin-all";	 
				 }
			 else
				 {
				 marked="0";
				 	 
				 }
			 
	 }	 
	 
	 
	 
	 $("#questionNo").html('<img src="images/redloader.gif" style="height: 3%;width: 2%">');
	  $("#question").html('<img src="images/redloader.gif" style="height: 3%;width: 2%">');
    $("#optionA").html('<img src="images/redloader.gif" style="height: 3%;width: 2%">');
    $("#optionB").html('<img src="images/redloader.gif" style="height: 3%;width: 2%">');
    $("#optionC").html('<img src="images/redloader.gif" style="height: 3%;width: 2%">');
    $("#optionD").html('<img src="images/redloader.gif" style="height: 3%;width: 2%">');

	 
 $(document).ready(function(){
	 
	  $.getJSON( "phpFiles/saveAndReviewQuestion.php", { questionNo : current, answer:value ,marked:marked }, function( data ) {
	
		  $("#questionNo").html("<b>QUESTION NO : "+data.questionNo+"</b>");
		  $("#question").html("<b>"+data.question+"</b>");
         $('#imageDivision').hide();
         
         
		  document.getElementById("optionACheckDivision").className='glyphicon glyphicon-unchecked';
 		  document.getElementById("optionBCheckDivision").className='glyphicon glyphicon-unchecked';
 		  document.getElementById("optionCCheckDivision").className='glyphicon glyphicon-unchecked';
 		  document.getElementById("optionDCheckDivision").className='glyphicon glyphicon-unchecked';
 		  
 		  if(data.error == '1')
 		  {
 			  window.location.reload();
 			  return;
 		  }
 		
         if(data.isNumerical == '0')
         {

       	  $("#numericalAnswerDivision").hide();
       	  $("#optionADivision").show();
       	  $("#optionBDivision").show();
       	  $("#optionCDivision").show();
       	  $("#optionDDivision").show();
       	  
       	  $("#optionA").html(data.optionA);
       	  $("#optionB").html(data.optionB);
       	  $("#optionC").html(data.optionC);
       	  $("#optionD").html(data.optionD);
   	  
       	  document.getElementById("numericalAnswer").value="";
       	
     		  
       	  if(data.answered!='')
       		  {
       		    
       		  var radioButton="option"+data.answered+"CheckDivision";
     		    
     		    //alert(radioButton);
     		    document.getElementById(radioButton).className='glyphicon glyphicon-check';
     		  
     		    
     		  }
       	  
       	  if(data.isImage == '1')
	    		  {
	    		   $('#imageDivision').show();
	    		   $('#imageDivision').html('<img src="images/redloader.gif" style="height: 3%;width: 2%">');
	    		  $('#imageDivision').html('<img src="'+data.imagePath+'">');
	    		   
	    		  }
	    	  else
	    		  {
	    		 $('#imageDivision').hide();
	    		  }
     	  
          
         }
         
         else
       	  {
       	  
       	  $("#optionADivision").hide();
       	  $("#optionBDivision").hide();
       	  $("#optionCDivision").hide();
       	  $("#optionDDivision").hide();
       	  
       	  
       	  $("#numericalAnswerDivision").show();
       	  document.getElementById("numericalAnswer").value="";
       	  var answer = data.answered;
	 	    	 
	 	    	  if(answer!= '')
	     		  {
	     		    
	     		    document.getElementById("numericalAnswer").value=answer;
	       		    
	     		    
	     		  }
	 	    	  
	 	    	  
       	  }
         
         
         
         if(data.isImage == '1')
		  {
       	  $('#imageDivision').show();
       	  $('#imageDivision').html('<img src="images/redloader.gif" style="height: 3%;width: 2%">');
       	  $('#imageDivision').html('<img src="'+data.imagePath+'">');
		   
		  }
         else
		  {
       	  $('#imageDivision').hide();
		  }
	     
         document.getElementById("reviewAndNextDivision").setAttribute("onclick","reviewAndNext("+data.current+",'"+data.isNumerical+"')");
   	  document.getElementById("saveAndNextDivision").setAttribute("onclick","saveAndNext("+data.current+",'"+data.isNumerical+"')");
   	
   	  
	  });
 
 });    
}

 
 /*************************************************************************************************/