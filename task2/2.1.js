function RemoverChars(str) {

    if(typeof(str) === "string") {
        this._str = str;
    } else {
        throw "Ошибка! Вводимые данные должны быть строкой.";
    }

//   if(typeof(str) === "") {
//        this._str = str;
//    } else {
//        throw "Ошибка! Поле не может быть пустым.";
//    }


    if ((str.replace(/лов./g, "") == str) && (str.replace(/-с/g, "") == str)) {
        console.log(str);
    
      };

    if (str.replace(/-с/g, "") !== str) {
        console.log( str.replace(/-с/g, "") );
    
      };

    if (str.replace(/лов./g, "") !== str) {
        console.log( str.replace(/лов ?о/g, "") );
    
      };

}

RemoverChars("Чего-с изволите-с?Барин-с!");
RemoverChars("!??слово!плов олово$$$!");
RemoverChars("!!!");
//RemoverChars("");


//console.log( str.replace(/лов ?./g, "") );
