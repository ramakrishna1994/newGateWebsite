


	
	
	$(document).ready(function(){
		
		var j;
		  $.getJSON( "phpFiles/getTestResults.php", {}, function( data ) {
			  
			//alert(data[1][0]);
			//alert(data.length);
		if(data.length != 0)
		{
			
			var i,innerhtml='<table class="table table-condensed table-bordered table-striped text-center" ><tr>'
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
				  		+'<td><button onclick="showResults(\''+data[i][0]+'\')" class="btn btn-danger btn-block btn-xs" ><b>Test Results</b></button></td>'
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
		
		
	$('#subjectresult').val(subject);
	$('#invisible_form').submit();
	    
	    
	}




 	
