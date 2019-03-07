<?php

	// Change the email address
	$to = 'lisawcrawford@gmail.com';

	// Change the subject line
	$subject = 'Contact Form Submission';

	$fullName = $_POST['fullName'];
	$email = $_POST['email'];
	$message = $_POST['message'];

	$body = <<<EOF
	<html>

	<head>

    <meta charset="utf-8">

	</head>

	<body style="margin: 0; font-family: sans-serif; font-size: 14px;">

	  <p style="font-weight: 600;">Full Name:</p>
	  <p>$fullName</p>
	  <p style="font-weight: 600;">Email Address:</p>
	  <p>$email</p>
	  <p style="font-weight: 600;">Message:</p>
	  <p style="line-height: 20px;">$message</p>

	</body>

	</html>
EOF;

	$headers = "From: $email\r\n";
	$headers .= "Reply-To: $email\r\n";
	$headers .= "Content-Type: text/html; charset=UTF-8\r\n";

	if($_POST){
		mail($to, $subject, $body, $headers);
		header('Location: ../thank-you.html');
	}

?>
