var fs = require("fs");
var Handlebars = require("handlebars");

function render(resume) {
	var css = fs.readFileSync(__dirname + "/style.css", "utf-8");
	var template = fs.readFileSync(__dirname + "/resume.hbs", "utf-8");
	var months = ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'];

	// Fixed date helper - parses YYYY-MM format correctly
	Handlebars.registerHelper('date', function(date) {
		if (!date) return '';
		// Handle YYYY-MM format by parsing directly
		var parts = date.split('-');
		var year = parseInt(parts[0], 10);
		var month = parts[1] ? parseInt(parts[1], 10) - 1 : 0;
		return months[month] + ' ' + year;
	});

	Handlebars.registerHelper('paragraphSplit', function(plaintext) {
		var i, output = '',
			lines = plaintext.split(/\r\n|\r|\n/g);
		for (i = 0; i < lines.length; i++) {
			if(lines[i]) {
				output += '<p>' + lines[i] + '</p>';
			}
		}
		return new Handlebars.SafeString(output);
	});

	return Handlebars.compile(template)({
		css: css,
		resume: resume
	});
}

module.exports = {
	render: render
};
