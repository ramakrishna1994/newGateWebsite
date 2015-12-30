<?php 


require_once 'isSessionSet.php';
header('Content-type: application/json');
require_once 'connection.php';


$tableName=$_SESSION['gateusername'].".tests";
$examname = $_SESSION['subjectresult'];
$filename=$examname."questions";

//echo $filename;
$selectquery="select totalMarks,answers,marks,noOfQuestions from `".$tableName."` where testName = '".$examname."';";

$result=mysqli_query($con,$selectquery) or die(mysqli_error($con));

//$str = file_get_contents('../questions/'.$filename.'.json');
//$jsonData = json_decode($str, true);





$answerjsondata ="";
$json = "";
while($row = mysqli_fetch_array($result)){

	$answerjsondata = json_decode($row["answers"],true);
	$json .= '[{"yourMarks":'.number_format((float)$row["marks"], 2, '.', '').',';
	$json .= '"totalMarks":'.$row["totalMarks"].'},';
	$noOfQuestions = $row['noOfQuestions'];
			
}


$selectquery1 = "select * from ".$examname;
$result1 = mysqli_query($con,$selectquery1) or die(mysqli_error($con));
//echo $noOfQuestions;
$i=0;
while($row1 = mysqli_fetch_array($result1))
{
	
		$i++;
		$json .='{';
		
		$json .= '"questionNo":'.'"'.$row1["questionNo"].'",';
		$json .= '"isNumerical":'.'"'.$row1["isNumerical"].'",';
		$json .= '"marks":'.$row1["marks"].',';
		
		if($answerjsondata["answers"][$i]["answer"] == $row1["answer"])
		{
				$json .= '"yourMarks":'.$row1["marks"].',';
				$json .= '"correct":'.'1';
				
		}
		else if($row1["isNumerical"] == '1')
		{
				$json .= '"yourMarks":'.'0,';
				$json .= '"correct":'.'0';
		}
		else 
		{	
				$json .= '"yourMarks":'.-number_format((float)($row1["marks"] / 3), 2, '.', '').',';
				$json .= '"correct":'.'0';
		}
		
		$json.='}';
		
		if($i!=$noOfQuestions)
				$json.=',';
	
}

$json .= ']';


echo $json;

mysqli_close($con);

?>