<?php

$dir = "config/";

// Open a directory, and read its contents
if (is_dir($dir)){
	if ($dh = opendir($dir)){
		while (($file = readdir($dh)) !== false){
			echo "filename:" . $file . "<br>";
			
			
			
			/*********************************************/
			

			$testId=0;
			$seriaId=0;
			if (($handle = fopen("config/".$file, "r")) !== FALSE)
			{
				echo 'entered';
				while (($data = fgetcsv($handle,"","=")) !== FALSE)
				{
					echo $data[0];
					if($data[0]=='serialNo')
					{
						echo $data[0];
						$seriaId=$data[1];
					}
					if($data[0]=='testId')
					{
						//echo $data[0];
						$testId=$data[1];
					}
				}
				//echo $testId.':'.$seriaId;
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
				$file1 = 'rksampleoutput.txt';
				// Open the file to get existing content
				$current = file_get_contents($file1);
				// Append a new person to the file
				$current .= "\n".$string;
				// Write the contents back to the file
			   	file_put_contents($file1, $current);
			   	$current = "";
														
			}
			
			/*********************************************/
		}
		closedir($dh);
	}
}

?>