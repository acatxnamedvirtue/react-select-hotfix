
module.exports = function (html) {
	if (typeof document !== 'undefined') {
		return;
	}

	var jsdom = require('jsdom').JSDOM;
	global.document = new jsdom(html);
	global.window = global.document.defaultView;
	global.navigator = {
		userAgent: 'JSDOM'
	};
};
