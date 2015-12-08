<?php 
session_start();
session_unset();

require_once 'connection.php';

$emailid=mysqli_real_escape_string($con,$_POST['loginemailid']);
$password=mysqli_real_escape_string($con,$_POST['password']);
$table="users";



$selectQuery="select * from users where emailid='".$emailid."';" ;

$result=mysqli_query($con,$selectQuery) or die(mysqli_error($con));





	while($row=mysqli_fetch_array($result))
	{
		//echo crypt($password, $row['password']).'      ';
		//echo $row['password'];
		if($row['password']==crypt($password, $row['password']))
		{
			

			$_SESSION['gateusername']=$emailid;
			$_SESSION['gatefirstname']=$row['firstname'];
			$_SESSION['gatelastname']=$row['lastname'];
			$_SESSION['gateimage']=$row['imagename'];
			echo json_encode(array("error"=>"0"));
			
		}
		else
		{
		
			echo json_encode(array("error"=>"1"));
		}
		
		
		
	}
	
	



mysqli_close($con);
?>