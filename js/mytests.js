


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
					  		+'<td><button type="button" class="btn btn-success btn-block btn-xs" onclick="openExamWindow(\''+data[i][0]+'\')" id="'+data[i][0]+'"><b>Start Test</b></button></td>'
					  		+'</tr>';
			    
				  }
			  else if(data[i][1] == 1)
				  {

				  innerhtml +='<tr>'
					  		+'<td>'+j+'</td>'
					  		+'<td>'+data[i][2]+'</td>'
					  		+'<td><button type="button" class="btn btn-warning btn-block btn-xs" onclick="openExamWindow(\''+data[i][0]+'\')" id="'+data[i][0]+'"><b>Continue Test</b></button></td>'
					  		+'</tr>';
				  

				  }
			 
			}
			else
				{

				  innerhtml +='<tr>'
					  		+'<td>'+j+'</td>'
					  		+'<td>'+data[i][2]+'</td>'
					  		+'<td><a href="buytestseries.php" class="btn btn-primary btn-block btn-xs"><b>Buy Test Series</b></a></td>'
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
		
				childWindow = window.open('notSubscribed.php','testWindow','toolbar=no, location=no, directories=no, status=no, menubar=no,height ='+screen.height+'px,width = '+screen.width+'px');
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



