<?php 

require_once 'connection.php';
require_once 'isSessionSet.php';

$questionNo=mysqli_real_escape_string($con,$_POST["questionNo"]);
$tableName=$_SESSION['gateusername'].".tests";
$examname = $_SESSION['subjectresult'];
$filename=$examname."questions";


$selectquery="select answers,activationStatus,statusOfExam from `".$tableName."` where testName = '".$examname."';";

$result=mysqli_query($con,$selectquery) or die(mysqli_error($con));

//$str = file_get_contents('../questions/'.$filename.'.json');
//$jsonData = json_decode($str, true);



$json="";

while($row = mysqli_fetch_array($result)){

	if($row['activationStatus']!=0)
	{	
		if($row['statusOfExam']==2)
		{
			$selectquery1 = "select * from ".$examname." where questionNo = ".$questionNo;
			$result1 = mysqli_query($con,$selectquery1) or die(mysqli_error($con));;
			while($row1 = mysqli_fetch_array($result1))
			{
				$json .='{';
				$json .= '"questionNo":'.'"'.mysqli_real_escape_string($con,$row1["questionNo"]).'",';
				$json .= '"question":'.'"'.mysqli_real_escape_string($con,$row1["question"]).'",';
				$json .= '"optionA":'.'"'.mysqli_real_escape_string($con,$row1["optionA"]).'",';
				$json .= '"optionB":'.'"'.mysqli_real_escape_string($con,$row1["optionB"]).'",';
				$json .= '"optionC":'.'"'.mysqli_real_escape_string($con,$row1["optionC"]).'",';
				$json .= '"optionD":'.'"'.mysqli_real_escape_string($con,$row1["optionD"]).'",';
				$json .= '"isNumerical":'.'"'.mysqli_real_escape_string($con,$row1["isNumerical"]).'",';
				$json .= '"isImage":'.'"'.mysqli_real_escape_string($con,$row1["isImage"]).'",';
				$json .= '"imagePath":'.'"'.mysqli_real_escape_string($con,$row1["imagePath"]).'",';
				$json .= '"marks":'.'"'.mysqli_real_escape_string($con,$row1["marks"]).'",';
				
				$answerjsondata = json_decode($row["answers"],true);
				
				$json .= '"yourAnswer":'.'"'.$answerjsondata["answers"][$questionNo]["answer"].'",';
				$json .= '"correctAnswer":'.'"'.mysqli_real_escape_string($con,$row1["answer"]).'",';
				$json .= '"solution":'.'"'.mysqli_real_escape_string($con,$row1["solution"]).'"';
				
				$json .='}';
				}
					
			}
			else
			{
				$json ='{"error":"1"}';
			}
		
	}
	else
	{
		$json ='{"error":"1"}';
	}
}


echo $json;

mysqli_close($con);



?>