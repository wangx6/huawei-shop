<?php

$url="https://oauth-login.cloud.huawei.com/oauth2/v3/token"; //Request address

$param = array(
    //set value as "authorization_code"；meaning Use Authorization Code to get Access Token and ID Token.
    "grant_type" => "authorization_code",
	//Appid of the application registered on the developer Alliance.
    "client_id" => "300019777",   
	//Public key assigned to the application which created in developer alliance,please refrencing the interface description for using.
    //"client_secret" => "701e47383e6a108f86c9c05325fa8e6e",  
	//Random number which used for verify the code,please refrencing the interface description for using.
    "code_verifier" => "fdabfc91-5fdf-44d8-8dd9-a30cb6237dc22c83a904-20d0-43fc-91b6-1b7f9be4d6d0", 
	//Callback url of application configuration.
    "redirect_uri" => "hms://www.example.com/oauth_redirect",
    "code"=>"CF2v/xk7xcd6niuy3V1FFQyt9qKZURHbmvrFSTlMKCL4lCjMpHAnQ+ViagJfArITJla2zgv0uUkKoWfuBwlddUHWH9vQPhzQKHzLBBrDc5oK4umEHmlfzzJAjo7GKmb6Pk+WWQ+wKaEmUxwjVnzyEQqseSa8nY+FMtPumdAj5uAJ9xFh6LbjsrIQAJHMegMQQCiMZeRyhURNafLDTqPaZGtD2tqFeganqd5wzYA31MeSWETd+7DyXL0W6EG5h0WpcoJUvzjl8Xc/Lysw1XKaQoPqo0PfKKBhgiAXEyPxDok="
    );



    $ch = curl_init();     
    $header[] = "Content-Type: application/x-www-form-urlencoded";
    $content = http_build_query($param, "", "&");


    $header[] = "Content-Length: ".strlen($content);
    curl_setopt($ch, CURLOPT_HEADER, true); //setting output include header.
    curl_setopt($ch, CURLOPT_HTTPHEADER, $header); //setting the transferred content in the header.
    curl_setopt($ch, CURLOPT_URL, $url);
    curl_setopt($ch, CURLOPT_POST, count($param));
    curl_setopt($ch, CURLOPT_POSTFIELDS, $content);
    curl_setopt($ch, CURLOPT_SSL_VERIFYPEER, FALSE); // check the source of the certificate or not.
    curl_setopt($ch, CURLOPT_SSL_VERIFYHOST, FALSE); // check the source of the certificate or not.
    curl_setopt($ch, CURLOPT_RETURNTRANSFER, true); // setting not output all content if faild automatically

    $response = curl_exec($ch);
    $header_size = curl_getinfo($ch, CURLINFO_HEADER_SIZE);
    $result = substr($response, $header_size);
    var_dump($result);
    curl_close($ch);

?>
