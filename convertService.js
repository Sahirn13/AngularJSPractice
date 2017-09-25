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
		var result = '';
		if(input >= 1000) {
			var temp = parseInt(input/1000);
			for(var i = 0; i < temp; i++) {
				result += 'M';
				input -= 1000;
			}
		}
		if(input >= 900) {
			result += 'CM';
			input -= 900;
		}
		if(input >= 500) {
			result += 'D';
			input -= 500;
		}
		if(input >= 400) {
			result += 'CD';
			input -= 400;
		}
		if(input >= 100) {
			var temp = parseInt(input/100);
			for(var i = 0; i < temp; i++) {
				result += 'C';
				input -= 100;
			}
		}
		if(input >= 90) {
			result += 'XC';
			input -= 90;
		}
		if(input >= 50) {
			result += 'L';
			input -= 50;
		}
		if(input >= 40) {
			result += 'XL';
			input -= 40;
		}
		if(input >= 10) {
			var temp = parseInt(input/10);
			for(var i = 0; i < temp; i++) {
				result += 'X';
				input -= 10;
			}
		}
		if(input === 9) {
			result += 'IX';
			input -= 9;
		}
		if(input >= 5) {
			result += 'V';
			input -= 5;
		}
		if(input === 4) {
			result += 'IV';
			input -= 4;
		}
		if(input >= 1) {
			for(var i = 0; i < input; i++) {
				result += 'I';
			}
		}

		return result;
	};

	return {
		convertToInteger: convertToInt,
		convertToRoman: convertToRoman
	}

};

app.factory('converter', converter);