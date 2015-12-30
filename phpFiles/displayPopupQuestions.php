<?php 
require_once 'isSessionSet.php';
require_once 'connection.php';
header('Content-type: application/json');

$tableName=$_SESSION['gateusername'].".tests";
$subjectname=$_SESSION['subjectresult'];
$filename=$subjectname."questions";

$selectquery="select answers,subjectName,noOfQuestions,activationStatus from `".$tableName."` where testname = '".$subjectname."' ;";

$result=mysqli_query($con,$selectquery) or die(mysqli_error($con));

$json="";


//$str = file_get_contents('../questions/'.$filename.'.json');
//$jsonData = json_decode($str, true);


while($row = mysqli_fetch_array($result)){
	
	if($row['activationStatus']==1)
	{
			$json .='[{';
			$json .= '"noOfQuestions":'.$row['noOfQuestions'].',';
			$json .= '"subjectName":"'.$row['subjectName'].'"},';
			
			$answerjsondata = json_decode($row["answers"],true);
			
			
			$selectquery1 = "select * from ".$subjectname;
			$result1 = mysqli_query($con,$selectquery1) or die(mysqli_error($con));;
			$i=0;
			while($row1 = mysqli_fetch_array($result1))
			{
				$i++;
				$json .='{';
			
				if($answerjsondata["answers"][$i]["answer"] == $row1["answer"])
				{
					$json .= '"correct":'.'1';
			
				}
				else
				{
					$json .= '"correct":'.'0';
				}
			
				$json.='}';
			
				if($i!=$row["noOfQuestions"])
					$json.=',';
			
			}
			
			$json .=']';
			
			
	}
	else
	{
			$json .='{"error":"1"}';
	}
	
	
	
	
	


	
	
	
	
	 
}

echo $json;

mysqli_close($con);


?>