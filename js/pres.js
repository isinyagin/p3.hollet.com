$(function() {
    var currentSlide = 0;
    var li_bullets = true;

    $(function(){
        $(document).keyup(function(e) {
             if (e.keyCode == 39 || e.keyCode == 40 || e.keyCode == 32) 
                nextSlide();
             else if (e.keyCode == 37 || e.keyCode == 38) 
                prevSlide();
        });
        
        /* mobile support for swiping */
        $('.slides').swipe({
            swipe:function(event, direction, distance, duration, fingerCount) {
                switch(direction) {
                    case "left": nextSlide(); break;
                    case "right": prevSlide(); break;	
                }
            }
        });
        
        /* double click */
        $(document).dblclick(function(){
                window.fullScreenApi.requestFullScreen(document.body);
        });
        
        initSlides();
    });

    function initSlides(){
        $('section').eq(currentSlide).addClass('active');
    }

    function nextSlide(){
        /* if there are bullets, step through them and return */
        if (li_bullets && $('section.active li:hidden').length) {
            $('section.active li:hidden').first().fadeIn();
            return
        }
        gotoSlide(++currentSlide);
    }

    function prevSlide(){
        gotoSlide(--currentSlide);
        if (li_bullets) $('section.active li').show();  /* show previously shown bullets */
    }

    function gotoSlide(n){
        if (n > -1 && n < $('section').length) {
            currentSlide = n;
            $('section').removeClass('active').eq(currentSlide).addClass('active');
        }
        if (li_bullets) $('section.active li').hide();  /* hide all bullets on entering the slide */
    }

}());  

/**
  Source: http://johndyer.name/native-fullscreen-javascript-api-plus-jquery-plugin/
  Native FullScreen JavaScript API
*/
(function() {
	var 
		fullScreenApi = { 
			supportsFullScreen: false,
			isFullScreen: function() { return false; }, 
			requestFullScreen: function() {}, 
			cancelFullScreen: function() {},
			fullScreenEventName: '',
			prefix: ''
		},
		browserPrefixes = 'webkit moz o ms khtml'.split(' ');
	
	// check for native support
	if (typeof document.cancelFullScreen != 'undefined') {
		fullScreenApi.supportsFullScreen = true;
	} else {	 
		// check for fullscreen support by vendor prefix
		for (var i = 0, il = browserPrefixes.length; i < il; i++ ) {
			fullScreenApi.prefix = browserPrefixes[i];
			if (typeof document[fullScreenApi.prefix + 'CancelFullScreen' ] != 'undefined' ) {
				fullScreenApi.supportsFullScreen = true;
				break;
			}
		}
	}
	
	// update methods to do something useful
	if (fullScreenApi.supportsFullScreen) {
		fullScreenApi.fullScreenEventName = fullScreenApi.prefix + 'fullscreenchange';
		
		fullScreenApi.isFullScreen = function() {
			switch (this.prefix) {	
				case '':
					return document.fullScreen;
				case 'webkit':
					return document.webkitIsFullScreen;
				default:
					return document[this.prefix + 'FullScreen'];
			}
		}
		fullScreenApi.requestFullScreen = function(el) {
			return (this.prefix === '') ? el.requestFullScreen() : el[this.prefix + 'RequestFullScreen']();
		}
		fullScreenApi.cancelFullScreen = function(el) {
			return (this.prefix === '') ? document.cancelFullScreen() : document[this.prefix + 'CancelFullScreen']();
		}		
	}

	// jQuery plugin
	if (typeof jQuery != 'undefined') {
		jQuery.fn.requestFullScreen = function() {
	
			return this.each(function() {
				var el = jQuery(this);
				if (fullScreenApi.supportsFullScreen) {
					fullScreenApi.requestFullScreen(el);
				}
			});
		};
	}

	// export api
	window.fullScreenApi = fullScreenApi;	
})();
