(function($) {

    $.fn.menu=function(options){

        // Définition des parametres par défaut
        var defauts = $.extend ({
            positionY: 'top',
            positionX: 'left',
            width: '300px',
            height: '100%',
            duration: 1500
        }, options);


        return this.animate({
            width: defauts.width,
            height: defauts.height,
            top: '0px',
            left: '0px'
        }, defauts.duration, function(){

        });

    };

})(jQuery);
