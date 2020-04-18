<?php
 
$url="https://oauth-login.cloud.huawei.com/oauth2/v3/tokeninfo"; //Request address

$param = array(
    "id_token" => "eyJraWQiOiJiNDA1NTEyYzdkZTRhZDUyMWQ5MDg5MTgyMmQzMzNhNjNkZmMyNmY3OTQzNGY2N2QxMDM1NjJjZWYwY2NkMmQ5IiwidHlwIjoiSldUIiwiYWxnIjoiUlMyNTYifQ.eyJhdF9oYXNoIjoiUUNpYmFhaGxSR3BNUFU4NDZYRmRPZyIsImF1ZCI6IjMwMDAxOTc3NyIsInN1YiI6Ik1ESEpJSHV3ZnNzbUsxMFpLaWN1eEpqRnRDYWVJYWZSc2NqYThNMEpxSktwWlRnIiwiYXpwIjoiMzAwMDE5Nzc3IiwiaXNzIjoiaHR0cHM6Ly9hY2NvdW50cy5odWF3ZWkuY29tIiwiZXhwIjoxNTcxODA1MjE4LCJpYXQiOjE1NzE4MDE2MTh9.A17v3QWPeUwake60A4PQtm9ZOsMFxV49txpWkMfClWJWMGaJZMG03KKZrwdK3JPyRKQepM-AxDMfPxYh-MGmk8HGt55SY_57lymn8UwEfu_MNWT31xP9Scv-G-dQEZy46o6bHKxdKVJsDlBTgKQR2qmEgkBWAEuDZIKCso-iLY4jZw0lw1w9ovo-dG8ArP_sFtKctdsAo69mxPM3LvI_yTKw_RYhyBZeTCt-4FuKvc-K2WQauGyhNr80dPI39gk7L4XmFfzLlR4y_N3DERNJJ8PLUAmruhbnKQk_tfyOYkeoPwywLLiJ1iIdSPqzYzwkmclMlha7KoR32FWlRKRSlg",
   );

    $ch = curl_init();
    $header[] = "Content-Type: application/x-www-form-urlencoded";
    $content = http_build_query($param, "", "&");
    $header[] = "Content-Length: ".strlen($content);   
    curl_setopt($ch, CURLOPT_HEADER, true); //setting output include header
    curl_setopt($ch, CURLOPT_HTTPHEADER, $header); //setting the transferred content in the header
    curl_setopt($ch, CURLOPT_URL, $url);
    curl_setopt($ch, CURLOPT_POST, count($param));
    curl_setopt($ch, CURLOPT_POSTFIELDS, $content);
    curl_setopt($ch, CURLOPT_SSL_VERIFYPEER, FALSE); // check the source of the certificate or not
    curl_setopt($ch, CURLOPT_SSL_VERIFYHOST, FALSE); // check the source of the certificate or not
    curl_setopt($ch, CURLOPT_RETURNTRANSFER, true); // setting not automatically output content, even faild
    $response = curl_exec($ch);

    var_dump($param);

    $header_size = curl_getinfo($ch, CURLINFO_HEADER_SIZE);
    $result = substr($response, $header_size);
    var_dump($result);
    curl_close($ch);
?>
