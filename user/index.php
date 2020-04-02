<!DOCTYPE html>
<html>
<head>
    <meta charset="utf-8">
    <meta name="viewport" content="width=device-width, initial-scale=1, shrink-to-fit=no,maximum-scale=1.0, user-scalable=no">
    <!-- <meta name="google-signin-client_id" content="984123411461-m9tq0sdbljungjsd0o27hh5tbkpuvpll.apps.googleusercontent.com"> -->
    <title>Home | Huawei Shop</title>
    <link href="https://fonts.googleapis.com/css?family=Montserrat:200,500,700&display=swap" rel="stylesheet">
    <link rel="stylesheet" href="css/ionicons-2.0.1/css/ionicons.min.css">
    <link rel="stylesheet" href="css/index.css">
    <!-- <link rel="apple-touch-icon" sizes="128x128" href="./img/home-screen.png"> -->
    <meta class="yh-theme" name="theme-color" content="#fff" />
</head>

<body ng-app="huawei-shop">
	<div>
		<main ng-view></main>
		<yh-warning></yh-warning>
		<yh-comfirmation></yh-comfirmation>
		<yh-payment-success></yh-payment-success>
		<yh-spinner></yh-spinner>
		<yh-copy-clipboard></yh-copy-clipboard>
	</div>
	
	<input id="rr-session-token" type="hidden" value="<?php echo $_SESSION['token']; ?>"/>
	<script src="./js/index-bundle.js"></script>
	
</body>
</html>