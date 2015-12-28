<?php 
	
	require_once 'connection.php';
	$resetpasswordhash = $_POST['p'];
	$password = $_POST['password'];
	
	
	$selectQuery1="select * from users where resetpasswordhash='".$resetpasswordhash."'" ;
	$result1 = mysqli_query($con,$selectQuery1) or die(mysqli_error($con));
	
	
	
	
		if(mysqli_num_rows($result1) > 0)
		{		
			
			
			$selectQuery2="select emailid,password from users where resetpasswordhash='".$resetpasswordhash."'";
			
			$result2 = mysqli_query($con,$selectQuery2) or die(mysqli_error($con));
			
		
			while($row2 = mysqli_fetch_array($result2))
			{
				if($row2['password']==crypt($password, $row2['password']))
					{
						echo '{"error":"2"}';
					}
				else
					{
						$resetpasswordhash = '';
						for($i=1;$i<=32;$i++)
						{
							$random = mt_rand(0,9);
							$resetpasswordhash.=$random;
						}
						$hashed_password = crypt($password);
						$updateQuery = "update users set password = '".$hashed_password."',resetpasswordhash = '".$resetpasswordhash."' where emailid = '".$row2['emailid']."'";
						mysqli_query($con,$updateQuery) or die(mysqli_error($con));
						echo '{"error":"0"}';		
					}
			}
		
		}
		else
		{
			echo '{"error":"1"}';
		}
	
	
	
	
?>