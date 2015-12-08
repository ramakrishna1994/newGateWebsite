<?php 
require_once 'isSessionSet.php';

session_destroy();
header('location:../home.html')

?>