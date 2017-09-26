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

var writeCheckController = function ($scope, checkWriter) {
	$scope.toEnglish = function (input) {
		$scope.englishResult = checkWriter.convertCheck(input);
	};
};

app.controller('convertNumber', convertNumber);
app.controller('checkController', writeCheckController);