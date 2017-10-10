'use strict';

console.log('App is running!');

var visibility = false;
var app = {
	title: "Visibility Toggle"
};

var toggleVisibility = function toggleVisibility() {
	visibility = !visibility; //setting to not will flip the visibility. no need to track. 
	render();
};

var render = function render() {
	var template = React.createElement(
		'div',
		null,
		React.createElement(
			'h1',
			null,
			app.title
		),
		React.createElement(
			'button',
			{ onClick: toggleVisibility },
			visibility ? 'Hide Details' : 'Show Details'
		),
		visibility && React.createElement(
			'div',
			null,
			React.createElement(
				'p',
				null,
				'Hey, these are some details you can see now!'
			)
		)
	);
	ReactDOM.render(template, appRoot);
};

var appRoot = document.getElementById('app');

render();
