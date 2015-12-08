<?php 
require_once 'isSessionSet.php';
require_once 'connection.php';

$emailid = $_SESSION['gateusername'];
$selectQuery = "select imagename from users where emailid = '".$emailid."';";
$result = mysqli_query($con,$selectQuery);



		

while($row = mysqli_fetch_array($result))
{
	echo '{"image":"'.$row['imagename'].'"}';
}


?>