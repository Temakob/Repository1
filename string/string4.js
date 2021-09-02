let isIsogram = (str) => str.split("").every((c, i) => str.indexOf(c) == i);

console.log(isIsogram("thomas"));
console.log(isIsogram("moses"));
console.log(isIsogram("hello"));
console.log(isIsogram("world"));
console.log(isIsogram("a b c"));