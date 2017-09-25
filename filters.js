'use strict';

/*
var filters = function () {
	var customLowerCase = function (input) {
		return input.toLowerCase();
	};

	var customUpperCase = function (input) {
		return input.toUpperCase();
	};

	return {
		function1: customLowerCase,
		function2: customUpperCase
	}
};
*/

var filters = function () {
	var function1 = function (input) {
		if(typeof input === 'string') {
			return input.toLowerCase();
		} else {
			return '';
		}
	};

	return function1;
};



app.filter('customLowerCase', filters);