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

var cbpHorizontalMenu = (function() {
 
    var $listItems = $( '#cbp-hrmenu > #ul > li' ),
        $menuItems = $listItems.children( 'a' ),
        $body = $( 'body' ),
        current = -1;
 
    function init() {
        $menuItems.on( 'click', open );
        $listItems.on( 'click', function( event ) { event.stopPropagation(); } );
    }
 
    function open( event ) {
 
        if( current !== -1 ) {
            $listItems.eq( current ).removeClass( 'cbp-hropen' );
        }
 
        var $item = $( event.currentTarget ).parent( 'li' ),
            idx = $item.index();
 
        if( current === idx ) {
            $item.removeClass( 'cbp-hropen' );
            current = -1;
        }
        else {
            $item.addClass( 'cbp-hropen' );
            current = idx;
            $body.off( 'click' ).on( 'click', close );
        }
 
        return false;
 
    }
 
    function close( event ) {
        $listItems.eq( current ).removeClass( 'cbp-hropen' );
        current = -1;
    }
 
    return { init : init };
 
})();

/* Click menú movil */
var menuClickMovil = (function() {
 
    var $listItems = $( '.main > .nav-movil' ),
        $menuClick = $listItems.children( 'p.button' ),
        $body = $( 'body' ),
        current = -1;
 
    function init() {
        $menuClick.on( 'click', open );
        $listItems.on( 'click', function( event ) { event.stopPropagation(); } );
    }
 
    function open( event ) {
 
        if( current !== -1 ) {
            $("nav").removeClass( 'visible-movil' );
        }

        var idx = -1;
 
        if( current !== idx ) {
            $("nav").removeClass( 'visible-movil' );
            current = -1;
        }
        else {
            $("nav").addClass( 'visible-movil' );
            current = 1;
            $body.off( 'click' ).on( 'click', close );
        }
 
        return false;
 
    }
 
    function close( event ) {
        $("nav").removeClass( 'visible-movil' );
        current = -1;
    }
 
    return { init : init };
 
})();

/* Función que al mover el scroll reconoce el width y si es menor a 991 no acta la clase de fixed-nav */

$(window).bind('scroll', function() {

    if($(window).width() > 991){
    
        var navHeight = $( window ).height() - 70;

        if ($(window).scrollTop() > navHeight) {
            $('nav').addClass('fixed-nav');
        }
        else {
            $('nav').removeClass('fixed-nav');
        }
        
    }else{

        $('nav').removeClass('fixed-nav');
        
    }

});