function CalculateString (str) {
    
    let result = 0,
          searchPattern = /-?\d+(.\d+)?|[+,-,*,/,=]{1}/gi;
    let matchArr = str.match(searchPattern);

    if (matchArr[0] * 1 + "" !== "NaN") {
          result += matchArr[0] * 1;
        };

     for (let i = 0; i < matchArr.length; i++) {
          switch (matchArr[i]) {
            case "+":
              result += matchArr[i + 1] * 1;
              break;
            case "-":
              result -= matchArr[i + 1] * 1;
              break;
            case "*":
              result *= matchArr[i + 1] * 1;
              break;
            case "/":
              result /= matchArr[i + 1] * 1;
              break;
            case "=":
              break;
            default:
              continue;
              break;
          }
        }
      return result;
    }
    
    console.log('CalculateString', CalculateString("3.5 землекопа +4 поросенка * 10 рублей - 5.5 $ /5 человек ="))