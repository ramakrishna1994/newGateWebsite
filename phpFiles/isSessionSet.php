<?php 
session_start();
if(!isset($_SESSION['gateusername']))
	header('location:home.html');
?>