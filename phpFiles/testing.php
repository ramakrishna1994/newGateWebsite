<?php
require_once('connection.php');

$select = "select * from rk";
$result=mysqli_query($con,$select);

while($row = mysqli_fetch_array($result))
{
	$val = $row['var'];
}
?>
<html>
<body>
<?php echo $val;?>
</body>
</html>