//function validateUsr(username) {
//    res = /^[a-z0-9_]{4,16}$/.test(username);
//    return res;
//}
//console.log( validateUsr(asddsa) );


function validateUsr(username) {
    let regexp = /\W/gi;  
    let forbiddenSymbols = username.match(regexp);
    if (forbiddenSymbols === null && (username.length > 3 &&  username.length < 17)) {
      return true;
    } else return false;
      
  }

  console.log(validateUsr('Hasd_12assssssasasasasasaasasasasas'));
