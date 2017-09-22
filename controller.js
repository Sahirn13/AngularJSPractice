'use strict';

var convertNumber = function ($scope, converter) {


	$scope.toInt = function(input) {
		$scope.intResult = converter.convertToInteger(input);
	};

	$scope.toRoman = function(input) {

	};

};

app.controller('convertNumber', convertNumber);