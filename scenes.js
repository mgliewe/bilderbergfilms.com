var scenes = {
	'logo': {
		name: 'intro',
		type: 'movie',
		clips: {
			'webm': '',
			'mp4' :''
		},
		controls: false, 
		loop: false,
		onfinish: function () {
			showClip('welcome');
		}
	},
	
	'welcome': {
		name: 'welcome',
		type: 'menu',
		clips: {
			'webm': '',
			'mp4': ''
		},
		controls: false,
		loop: true,
		buttons: {
			welcome: {
				top: '',
				left: '',
				height: '',
				width: '',
				onclick: function() {
					showClip('start');
				}
			}
		},		
	},
	
	'start': {
		name: 'start',
		type: 'menu',
		clips: {
			'webm': '',
			'mp4': ''
		},
		control: 'false',
		loop: 'true',
		buttons: {
			
		}		
	},
	
	
	
	
}