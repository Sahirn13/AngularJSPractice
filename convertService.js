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

var checkWriter = function() {
	var checkMap = new Map();
	checkMap.set(0, '');
	checkMap.set(1, 'one');
	checkMap.set(2, 'two');
	checkMap.set(3, 'three');
	checkMap.set(4, 'four');
	checkMap.set(5, 'five');
	checkMap.set(6, 'six');
	checkMap.set(7, 'seven');
	checkMap.set(8, 'eight');
	checkMap.set(9, 'nine');
	checkMap.set(10, 'ten');
	checkMap.set(11, 'eleven');
	checkMap.set(12, 'twelve');
	checkMap.set(13, 'thirteen');
	checkMap.set(14, 'fourteen');
	checkMap.set(15, 'fifteen');
	checkMap.set(16, 'sixteen');
	checkMap.set(17, 'seventeen');
	checkMap.set(18, 'eighteen');
	checkMap.set(19, 'nineteen');
	checkMap.set(20, 'twenty');
	checkMap.set(30, 'thirty');
	checkMap.set(40, 'forty');
	checkMap.set(50, 'fifty');
	checkMap.set(60, 'sixty');
	checkMap.set(70, 'seventy');
	checkMap.set(80, 'eighty');
	checkMap.set(90, 'ninety');
	checkMap.set(100, 'hundred');
	checkMap.set(1000, 'thousand');
	checkMap.set(1000000, 'million');
	checkMap.set(1000000000, 'billion');


	var work = function(input, step) {



		if(input < 20) {
			return checkMap.get(parseInt(input)) + '';
		} else if(input < 100) {
			var remainder = input % 10;
			return checkMap.get(input - remainder) + " " + checkMap.get(remainder);
		} else if(input < 1000){
			var remainder = input % 100;
			return checkMap.get((input - remainder) / 100) + " " + checkMap.get(100) + " " + work(remainder, 10);
		} else {
			while(step > input) {
				step = step / 1000;
			}
			var remainder = input % step;
			var leadingPlace = parseInt(input / step);
			var value = (input - remainder) / leadingPlace;
			var lowerStep = step/1000;
			return work(leadingPlace, lowerStep) + ' ' + checkMap.get(value) + ' ' + work(remainder, lowerStep);
		}
	};

	var convertCheckToEnglish = function (input) {
		return work(input, 1000000000, '');
	};

	return {
		convertCheck: convertCheckToEnglish
	};
};

app.factory('converter', converter);
app.factory('checkWriter', checkWriter);