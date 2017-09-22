'use strict';

var converter = function() {

	var romanMap = new Map();
	var intArray = [1000, 900, 500, 400, 100, 90, 50, 40, 10, 9, 5, 4, 1];
	var romanArray = ['M', 'CM', 'D', 'CD', 'C', 'XC', 'L', 'XL', 'X', 'IX', 'V', 'IV', 'I'];
	romanMap.set("I", 1);
	romanMap.set("IV", 4);
	romanMap.set("V", 5);
	romanMap.set("IX", 9);
	romanMap.set("X", 10);
	romanMap.set("XL", 40);
	romanMap.set("L", 50);
	romanMap.set("XC", 90);
	romanMap.set("C", 100);
	romanMap.set("CD", 400);
	romanMap.set("D", 500);
	romanMap.set("CM", 900);
	romanMap.set("M", 1000);

	var convertToInt = function(input) {
		var result = 0;
		for(var i = 0; i < input.length; i++) {
			if(i < input.length - 1) {
				if(input.charAt(i) === 'C') {
					if(input.charAt(i + 1) === 'D' || input.charAt(i + 1) === 'M') {
						result += romanMap.get(input.charAt(i) + input.charAt(i + 1));
						i++;
					} else {
						result += romanMap.get(input.charAt(i));
					}
				} else if(input.charAt(i) === 'X') {
					if(input.charAt(i + 1) === 'C' || input.charAt(i + 1) === 'L') {
						result += romanMap.get(input.charAt(i) + input.charAt(i + 1));
						i++;
					} else {
						result += romanMap.get(input.charAt(i));
					}
				} else if(input.charAt(i) === 'I') {
					if(input.charAt(i + 1) === 'X' || input.charAt(i + 1) === 'V') {
						result += romanMap.get(input.charAt(i) + input.charAt(i + 1));
						i++;
					} else {
						result += romanMap.get(input.charAt(i));
					}
				} else {
					result += romanMap.get(input.charAt(i));
				}
			} else {
				result += romanMap.get(input.charAt(i));
			}
		}
		return result;
	};
	
	var convertToRoman = function (input) {
		return "test";
	};

	return {
		convertToInteger: convertToInt,
		convertToRoman: convertToRoman
	}

};

app.factory('converter', converter);