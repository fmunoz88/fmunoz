<!DOCTYPE html>
<html>
<head>
	<title>Prueba Diseño</title>
 	<meta charset="utf-8">
 	<meta name="description" content="">
	<meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1">
	<link rel="stylesheet" href="css/style.css">
	<link rel="stylesheet" href="css/responsive.css">
	<!-- Bootstrap -->
    <link href="css/bootstrap.min.css" rel="stylesheet">

    <!-- HTML5 Shim and Respond.js IE8 support of HTML5 elements and media queries -->
    <!-- WARNING: Respond.js doesn't work if you view the page via file:// -->
    <!--[if lt IE 9]>
      <script src="https://oss.maxcdn.com/html5shiv/3.7.2/html5shiv.min.js"></script>
      <script src="https://oss.maxcdn.com/respond/1.4.2/respond.min.js"></script>
    <![endif]-->

	<!-- jQuery (necessary for Bootstrap's JavaScript plugins) -->
    <script src="https://ajax.googleapis.com/ajax/libs/jquery/1.11.1/jquery.min.js"></script>
    <!-- Include all compiled plugins (below), or include individual files as needed -->
    <script src="js/bootstrap.min.js"></script>
</head>
<body>
	<header id="navigation" class="navbar navbar-default navbar-fixed-top background-nav" role="navigation">
      <div class="container">
        <div class="navbar-header">
          <button type="button" class="navbar-toggle" data-toggle="collapse" data-target=".navbar-collapse">
            <span class="sr-only">Toggle navigation</span>
            <span class="icon-bar"></span>
            <span class="icon-bar"></span>
            <span class="icon-bar"></span>
          </button>
          <a class="navbar-brand logo" href="#">LOGO</a>
        </div>
        <nav class="nav-menu navbar-collapse collapse">
          <ul class="nav navbar-nav navbar-right">
            <li><a href="">MENÚ 1</a></li>
			<li><a href="">MENÚ 2</a></li>
			<li><a href="">MENÚ 3</a></li>
			<li><a href="">MENÚ 4</a></li>
			<li class="dropdown" >
				<a href="#" class="dropdown-toggle" data-toggle="dropdown">Dropdown <span class="caret"></span></a>
				<ul class="dropdown-menu background-nav" role="menu">
					<li><a href="">opcion 1</a></li>
					<li><a href="">opción 2</a></li>
					<li><a href="">opcion 3</a></li>
					<li><a href="">opcion 4</a></li>
				</ul>
            </li> 
          </ul>
        </div><!--/.nav-collapse -->
      </nav>
    </header>
	<section id="home" class="">
		<div id="home-inner">
		</div>
	</section>
	<section id="separator-1">
		<div class="container">
			<div class="f-left">
				<h2>BARRA IZQUIERDA</h2>
			</div>
			<div class="f-right">
				<h2>BARRA DERECHA</h2>
			</div>
		</div>
	</section>
	<section id="about">
		<div class="container">
			<h2>ABOUT</h2>
		</div>
	</section>
	<section id="portafolio"><h2>WORKS</h2></section>
	<section id="contact"><h2>CONTACT ME</h2></section>
	<section id="footer"></section>
</body>
</html>