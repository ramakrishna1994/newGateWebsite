<?php 
require_once 'connection.php';



$emailid = mysqli_real_escape_string($con,$_POST['emailid']);
$selectQuery = "select resetpasswordhash,firstname,lastname from users where emailid = '".$emailid."';";

$result = mysqli_query($con,$selectQuery) or die(mysqli_error($con));

if(mysqli_num_rows($result)==0)
{
	echo '{"error":"1"}';
}
else 
{
	
	while($row = mysqli_fetch_array($result))
	{
		$resetpasswordhash = $row['resetpasswordhash'];
		$firstname = $row['firstname'];
		
	}
       echo '{"error":"0"}';
       //echo 'http://localhost/resetpassword.php?p='.$resetpasswordhash;
	sendMail($resetpasswordhash,$emailid,$firstname);
	
	
}


	function sendMail($password,$emailid,$firstname)
	{
	
		$mail = new PHPMailer;

		//Enable SMTP debugging. 
		//$mail->SMTPDebug = 3;                               
		//Set PHPMailer to use SMTP.
		//$mail->isSMTP();            
		//Set SMTP host name                          
		$mail->Host = "mail.goodcreed.in";
		//Set this to true if SMTP host requires authentication to send email
		$mail->SMTPAuth = true;                          
		//Provide username and password     
		$mail->Username = "admin@goodcreed.in";                 
		$mail->Password = "Saradhi@123";                           
		//If SMTP requires TLS encryption then set it
                        
		//Set TCP port to connect to 
		$mail->Port = 25;                                   

		$mail->From = "admin@goodcreed.in";
		$mail->FromName = "Admin";

		$mail->addAddress($emailid);

		$mail->isHTML(true);

		$mail->Subject = "Gate Password Reset";
		$mail->Body = "<html><head></head><body>
				<div style='border:1px solid;border-color:purple;margin:10px;padding:10px'><font color='black'>
				<b><em>
				Hi&nbsp;".$firstname.",<br><br>
				&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Please click on the below link to reset your password.<br><br>
				&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;http://gate2016.goodcreed.in/resetpassword.php?p=".$password."<br><br>
				&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;If you are not the recipient of this mail, please ignore it.
				<br><br>
				Thanks and Regards,<br>
				Saradhi(Founder of GoodCreed).</b></em></font>
				</div>
				</body>
				</html>";



		if(!$mail->send()) 
		{
			  //  echo "Mailer Error: " . $mail->ErrorInfo;
		}	 
		else 
		{
    		//echo "Message has been sent successfully";
		}

	}
?>