(function() {
	"use strict";

	function RemoverChars(inputStr) {
		if(typeof(inputStr) === "string") {
			this._str = inputStr;
		} else {
			throw "Ошибка! Вводимые данные должны быть строкой.";
		}
	}
	RemoverChars.prototype.removeChars = function() {
        let result = this._str,
			matchArr = [],
			matchPattern = /[^\s,\.,\,,\:,\;,\!,\?]+/gi,
			firstWord = "";

		if(!/[^\s,\.,\,,\:,\;,\!,\?]+/i.test(result)) { return result; }
		matchArr = this._str.match(matchPattern);

		if(matchArr.length === 1) { return result; }
		firstWord = matchArr[0];

		for(let j=0; j<firstWord.length; j++) {
			let searchChar = new RegExp(firstWord[j], "i");
			let count = 0;
			for(let i=0; i<matchArr.length; i++) {
				if(searchChar.test(matchArr[i])) {
					count++;
				}
			}
			
			if(count === matchArr.length) {
				result = result.replace(new RegExp(firstWord[j], "gi"), "");
			}
			
		}

		return result;
	}

	let test = new RemoverChars("Чего-с изволите-с?Барин-с!");
	alert(test.removeChars());

	let test2 = new RemoverChars("!??слово!плов олово$$$!");
	alert(test2.removeChars());

	// Строка с одним словом
	let test3 = new RemoverChars("!!!ab!!");
	alert(test3.removeChars());

	// Строка без слов
	let test4 = new RemoverChars("!!!");
	alert(test4.removeChars());

	// Проверка на попытку создания объекта без передачи аргументов
	let test5 = new RemoverChars();
	alert(test5.removeChars());

})();