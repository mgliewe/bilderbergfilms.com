$(function($){

	/** check for ios; 
	 * @return 0 - not on ios
	 *         3 - ios3 or earlieer
	 *         3-7 - ios version
	 *         8 - ios o or later 
	 */
	function iOSversion() {
		if (/iPad|iPhone|iPod/.test(navigator.platform)) {
			if (!!window.indexedDB) { return 8; }
			if (!!window.SpeechSynthesisUtterance) { return 7; }
			if (!!window.webkitAudioContext) { return 6; }
			if (!!window.matchMedia) { return 5; }
			if (!!window.history && 'pushState' in window.history) { return 4; }
			return 3;
		}
		return 0;
	}	 
     
 	var player = videojs('player', {
 		controls: false,
 		autoplay: true
 	}).ready(function() {
 		
 		player.one('ended', function() {
 			player.src([
 			    { type: 'video/webm', src:'videos/willkommen_BilderbergfilmsWEB.webm'},
 				{ type: 'video/mp4',  src: 'videos/willkommen_BilderbergfilmsWEB.mp4'}
 			]);
 			player.loop(true);
 			$('.overlay-button').show();
 		})
 	});
 	
 	$('.overlay-button').appendTo($('#player')).hide();
 	
 	
 	// link hotspot editing script below, deactivate on production
 	
	function get_css(el) {
		var id=$(el).attr('id')
		var top=(parseFloat($(el).css('top')) / $('#player').height() * 100).toFixed(2);
		var left=(parseFloat($(el).css('left')) / $('#player').width() * 100).toFixed(2);
		var height=(parseFloat($(el).css('height')) / $('#player').height() * 100).toFixed(2);
		var width=(parseFloat($(el).css('width')) / $('#player').width() * 100).toFixed(2);
		
		return ('#'+id+' { top: '+top+'%; left:'+left+'%; width:'+width+'%; height:'+height+'%; }');
	}
	
	function show_css(el) {
		console.log(get_css(el));
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