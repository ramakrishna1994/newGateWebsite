


	
	
	$(document).ready(function(){
		
		var j;
		  $.getJSON( "phpFiles/getTestResults.php", {}, function( data ) {
			  
			//alert(data[1][0]);
			//alert(data.length);
		if(data.length != 0)
		{
			
			var i,innerhtml='<table class="table table-Bordered table-striped text-center" ><tr>'
			+'<td><strong>S.No</strong></td>'
			+'<td><strong>Test Name</strong></td>'
			+'<td><strong>Test Status</strong></td>'
			+'</tr>';
			
			
			for(i=0;i<data.length;i++)
				{
				//alert(1);
				j=i+1;
				
				 innerhtml +='<tr>'
				  		+'<td>'+j+'</td>'
				  		+'<td>'+data[i][2]+'</td>'
				  		+'<td><button type="button" class="btn btn-danger btn-block" onclick="showExpand(\''+data[i][0]+'\','+j+','+data.length+')" id="expandTab'+j+'" ticked="0" ><div class="testComplete" onclick="showExpand(\''+data[i][0]+'\','+j+','+data.length+')" id="'+data[i][0]+'">TEST RESULTS</button></td>'
				  		+'</tr>';
				  
				  
	                      
					 
					  
				
			}
			
			innerhtml +='</table>';
		}
		else
		{
			 innerhtml='<div class="well well-sm text-center"><b>You have not completed any tests</b></div>';
		}
			
			$('#mainDivision').html('');
			$('#mainDivision').html(innerhtml);
		});
		  
		  
		
	});
	

	

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




 	
