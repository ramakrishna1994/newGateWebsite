<?php 
	
	require_once 'connection.php';
	$resetpasswordhash = $_POST['p'];
	$password = $_POST['password'];
	
	$selectQuery="select * from users where resetpasswordhash=?" ;
	$stmt = mysqli_prepare($con, $selectQuery);
	mysqli_stmt_bind_param($stmt, "s", $resetpasswordhash);
	$stmt->execute();
	$stmt->store_result();
	//echo mysqli_stmt_num_rows($stmt);
	
	
	if(mysqli_stmt_num_rows($stmt) > 0)
	{		
			
			$selectQuery="select * from users where resetpasswordhash=?" ;
			$stmt = mysqli_prepare($con, $selectQuery);
			mysqli_stmt_bind_param($stmt, "s", $resetpasswordhash);
			$stmt->execute();
			$result = $stmt->get_result();
		
			while($row = $result->fetch_assoc())
			{
				if($row['password']==crypt($password, $row['password']))
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
						$updateQuery = "update users set password = '".$hashed_password."',resetpasswordhash = '".$resetpasswordhash."' where emailid = '".$row['emailid']."'";
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