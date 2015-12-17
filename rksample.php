<?php

if (($handle = fopen("rksample.txt", "r")) !== FALSE) 
{
    while (($data = fgetcsv($handle, 1000, "=")) !== FALSE) 
    {
       if($data[0]=='serialNo')
        	{
        		echo $data[0];
        		$seriaId=$data[1];
        	}
        	if($data[0]=='testId')
        	{
        		echo $data[0];
        		$testId=$data[1];
        	}
    }
    echo $testId.':'.$seriaId;
    fclose($handle);
    
    
    $string = 'UPDATE complexity_v2.codecov_testrun'
    		. 'SET table_loading_flag = 0,'
    		. 'TEST_NAME = (SELECT Test_Name'
    		. 'FROM TTC.Test_Runs'
    		. 'WHERE serial_number = 20152541)'
    		. 'WHERE test_id = '.$testId
    		. ' AND SERIAL_NUM = '.$seriaId.';';
    echo "<br>".$string;
    
    fopen("rksampleoutput.txt", "r");
    $file = 'rksampleoutput.txt';
// Open the file to get existing content
$current = file_get_contents($file);
// Append a new person to the file
$current .= "\n".$string;
// Write the contents back to the file
file_put_contents($file, $current);
}
?>