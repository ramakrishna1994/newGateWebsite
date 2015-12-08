<?php 

require_once 'isSessionSet.php';
require_once 'connection.php';

$currentpassword=mysqli_real_escape_string($con,$_POST['currentpassword']);
$newpassword=mysqli_real_escape_string($con,$_POST['newpassword']);
$table="users";

$selectQuery = "select password from users where emailid = '".$_SESSION['gateusername']."';";
$result = mysqli_query($con,$selectQuery) or die(mysqli_error($con));

while($row = mysqli_fetch_array($result))
{
	
	if($row['password'] != crypt($currentpassword,$row['password']))
	{
		echo '{"error":"1"}';
	}
	else{
		$hashed_password = crypt($newpassword);
		$updateQuery = "update users set password = '".$hashed_password."' where emailid = '".$_SESSION['gateusername']."';";
        mysqli_query($con,$updateQuery) or die(mysqli_error($con));	
        echo '{"error":"0"}';
	}
	
}

?>