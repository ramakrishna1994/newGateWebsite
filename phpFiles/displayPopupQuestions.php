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


$str = file_get_contents('../questions/'.$filename.'.json');
$jsonData = json_decode($str, true);


while($row = mysqli_fetch_array($result)){
	
	if($row['activationStatus']==1)
	{
			$json .='[{';
			$json .= '"noOfQuestions":'.$row['noOfQuestions'].',';
			$json .= '"subjectName":"'.$row['subjectName'].'"},';
			
			$answerjsondata = json_decode($row["answers"],true);
			
			
			
			for($i=1;$i<=$jsonData["questions"][0]["noOfQuestions"];$i++)
			{
			
				$json .='{';
			
				if($answerjsondata["answers"][$i]["answer"] == $jsonData["questions"][$i]["answer"])
				{
					$json .= '"correct":'.'1';
			
				}
				else
				{
					$json .= '"correct":'.'0';
				}
			
				$json.='}';
			
				if($i!=$jsonData["questions"][0]["noOfQuestions"])
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