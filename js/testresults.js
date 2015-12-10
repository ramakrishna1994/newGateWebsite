


	
	
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
				  		+'<td><button type="button" class="btn btn-danger btn-block btn-xs" onclick="showResults(\''+data[i][0]+'\')"><b>Test Results</b></button></td>'
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
	

	

function showResults(subject)
{
		
		
	    
	    
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
	    		
	    		 
	    		
	    	},"json");
	    });
	    
	 
	}




 	
