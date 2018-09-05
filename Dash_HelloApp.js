const dash_button = require('node-dash-button');
const execSync = require('child_process').execSync;
const dash = dash_button('38:f7:3d:25:31:db', null, null, 'all');

dash.on('detected', () => {
	const text ='こんにちわ世界'
	execSync('say ${text}');
	console.log(text);
});
