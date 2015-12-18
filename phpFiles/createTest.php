<?php 

require_once 'isSessionSet.php';
require_once 'connection.php';

$_SESSION['examname']=mysqli_real_escape_string($con,$_POST['test']);
$username=$_SESSION['gateusername'];
$tableName=$username.".tests";

$selectQuery = "select activationStatus,noOfQuestions,subjectName from `".$tableName."` where testName = ?";
$stmt = mysqli_prepare($con, $selectQuery);
mysqli_stmt_bind_param($stmt,"s",$_SESSION['examname']);
mysqli_stmt_execute($stmt);
$result = $stmt->get_result();


while($row = $result->fetch_assoc())
{
	if($row['activationStatus'] == 1)
	{
		$_SESSION['noOfQuestions']=$row['noOfQuestions'];
		$_SESSION['fullNameOfSubject']=$row['subjectName'];
		$updateQuery = "update `".$tableName."` set statusOfExam = 1 where testName = '".$_SESSION['examname']."';";
		mysqli_query($con,$updateQuery) or die(mysqli_error($con));
		echo '{"error":"0"}';
	}
	else
	{
		echo '{"error":"1"}';
	}
}


mysqli_close($con);
?>