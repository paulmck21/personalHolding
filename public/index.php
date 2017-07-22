<!DOCTYPE html>
<html lang="en">
<head>
	<meta charset="UTF-8">
	<meta name="viewport" content="width=device-width, initial-scale=1.0">
	<title>Paul McKenna</title>
	<link rel="stylesheet" href="./bundle/site.css">

	<link rel="apple-touch-icon" sizes="180x180" href="/assets/favicons/apple-touch-icon.png?v=A0RakO02pb">
	<link rel="icon" type="image/png" sizes="32x32" href="/assets/favicons/favicon-32x32.png?v=A0RakO02pb">
	<link rel="icon" type="image/png" sizes="16x16" href="/assets/favicons/favicon-16x16.png?v=A0RakO02pb">
	<link rel="manifest" href="/assets/favicons/manifest.json?v=A0RakO02pb">
	<link rel="mask-icon" href="/assets/favicons/safari-pinned-tab.svg?v=A0RakO02pb" color="#5bbad5">
	<link rel="shortcut icon" href="/assets/favicons/favicon.ico?v=A0RakO02pb">
	<meta name="msapplication-config" content="/assets/favicons/browserconfig.xml?v=A0RakO02pb">
	<meta name="theme-color" content="#ffffff">
</head>
<body class="home">
	<div class="row fixed fixed__top fixed__left nav">
		<h3 class="col-12 nav__content">Paul McKenna</h3>
	</div>
	<div class="row contents">
		<h1 class="col-12">Web Developer</h1>
		<h3 class="col-12">Site under construction</h3>
		<p class="col-12 submitted-message" id="submittedMessage">Thanks for getting in touch, I'll get back to you soon</p>
		<div class="col-12">
			<button class="contact" id="contact">Contact</button>
		</div>
	</div>

	<div class="row fixed fixed__top fixed__left contact-modal" id="contactModal">
		<div class="contact-modal__bg pos-absolute modal-close"></div>

		<div class="contact-modal__container pos-absolute pos-absolute__center-xy row">
			<div class="contact-modal__close modal-close pos-absolute">
			</div>
            <?php  
                if (isset($_POST['submit'])) {
                    $subject = $_POST['subject'];
                    $subject2 = "Message Received";
                    $message = $_POST['message'];
                    $email = $_POST['email'];
                    $name = $_POST['name'];
                    $to = 'paulmck21@gmail.com';
                    $from = 'From: contactForm - paulmck.co.uk';
                    $body = "Name: $name\nEmail: $email\nMessage: $message";
                    $body2 = "Hey $name,\n\nThanks for getting in touch. I'll get back to you as soon as I can.\n\nKind Regards\n\nPaul McKenna";
                    mail($to , $subject, $body, $from);
                    mail($email, $subject2, $body2);                        
                }
            ?>
                        
			<form class="contact-form" id="contactForm" action="" method="post">
				<input type="text" name="name" placeholder='name' required size="26" ><p></p>
				<input type="email" name="email" placeholder='email' required size="26" ><p></p>
				<input type="text" name="subject" placeholder='subject' required size="26" >
				<p>
				<textarea name="message" placeholder='message' cols="25" rows="3" ></textarea>
				<input name='submit' type="submit">
			</form>
<!-- 			<input type="text" placeholder="name">
			<input type="text" placeholder="email">
			<input type="text" placeholder="contact number">
			<input type="submit"> -->
		</div>
	</div>

	<script src="./bundle/app.js"></script>
</body>
</html>