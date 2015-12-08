


$(document).ready(function(){
	var i,innerhtml='<tr>'
					+'<td><strong>S.No</strong></td>'
					+'<td><strong>Test Name</strong></td>'
					+'<td><strong>Test Status</strong></td>'
					+'</tr>';
	var j;
	  $.getJSON( "phpFiles/getTests.php", {}, function( data ) {
		  
		//alert(data[1][0]);
		//alert(data.length);
		for(i=0;i<data.length;i++)
			{
			//alert(1);
			j=i+1;
			if(data[i][3] == 1)
			{
			
			  if(data[i][1] == 0)
				  {
				  	
				  innerhtml +='<tr>'
					  		+'<td>'+j+'</td>'
					  		+'<td>'+data[i][2]+'</td>'
					  		+'<td><button type="button" class="btn btn-success btn-block" onclick="openExamWindow(\''+data[i][0]+'\')" id="'+data[i][0]+'">START TEST</button></td>'
					  		+'</tr>';
			    
				  }
			  else if(data[i][1] == 1)
				  {

				  innerhtml +='<tr>'
					  		+'<td>'+j+'</td>'
					  		+'<td>'+data[i][2]+'</td>'
					  		+'<td><button type="button" class="btn btn-danger btn-block" onclick="openExamWindow(\''+data[i][0]+'\')" id="'+data[i][0]+'">CONTINUE TEST</button></td>'
					  		+'</tr>';
				  

				  }
			 
			}
			else
				{

				  innerhtml +='<tr>'
					  		+'<td>'+j+'</td>'
					  		+'<td>'+data[i][2]+'</td>'
					  		+'<td><a href="buytestseries.php" class="btn btn-primary btn-block">BUY TEST SERIES</a></td>'
					  		+'</tr>';
				  
				}
		}
			
		
		$('#mainDivision').html('');
		$('#mainDivision').html(innerhtml);
	});
	
});





function openExamWindow(subjectName)
{
	
	$.post("phpFiles/createTest.php",{test : subjectName },function(data){
		
		if(data.error == '0')
			{
    	
				intervalID  = setInterval(function(){ checkWindow(); }, 100);
				childWindow = window.open('exam.php','testWindow','toolbar=no, location=no, directories=no, status=no, menubar=no,height ='+screen.height+'px,width = '+screen.width+'px');
    
			}
		else
			{
		
				childWindow = window.open('notSubscribed.php','testWindow','toolbar=no, location=no, directories=no, status=no, menubar=no,height = 800px,width = 1100px');
			}
		
     },"json");
	
	
}




function checkWindow() 
{
	
    if (childWindow && childWindow.closed) 
    {
        window.clearInterval(intervalID);
    	
       var request =  $.ajax({
	        url: 'phpFiles/examSessionDestroy.php',
	        
	       
	    });
       
       $.when(request).done(function(){
    	   
    	   
    	   window.opener.location.reload();
    	   
       });
      
        
    }
}




function showResultsWindow(subject,id,length)
{
	
	var result= "result"+id;
	var expand = "expandTab"+id;
	var i,innerhtml;
    for(i=1;i<=length;i++)
    	{
    		var result1 = "result"+i;
    		$('#'+result1).slideUp(500);
    		 var expand1 = "expandTab"+i;
    		document.getElementById(expand1).src = 'images/plus.png';
    		document.getElementById(expand1).setAttribute("ticked", "0");
    	}
    $('#'+result).slideDown(500);
    $('#'+result).html('<img src="images/redloader.gif" style="height: 30px;width: 30px;margin-top:40px;">');
    document.getElementById(expand).src = 'images/minus.png';
    document.getElementById(expand).setAttribute("ticked", "1");
    
    $(document).ready(function(){
    	
    	$.post("phpFiles/getTestScores.php",{subject :subject},function(data){
    		
    		if(data.error == '1')
    			{
    			  window.location.reload();
    			}
    		else
    			{
    			 innerhtml ='<div style="width:400px;height:40px;margin:auto;margin-top:20px;font-family:cursive">'
    				       +'Your score for this test is  &nbsp;&nbsp;"'+data.score+'"</div>'
    				       +'<div class="viewSolutions"  onClick="showAnswers(\''+subject+'\')">VIEW YOUR ANSWERS AND SOLUTIONS</div>';
    			}
    		
    		 $('#'+result).html(innerhtml);
    		
    	},"json");
    });
    
 
}



