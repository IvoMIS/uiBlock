(function ($) {

	$.fn.uiBlock = function (action, options) {
		var settings = $.extend({}, $.fn.uiBlock.defaults, options);
		return this.each(function () {
			action = action || 'start';

			if (action === 'start') {
				if ($(this).children('.ui-block-overlay').length) return;
				if ($(this).children('.ui-block-element').length) return;
				if ($(this).css('position') !== 'relative') $(this).css('position', 'relative');
				$(this).append('<div class="ui-block-overlay"></div>');
				$(this).append('<div class="ui-block-element"><div class="ui-block-content">'+settings.text+'</div></div>');
				var height = ($(this).innerHeight() / 2) - 20;
				$(this).children('.ui-block-element').css('top', height);
				if ($.isFunction(settings.onStart)) {
					settings.onStart.call(this);
				}
			}

			if (action === 'stop') {
				$(this).children('.ui-block-overlay').remove();
				$(this).children('.ui-block-element').remove();
				if ($.isFunction(settings.onStop)) {
					settings.onStop.call(this);
				}
			}
		});
	};

	$.fn.uiBlock.defaults = {
		text: 'Loading...',
		onStart: null,
		onStop: null
	};

}(jQuery));
