;(function() {
	"use strict";

	function CalculateString(inputStr) {
		this._str = inputStr; 
        //Технически также возможно получить доступ к объекту без ключевого слова this, ссылаясь на него через внешнюю переменную
        //(в которой хранится ссылка на этот объект): …Но такой код будет ненадёжным.
		console.log("Введена строка: " + this._str);
	}
	CalculateString.prototype.calc = function() {
        // Свойство F.prototype (не путать с [[Prototype]]) устанавливает[[Prototype]] для новых объектов при вызове new F().
        // Добавляем свойство calc и присваиваем функцию
		let result = 0, //почему ноль?
			matchArr = [], 
			searchPattern = /\-?\d+(\.\d+)?|[\+,\-,\*,\/,\=]{1}/ig; // символьные классы
			// В следующем примере метод match() используется для поиска символов, за которыми следуют 1 или более цифр, за которыми следуют 0 или более раз группы из точки и цифры. 
			// Регулярное выражение включает флаг i и g, так что регистр букв игнорируется и возвращаются все совпадения.
			// почему "?"?

		matchArr = this._str.match(searchPattern); //зачем нижнее подчеркивание?

		if(matchArr[0]*1+"" !== "NaN") {
			result += matchArr[0]*1;
		}

		for(let i = 0; i < matchArr.length; i++) {
			switch(matchArr[i]) {
				//Конструкция switch заменяет собой сразу несколько if. Она представляет собой более наглядный способ сравнить выражение сразу с несколькими вариантами.
				case "+": result += matchArr[i+1] * 1; break;
                //let n = 2;
                //    n += 5; теперь n = 7 (работает как n = n + 5)
                //    n *= 2; теперь n = 14 (работает как n = n * 2)
				case "-": result -= matchArr[i+1] * 1; break;
				case "*": result *= matchArr[i+1] * 1; break;
				case "/": result /= matchArr[i+1] * 1; break;
				case "=": break;
				default: continue; break; //почему и continue и break?
			}
		}

		return result;
	}

	let test = new CalculateString("3.5 землекопа +4 поросенка *10 рублей - 5.5 $ /5 человек =");
	console.log(test.calc().toFixed(2));

	let test2 = new CalculateString("7+7*2=ёжик");
	console.log(test2.calc().toFixed(2));

	let test3 = new CalculateString("2 яблока + апельсин -2 жука + 4 куропатки = ");
	console.log(test3.calc().toFixed(2));

})();

