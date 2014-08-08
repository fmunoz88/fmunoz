<!DOCTYPE html>
<html>
<head>
	<title>Prueba Diseño</title>
 	<meta charset="utf-8">
 	<meta name="description" content="">
	<meta http-equiv="X-UA-Compatible" content="IE=edge" />
    <meta name="viewport" content="width=device-width, minimum-scale=1.0, maximum-scale=1.0" />
	<link rel="stylesheet" href="css/style.css">
	<link rel="stylesheet" href="css/responsive.css">
	<link rel="stylesheet" type="text/css" href="css/component.css" />
	<!-- Bootstrap -->
    <link href="css/bootstrap.min.css" rel="stylesheet">
</head>
<body>
	<div class="main">
	<div class="nav-movil">
		<p class="f-left">MENÚ</p>
		<p class="f-right button glyphicon glyphicon-align-justify"></p>
	</div>
	<nav id="cbp-hrmenu" class="cbp-hrmenu">
		<ul class="home f-left">
			<li>
				<a href="#" class="clickscroll">HOME</a>
			</li>
		</ul>
		<ul id="ul" class="f-right">
			<li>
				<a href="#about" class="clickscroll">ABOUT</a>
			</li>
			<li>
				<a href="#knowledge" class="clickscroll">KOWNLEDGE</a>
			</li>
			<li>
				<a href="#portafolio" class="clickscroll">WORKS</a>
			</li>
			<li>
				<a href="#contact" class="clickscroll">CONTACT ME</a>
			</li>
			<li>
				<a href="#">FREEWARE</a>
				<div class="cbp-hrsub">
					<div class="cbp-hrsub-inner"> 
						<div>
							<h4>Utilities</h4>
							<ul>
								<li><a href="#">Green Tree Pro</a></li>
								<li><a href="#">Wobbler 3.0</a></li>
								<li><a href="#">Coolkid</a></li>
							</ul>
							<h4>Education</h4>
							<ul>
								<li><a href="#">Learn Thai</a></li>
								<li><a href="#">Math Genius</a></li>
								<li><a href="#">Chemokid</a></li>
							</ul>
						</div>
						<div>
							<h4>Professionals</h4>
							<ul>
								<li><a href="#">Success 1.0</a></li>
								<li><a href="#">Moneymaker</a></li>
							</ul>
						</div>
						<div>
							<h4>Learning &amp; Games</h4>
							<ul>
								<li><a href="#">Catch the Bullet</a></li>
								<li><a href="#">Snoopydoo</a></li>
								<li><a href="#">Fallen Angel</a></li>
								<li><a href="#">Sui Maker</a></li>
								<li><a href="#">Wave Master</a></li>
								<li><a href="#">Golf Pro</a></li>
							</ul>
						</div>
					</div><!-- /cbp-hrsub-inner -->
				</div><!-- /cbp-hrsub -->
			</li>
		</ul>
	</nav>
	</div>
	<section id="home" class="">
		<div class="fullscreen">
			<div class="container home-page">
				<div class="inner-home">
					<h2>HOME</h2>
				</div>
			</div>
		</div>
	</section>
	<section class="separator">
		<div class="container separator-1">
			<div class="f-left">
				<h2>LEFT BAR</h2>
			</div>
			<div class="f-right">
				<h2>RIGHT BAR</h2>
			</div>
		</div>
	</section>
	<section id="about">
		<div class="container">
			<h2>ABOUT</h2>
		</div>
	</section>
	<section id="knowledge">
		<div class="container">
			<h2>KNOWLEDGE</h2>
		</div>
	</section>
	<section id="portafolio">
		<div class="container">
			<h2>WORKS</h2>
		</div>
	</section>
	<section class="separator">
		<div class="container">
			<div id="separator-2">
				<div class="f-left">
					<h2>LEFT LOGO</h2>
				</div>
				<div class="f-right">
					<h2>RIGHT LOGO</h2>
				</div>
			</div>
		</div>
	</section>
	<section id="contact">
		<div class="container">
			<h2>CONTACT ME</h2>
		</div>
	</section>
	<section id="footer">
		<div class="container">
			<div class="footer-page footer-left">
				<div class="footer-page-inner">
					<p>Título</p>
					<ul>
						<li>
							<a href="">opción 1</a>
						</li>
						<li>
							<a href="">opción 1</a>
						</li>
						<li>
							<a href="">opción 1</a>
						</li>
						<li>
							<a href="">opción 1</a>
						</li>
						<li>
							<a href="">opción 1</a>
						</li>
						<li>
							<a href="">opción 1</a>
						</li>
					</ul>
				</div>
			</div>
			<div class="footer-page footer-right">
				<h2>FOOTER</h2>
				<div class="footer-page-inner ">
					<div class="logo">
						<img src="images/HTML5-Logo.png" alt="logo" />
					</div>
				</div>
			</div>
		</div>
	</section>
    <!-- HTML5 Shim and Respond.js IE8 support of HTML5 elements and media queries -->
    <!-- WARNING: Respond.js doesn't work if you view the page via file:// -->
    <!--[if lt IE 9]>
      <script src="https://oss.maxcdn.com/html5shiv/3.7.2/html5shiv.min.js"></script>
      <script src="https://oss.maxcdn.com/respond/1.4.2/respond.min.js"></script>
    <![endif]-->

	<!-- jQuery (necessary for Bootstrap's JavaScript plugins) -->
     <script src="https://ajax.googleapis.com/ajax/libs/jquery/1.11.1/jquery.min.js"></script>
    <!-- Include all compiled plugins (below), or include individual files as needed -->
    <script src="js/main.js"></script>
    <script src="js/bootstrap.min.js"></script>
    <script src='js/jquery.scrollto.js'></script>
    <script>
		$(function() {
			cbpHorizontalMenu.init();
			menuClickMovil.init();
		});
	</script>
</body>
</html>