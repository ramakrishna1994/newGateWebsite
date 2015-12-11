
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
 
 
