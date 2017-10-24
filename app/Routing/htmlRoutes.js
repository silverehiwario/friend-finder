const path = require('path');

module.exports = (app) => {
	app.get('/survey', (req, res) => {
		res.sendFile(path.join(__dirname, '/../public/survey.html'));
	});

	// home.html is default
	app.use((req, res) => {
		res.sendFile(path.join(__dirname, '/../public/home.html'));
	});
};
