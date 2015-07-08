(function ( $ ) {

    /*
    Plugin: CustomBorder
    author: dtasic@gmail.com
    */

    $.fn.customBorder = function (options) {

        'use strict';

        var currentelem = 1;

        this.each(function(){

          var currentid = '';
          var element = $(this);
          var currbgcolor = element.css('background-color');
          if (currbgcolor === 'rgba(0, 0, 0, 0)' || currbgcolor === 'transparent') {
            currbgcolor = '#FFFFFF';
          }
          var settings = $.extend({
              borderSize: '5px',
              borderColor: '',
              borderBgImg: '',
              backgroundColor: currbgcolor,
              innerPadding: ''
          }, options );

          if (element.attr('id') !== undefined) {
            currentid = element.attr('id');
          } else {
            currentid = currentelem;
          }
          var curmargintop = element.css('marginTop');
          var curmarginright = element.css('marginRight');
          var curmarginbottom = element.css('marginBottom');
          var curmarginleft = element.css('marginleft');
          element.css('marginTop', '0' ).css('marginRight', '0' ).css('marginBottom', '0' ).css('marginLeft', '0' );
          element.wrap( '<div id="custom-border-outer-'+currentid+'" data-custom-border></div>' );
          element.parent().css('padding', settings.borderSize ).css('marginTop', curmargintop ).css('marginRight', curmarginright ).css('marginBottom', curmarginbottom ).css('marginLeft', curmarginleft ).css('background', settings.borderColor+' url('+settings.borderBgImg+')' );
          element.css('background-color', settings.backgroundColor );
          if (settings.innerPadding !== '') { element.css('padding', settings.innerPadding); }

          currentelem++;

          return this;

        });

    };

}(jQuery));
