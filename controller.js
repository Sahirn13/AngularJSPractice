'use strict';

var convertNumber = function ($scope, converter) {


	$scope.toInt = function(input) {
		$scope.intResult = converter.convertToInteger(input);
	};

	$scope.toRoman = function(input) {
		$scope.romanResult = converter.convertToRoman(input);
	};

	$scope.clear = function () {
		$scope.input = '';
		$scope.intResult = '';
		$scope.romanResult = '';
	};

};

app.controller('convertNumber', convertNumber);