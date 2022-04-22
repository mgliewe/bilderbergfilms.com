 $(function($){
	        
	var player = videojs('player', {
		controls: false,
		autoplay: true,
		loop: true
	}).ready(function() {
	});
	
	$('.overlay-button').appendTo($('#player'));
	
	
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
		var css=''
		$('a').each(function() {
			css += get_css($(this)) + '\n';
		});
		console.log(css);
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
    	
    	$('a').each(function() {
    		link=$(this);
    		link.attr('href', link.attr('href')+'#edit')
    	});
    }
 });