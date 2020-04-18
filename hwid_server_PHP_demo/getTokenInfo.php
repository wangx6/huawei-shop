<?php

$url="https://api.cloud.huawei.com/rest.php?nsp_fmt=JSON&nsp_svc=huawei.oauth2.user.getTokenInfo"; //Request address

$param = array(
    "open_id" => "OPENID",
    "access_token" => "CV2v/YlQ7N4j0W2ygJi4KbZBdHTXAEILnVVt5EAM1azuuwxBivXWBrZuLArHR3k8EQ8300QfR0yg4fRgo0Sr3zbYLhY+n+LUPsDAd2xmbuLjprVdkwoCRPwgeM0D4v8zcjZmpx7fJNEDLKWIuolwEWNyJRI=",   
    );
	
    $ch = curl_init();
    $header[] = "Content-Type: application/x-www-form-urlencoded";
    $content = http_build_query($param, "", "&");
    $header[] = "Content-Length: ".strlen($content);  
    curl_setopt($ch, CURLOPT_HEADER, true);	 //setting output include header.
    curl_setopt($ch, CURLOPT_HTTPHEADER, $header); //setting the transferred content in the header.
    curl_setopt($ch, CURLOPT_URL, $url);
    curl_setopt($ch, CURLOPT_POST, count($param));
    curl_setopt($ch, CURLOPT_POSTFIELDS, $content);  
    curl_setopt($ch, CURLOPT_SSL_VERIFYPEER, FALSE); // check the source of the certificate or not.
    curl_setopt($ch, CURLOPT_SSL_VERIFYHOST, FALSE); // check the source of the certificate or not.
    curl_setopt($ch, CURLOPT_RETURNTRANSFER, true);  // setting not output all content if faild automatically.
    $response = curl_exec($ch);

    $header_size = curl_getinfo($ch, CURLINFO_HEADER_SIZE);
    $result = substr($response, $header_size);
    var_dump($result);
    curl_close($ch);
	
?>
