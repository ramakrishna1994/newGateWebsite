<?php
//echo phpinfo();

require_once 'isSessionSet.php';
require_once 'connection.php';




$emailid=mysqli_real_escape_string($con,$_POST['emailid']);
$feedback=mysqli_real_escape_string($con,$_POST['feedback']);

$to = "ramakrishnasaradhi@gmail.com";


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

$mail->Subject = "Gate Website Feedback";
$mail->Body = "
<html>
<head>
</head>
<body>
<div style='border:1px solid;border-color:purple;margin:10px;padding:10px'>
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Feedback&nbsp;from&nbsp;".$emailid."<br><br><br><br>
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<b><em>".$feedback."</em></b>
</div>
</body>
</html>
";



if(!$mail->send()) 
{
    echo "Mailer Error: " . $mail->ErrorInfo;
} 
else 
{
    echo "Message has been sent successfully";
}
?>