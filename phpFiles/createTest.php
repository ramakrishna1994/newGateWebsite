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
mysqli_stmt_bind_result($stmt, $activationStatus, $noOfQuestions,$subjectName);


while(mysqli_stmt_fetch($stmt))
{
	if($activationStatus == 1)
	{
		$_SESSION['noOfQuestions']=$noOfQuestions;
		$_SESSION['fullNameOfSubject']=$subjectName;
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