$(document).ready(function() {
	var icon = '<i class="fa fa-spin fa-cog" style="height: 20px;line-height: 21px;"></i> ';
	var text = 'Loading...';
	$.fn.uiBlock.defaults.text = icon + text;
	
	$('#page-block').click(function() {
		$('body').uiBlock();
		setTimeout(function(){
			$('body').uiBlock('stop');
		}, 2500);
	});
	
	$('#btn-block').click(function() {
		$('.panel-body').uiBlock();
	});
	
	$('#btn-unblock').click(function() {
		$('.panel-body').uiBlock('stop');
	});
	
	$('#btn-action').click(function() {
		var btn = $(this);
		var text = btn.text();
		btn.addClass('disabled');
		btn.text('Loading...');
		setTimeout(function(){
			btn.removeClass('disabled');
			btn.text(text);
		}, 1500);
	});
});
