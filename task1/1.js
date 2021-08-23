;(function() {
	"use strict";

	function CalculateString(inputStr) {
		this._str = inputStr;
		alert("Введена строка: " + this._str);
	}
	CalculateString.prototype.calc = function() {
		let result = 0,
			matchArr = [],
			searchPattern = /\-?\d+(\.\d+)?|[\+,\-,\*,\/,\=]{1}/ig;

		matchArr = this._str.match(searchPattern);

		if(matchArr[0]*1+"" !== "NaN") {
			result += matchArr[0]*1;
		}

		for(let i = 0; i < matchArr.length; i++) {
			switch(matchArr[i]) {
				case "+": result += matchArr[i+1] * 1; break;
				case "-": result -= matchArr[i+1] * 1; break;
				case "*": result *= matchArr[i+1] * 1; break;
				case "/": result /= matchArr[i+1] * 1; break;
				case "=": break;
				default: continue; break;
			}
		}

		return result;
	}

	let test = new CalculateString("3.5 землекопа +4 поросенка *10 рублей - 5.5 $ /5 человек =");
	alert(test.calc().toFixed(2));

	let test2 = new CalculateString("7+7*2=ёжик");
	alert(test2.calc().toFixed(2));

	let test3 = new CalculateString("2 яблока + апельсин -2 жука + 4 куропатки = ");
	alert(test3.calc().toFixed(2));

})();

