 $(function($){
	        
	var player = videojs('player', {
		controls: true,
		autoplay: true
	}).ready(function() {
		player.one('ended', function() {
			window.history.back();
		});
	});
	
	$('.overlay-button').appendTo($('#player'));
	     
	
	// hotspot editor below
	
	function show_css(el) {
		var id=$(el).attr('id')
		var top=(parseFloat($(el).css('top')) / $('#player').height() * 100).toFixed(2);
		var left=(parseFloat($(el).css('left')) / $('#player').width() * 100).toFixed(2);
		var height=(parseFloat($(el).css('height')) / $('#player').height() * 100).toFixed(2);
		var width=(parseFloat($(el).css('width')) / $('#player').width() * 100).toFixed(2);
		
		console.log('#'+id+'{ top: '+top+'%; left:'+left+'%; width:'+width+'%; height:'+height+'%; }');
	}
	
	if (document.location.hash == '#edit') {
    	$('.overlay-button')
    	.css('background', '#fff')
    	.css('opacity', 0.6)
		.resizable({
    		stop: function(event,ui) {
    			show_css(this);
    		}		        			
		})
		.draggable({
			containment: 'parent',
			stop: function(event,ui) {
				show_css(this);
			}	
		});      
	}
	
});