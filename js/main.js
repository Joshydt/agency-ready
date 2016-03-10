$(window).load(function(){

	// plugins here
(function($) {
    $.fn.invisible = function() {
        return this.each(function() {
            $(this).css("visibility", "hidden");
        });
    };
    $.fn.visible = function() {
        return this.each(function() {
            $(this).css("visibility", "visible");
        });
    };
}(jQuery));


	$(".answer").click(function(event) {
	  	$(this).parent().siblings('.a-block').slideDown(500, function() {
	  		$(this).show();
	  	});
	  	event.preventDefault();
	  	// $(this).parent(".content").invisible();
	  	$(this).parent().parent().addClass('active');
 	});

 	$(".close").click(function(event) {
	  	$(this).parent().slideUp(500, function() {
	  		$(this).hide();
	  	});
	  	event.preventDefault();
	  	
	  	$(this).parent().parent(".q-block").removeClass('active');
	  	
	  	// $(this).parent().siblings(".content").visible();

	  		
 	});

 	

});