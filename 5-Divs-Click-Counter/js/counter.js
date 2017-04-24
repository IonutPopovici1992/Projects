(function() {
	'use strict';
	
	// var myDiv = document.querySelectorAll('main div');
	var buttons = document.querySelectorAll('main button');
	var counter = new Array(5);

	function handler(i) {
		return function() {
			counter[i] = counter[i] + 1;
			var span = buttons[i].parentNode.getElementsByClassName('counter');
			
			if(span.length) {
				span[0].innerHTML = "Clicks: " + counter[i];
			}

			// myDiv[i].innerHTML = "Clicks: " + counter[i];
		}
	}
	
	for (var i = 0; i < buttons.length; i++) {
		counter[i] = 0;
		buttons[i].addEventListener('click', handler(i));

		// myDiv[i].innerHTML = "Clicks: " + counter[i];
		// myDiv[i].addEventListener('click', handler(i));
	}
	
}() );
