<?php


require_once 'connection.php';




session_start();
$emailid=mysqli_real_escape_string($con,$_POST['registrationemailid']);



$random = mt_rand(100000,999999);
$_SESSION['code'] = $random;


echo $_SESSION['code'];


$to = $emailid;



$mail = new PHPMailer;

//Enable SMTP debugging. 
//$mail->SMTPDebug = 3;                               
//Set PHPMailer to use SMTP.
$mail->isSMTP();            
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

$mail->addAddress($to);

$mail->isHTML(true);

$mail->Subject = "Gate Verification Code";
$mail->Body = "
<html>
<head>
</head>
<body>

<div style='border:1px solid;border-color:purple;margin:10px;padding:10px'>
<b><em>
Hi,<br><br>
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Welcome to the GoodCreed Society.Thank you for registering with the Gate test series.<br>
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Please use the below code to verify your account.<br><br>
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Verification Code&nbsp;:&nbsp;<font size='3px'>".$random."</font>
<br><br>
Thanks and Regards,<br>
Saradhi(Founder of GoodCreed).</b></em>
</div>
</body>
</html>
";



if(!$mail->send()) 
{
    //echo "Mailer Error: " . $mail->ErrorInfo;
} 
else 
{
 //   echo "Message has been sent successfully";
}

?>