<!DOCTYPE html>
<html>
<head>
	<title>Prueba Diseño</title>
 	<meta charset="utf-8">
 	<meta name="description" content="">
    <meta name="viewport" content="width=device-width, minimum-scale=1.0, maximum-scale=1.0" />
	<link rel="stylesheet" href="css/style.css">
	<link rel="stylesheet" href="css/responsive.css">
	<link rel="stylesheet" type="text/css" href="css/menunav.css" />
	<!-- Bootstrap -->
    <link rel="stylesheet" href="css/bootstrap.min.css">
</head>
<body>
	<nav>
		<div id="wrapper-nav" class="">
			<div class="nav-menu">
				<div class="nav-click">
					<ul>
						<li class="border-none-top"><a href="">OPEN</a></li>
					</ul>
				</div>
				<div id="nav-sub" class="nav-sub">
					<ul class="f-left">
						<li><a href="#" class="clickscroll">HOME</a></li>
					</ul>
					<ul class="f-right">
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
						<li class="border-none-bottom">
							<a href="#" id="button-submenu" class="">MENÚ</a>
								<div id="wrapper-sub" class="wrapper-sub hidden-nav submenu-top nav-border">
									<div class="wrapper-sub-inner">
									<ul>
										<h4>Tutoriales</h4>
										<li><a href="">Opción</a></li>
										<li><a href="">Opción</a></li>
										<li><a href="">Opción</a></li>
										<li><a href="">Opción</a></li>
									</ul>
									<ul>
										<h4>Opción</h4>
										<li><a href="">Opción</a></li>
										<li><a href="">Opción</a></li>
										<li><a href="">Opción</a></li>
										<li><a href="">Opción</a></li>
									</ul>
									<ul>
										<h4>Opción</h4>
										<li><a href="">Opción</a></li>
										<li><a href="">Opción</a></li>
										<li><a href="">Opción</a></li>
										<li><a href="">Opción</a></li>
									</ul>
								</div>
							</div>
						</li>
					</ul>
				</div>
			</div>
		</div>
	</nav>
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
			menuClickMovil.init();
			menuClickSubmenu.init();
		});
	</script>
</body>
</html>