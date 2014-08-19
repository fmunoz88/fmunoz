/* -- Scroll -- */
$(document).ready(function(){
    /**
     * This part causes smooth scrolling using scrollto.js
     * We target all a tags inside the nav, and apply the scrollto.js to it.
     */
    $("nav a.clickscroll").click(function(evn){
        evn.preventDefault();
        $('html,body').scrollTo(this.hash, this.hash); 
    });
   
});

/* Open Click submenu */
var menuClickSubmenu = (function() {
 
    var $listItems = $( '.border-none-bottom' ),
        $menuClick = $listItems.children( 'a' ),
        $body = $( 'body' ),
        current = -1;
 
    function init() {
        $menuClick.on( 'click', open );
        $listItems.on( 'click', function( event ) { event.stopPropagation(); } );
    }
 
    function open( event ) {

        if( current !== -1 ) {
            $("#wrapper-sub").addClass( 'hidden-nav' );
        }

        var idx = -1;
 
        if( current !== idx ) {
            $("#wrapper-sub").addClass( 'hidden-nav' );
            current = -1;
        }
        else {
            $("#wrapper-sub").removeClass( 'hidden-nav' );
            current = 1;
            idx = 2;
            $body.off( 'click' ).on( 'click', close );
        }
 
        return false;
 
    }
 
    function close( event ) {
        $("#wrapper-sub").addClass( 'hidden-nav' );
        current = -1;
    }
 
    return { init : init };
 
})();


/* Click menú movil */
var menuClickMovil = (function() {
 
    var $listItems = $( '.nav-click > ul' ),
        $menuClick = $listItems.children( 'li' ),
        $body = $( 'body' ),
        current = -1;
 
    function init() {
        $menuClick.on( 'click', open );
        $listItems.on( 'click', function( event ) { event.stopPropagation(); } );
    }
 
    function open( event ) {
 
        if( current !== -1 ) {
            $("nav #wrapper-nav .nav-menu #nav-sub").removeClass( 'nav-open' );
        }

        var idx = -1;
 
        if( current !== idx ) {
            $("nav #wrapper-nav .nav-menu #nav-sub").removeClass( 'nav-open' );
            current = -1;
        }
        else {
            $("nav #wrapper-nav .nav-menu #nav-sub").addClass( 'nav-open' );
            current = 1;
            idx = 2;
            $body.off( 'click' ).on( 'click', close );
        }
 
        return false;
 
    }
 
    function close( event ) {
        $("nav #wrapper-nav .nav-menu #nav-sub").removeClass( 'nav-open' );
        current = -1;
    }
 
    return { init : init };
 
})();

/* Función que al mover el scroll reconoce el width y si es menor a 991 no acta la clase de fixed-nav */

$(window).bind('scroll', function() {

    if($(window).width() > 976){
    
        var navHeight = $( window ).height() - 70;

        if ($(window).scrollTop() > navHeight) { //Abajo
            $('nav').addClass('fixed-nav');
            $("#wrapper-sub").removeClass('submenu-top');
            $("#wrapper-sub").removeClass('nav-border');
            $("#wrapper-sub").addClass('nav-borderbottom');
        }
        else { //Arriba
            $('nav').removeClass('fixed-nav');
            $("#wrapper-sub").addClass('submenu-top');
            $("#wrapper-sub").addClass('nav-border');
            $("#wrapper-sub").removeClass('nav-borderbottom');
        }
        
    }else{
        $('nav').removeClass('fixed-nav');
    }

});