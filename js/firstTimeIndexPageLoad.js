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