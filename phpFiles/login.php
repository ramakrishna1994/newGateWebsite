<?php 
session_start();
session_unset();

require_once 'connection.php';

$emailid=mysqli_real_escape_string($con,$_POST['loginemailid']);
$password=mysqli_real_escape_string($con,$_POST['password']);
$table="users";
$emailidexists = 0;
$passwordexists = 0;


$selectQuery="select * from users where emailid=?" ;
$stmt = mysqli_prepare($con, $selectQuery);
mysqli_stmt_bind_param($stmt, "s", $emailid);
$stmt->execute();
$result = $stmt->get_result();






	while($row = $result->fetch_assoc())
	{
		//echo crypt($password, $row['password']).'      ';
		//echo $row['password'];
		if($row['password']==crypt($password, $row['password']))
		{
			

			$_SESSION['gateusername']=$emailid;
			$_SESSION['gatefirstname']=$row['firstname'];
			$_SESSION['gatelastname']=$row['lastname'];
			$_SESSION['gateimage']=$row['imagename'];
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
	
	



mysqli_close($con);
?>