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
	
	$('#ramakrishna').html('');
	$('#mainAlertDivision').slideDown();
	$('#manualEndTest').hide();
	$('#automaticEndTest').hide();
	$('#loaderAlertDivision').show();
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
		
		
		$('#loaderAlertDivision').hide();
		$('#automaticEndTest').show();
         
        	
	});
	
}



















