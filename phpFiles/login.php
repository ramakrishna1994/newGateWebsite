<?php 
session_start();
session_unset();

require_once 'connection.php';

$emailid=mysqli_real_escape_string($con,$_POST['loginemailid']);
$password=mysqli_real_escape_string($con,$_POST['password']);
$table="users";
$emailidexists = 0;
$passwordexists = 0;


$selectQuery="select firstname,lastname,password,imagename from users where emailid=?" ;
$stmt = mysqli_prepare($con, $selectQuery);
mysqli_stmt_bind_param($stmt, "s", $emailid);
mysqli_stmt_execute($stmt);
mysqli_stmt_bind_result($stmt, $firstname, $lastname,$tablepassword,$imagename);






	while(mysqli_stmt_fetch($stmt))
	{
		//echo crypt($password, $row['password']).'      ';
		//echo $row['password'];
		if($tablepassword==crypt($password, $tablepassword))
		{
			

			$_SESSION['gateusername']=$emailid;
			$_SESSION['gatefirstname']=$firstname;
			$_SESSION['gatelastname']=$lastname;
			$_SESSION['gateimage']=$imagename;
			$emailidexists = 1;
			$passwordexists = 1;
			echo '{"error":"0"}';
		}
		else 
		{
			$emailidexists = 1;
			$passwordexists = 0;
		}
	}
	
	if($emailidexists == 0 || $passwordexists == 0)
	{
		echo '{"error":"1"}';
	}
	
	

 mysqli_stmt_fetch($stmt);

mysqli_close($con);
?>