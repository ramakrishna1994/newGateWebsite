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
          $("#question").html(data.question);
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
 