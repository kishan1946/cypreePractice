/**
 * Try and Catch block
 */
// let a='kishan';
// if(a!=undefined){
//     console.log('This is not undefined');
// }else{
//     throw new Error('This is undefined');
// }

// try {
//     getData();
// } catch (error) {
//     console.log(error);
//     console.log(error.name);
//     console.log(error.message)
// }

/** 
 * Regular Expression 
 */
// let regExpLiteral=/kishan/;  //regular expression literal
// regExpLiteral=/kishan/g;  //g means global means its seearch whole the string and match with that particular word
// regExpLiteral=/KisHan/i;  //i means case insentitive
// console.log(regExpLiteral);
// console.log(regExpLiteral.source);

// // function to match exp
// let str="Hey kishan is learning javaScript and kishan is also know java language";
// let res=regExpLiteral.exec(str);
// console.log(res);
// console.log(res.input);
// console.log(res.index);
// res=regExpLiteral.exec(str);
// console.log(res); 

// // test() function -> it will return true/false
// res=regExpLiteral.test(str);
// console.log(res);

// // match() function -> it will return array of result or null
// res=str.match(regExpLiteral);
// console.log(res);

// // search() function -> return index of first match or -1
// res=str.search(regExpLiteral);
// console.log(res);

// // replace() function -> returns replace things after all the replacement
// // res=str.replaceAll(regExpLiteral,"abhinav");  //regExpLiteral should be global
// res=str.replace(regExpLiteral,"abhinav");
// console.log(res);
// if(regExpLiteral.test(str)){
//     console.log(`String "${str}" matches the expression ${regExpLiteral.source}`);
// }else{
//     console.log(`String "${str}" doesnot matches the expression ${regExpLiteral.source}`);
// }

/** 
 * meta character 
 */
// regExpLiteral=/^KisHan/i;  // ^ -> means starts with
// regExpLiteral=/language$/;  // $ -> means ends with
// regExpLiteral=/k.shan/i;  // . -> matches only one character
// regExpLiteral=/k*han/i;  // * -> matches single or more character
// regExpLiteral=/k\*shan/i;  // \* -> means matches * symbol in string
// regExpLiteral=/kii?shana?/i;  // ? -> means character is optional
// str="kishan is learning javaScript and kishan is also know java language";
// if(regExpLiteral.test(str)){
//     console.log(`String "${str}" matches the expression ${regExpLiteral.source}`);
// }else{
//     console.log(`String "${str}" doesnot matches the expression ${regExpLiteral.source}`);
// }

/** 
 * character sets 
*/
// regExpLiteral=/k[a-z]shan/i;  // [a-z 0-9 A-Z] -> means character matches b/w this range
// regExpLiteral=/k[iab]shan/i;  // [abc] -> means character must matches either a or b or c
// regExpLiteral=/k[^abc]shan/i;  // [^abc] -> means character doesnot matches either a or b or c
// regExpLiteral=/ki{2}shan/i;  // i{2} -> i can occurs exactly two times
// regExpLiteral=/ki{0,2}shan/i;  // i{0,2} -> i can occurs exactly matches in range b/w 0 to 2
// regExpLiteral=/(kishan){0,2}/i;  // (kishan){0,2} -> i can occurs exactly in range b/w 0 to 2
// str="kiishan kishankishan is learning javaScript and kishan is also know java language";
// if(regExpLiteral.test(str)){
//     console.log(`String "${str}" matches the expression ${regExpLiteral.source}`);
// }else{
//     console.log(`String "${str}" doesnot matches the expression ${regExpLiteral.source}`);
// }
/**
 * shorthand character classes
 */
//  regExpLiteral=/\wishan/i;  // \w -> means character can be one only eithet -, _, alphabet or number
//  regExpLiteral=/\w+an/i;  // \w+ -> means character can be one or more -, _, alphabet or number
//  regExpLiteral=/\Wkishan/i;  // \W -> means character can be any character except these -, _, alphabet or number
//  regExpLiteral=/\d9/;  // \d -> matches with digit
//  regExpLiteral=/\d9+/;  // \d+ -> matches more than one digit
//  regExpLiteral=/\D9/;  // \D -> matches with nondigit
//  regExpLiteral=/\s javaScript/i;  // \s -> matches whitespaces
//  regExpLiteral=/\S learning/i;  // \S -> matches nonwhitespaces
//  regExpLiteral=/is\b/  // \b -> word boundary
//  regExpLiteral=/k(?=i)/  //k(?=i) -> after k must be i
//  regExpLiteral=/k(?!s)/  //k(?!s) -> after k must not be s
//  str="kiishan kishankishan is learning  javaScript and kishan is also know java language more than k99 times";
//  res=regExpLiteral.exec(str);
//  console.log(res);
//  if(regExpLiteral.test(str)){
//      console.log(`String "${str}" matches the expression ${regExpLiteral.source}`);
//  }else{
//      console.log(`String "${str}" doesnot matches the expression ${regExpLiteral.source}`);
//  }

