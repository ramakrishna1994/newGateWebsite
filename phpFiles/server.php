<?php
	phpinfo();
	//phpinfo(INFO_MODULES);
	echo ini_get('display_errors');

if (!ini_get('display_errors')) {
    ini_set('display_errors', '1');
}

echo ini_get('display_errors');
?>