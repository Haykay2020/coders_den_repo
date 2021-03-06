// Exercise 1

// Solution 1
let challenge = '30 Days Of JavaScript';

// Solution 2
console.log(challenge); // 30 Days Of JavaScript

// Solution 3
console.log(challenge.length); // 21

// Solution 4
console.log(challenge.toLocaleUpperCase()); // 30 DAYS OF JAVASCRIPT

// Solution 5
console.log(challenge.toLowerCase()); // 30 days of javascript

// Solution 6
console.log(challenge.substring(0, 2)); // 30

// Solution 7
console.log(challenge.substring(3, ));  // Days Of JavaScript

// Solution 8
console.log(challenge.includes('Script')); //true

// Solution 9
console.log(challenge.split()); // [ '30 Days Of JavaScript' ]

// Solution 10
console.log(challenge.split(' ')); // [ '30', 'Days', 'Of', 'JavaScript' ]

// Solution 11
let techBrands = 'Facebook, Google, Microsoft, Apple, IBM, Oracle, Amazon';
let techCompany = techBrands.split(',');
console.log(techCompany) /* [ 'Facebook',
' Google',
' Microsoft',
' Apple',
' IBM',
' Oracle',
' Amazon' ] */

// Solution 12
console.log(challenge.replace('JavaScript', 'Python')); // 30 Days Of Python

// Solution 13
console.log(challenge.charAt(15)); // S

// Solution 14
console.log(challenge.charCodeAt(11)); // 74

// Solution 15
console.log(challenge.indexOf('a')); // 4

// Solution 16
console.log(challenge.lastIndexOf('a')); // 14

// Solution 17
let sentence = 'You cannot end a sentence with because because because is a conjunction'
console.log(sentence.indexOf('because')); // 31

// Solution 18
console.log(sentence.lastIndexOf('because')); // 47

// Solution 19
console.log(sentence.search('because')); // 31

// Solution 20
let whiteSpace = ' 30 Days Of JavaScript ';
console.log(whiteSpace.trim()); // '30 Days Of JavaScript'

// Solution 21
console.log(challenge.startsWith('30')); //true

// Solution 22
console.log(challenge.endsWith('Script')); //true

// Solution 23
let valueMatched = challenge.match("a");
console.log(valueMatched); /* [ 'a',
index: 4,
input: '30 Days Of JavaScript',
groups: undefined ] */

// Solution 24
let words_1 = "30 days of ";
let words_2 = "JavaScript";
let wordCombined = words_1.concat(words_2);
console.log(wordCombined); // 30 days of JavaScript

// Solution 25
let repeatWords = challenge;
console.log(repeatWords.repeat(2)); // 30 Days Of JavaScript30 Days Of JavaScript



// EXERCISE 2

// Solution 1
let theQuote = 'The quote \'There is no exercise better for the heart than reaching down and lifting people up.\' by John Holmes teaches us to help one another.'
console.log(theQuote); /* The quote 'There is no exercise better for the heart 
than reaching down and lifting people up.' 
by John Holmes teaches us to help one another.???
*/

// Solution 2
let motherTheraseQoute = 'Love is not patronizing and charity isn\'t about pity, it is about love. Charity and love are the same -- with charity you give love, so don\'t just give money but reach out your hand instead.'
console.log(motherTheraseQoute); /* Love is not patronizing and charity isn't about pity, it is about love.
 Charity and love are the same -- with charity you give love,
 so don't just give money but reach out your hand instead.???*/

// Solution 3
let str10 = '10'
console.log(typeof(str10)); // string
let numActual = Number(str10);
console.log(numActual) // 10


// Solution 4




// Solution 5
let str_1 = "python";
let str_2 = "jargon";
let str_3 = 'Baygon';
console.log(str_1.includes("on"), str_2.includes("on"), str_3.includes('on')); // true true true

// Solution 6
let jargon = 'I hope this course is not full of jargon.'
console.log(jargon.includes('jargon')); // true

//Solution 7
let randNum = Math.floor(Math.random() * 101);
console.log(randNum)

// Solution 8
let randNum2 = Math.floor(Math.random() * 51);
console.log(randNum2)

// Solution 9
let randNum3 = Math.floor(Math.random() * 256);
console.log(randNum3)

// Solution 10
let access = 'Javascript';
let wordAccess = access.length;
let randWord = Math.floor(Math.random() * wordAccess);
console.log(access[randWord]);

// Solution 11
let escapeChar = '1 1 1 1 1 \n2 1 2 4 8 \n3 1 3 9 27 \n4 1 4 16 64 \n5 1 5 25 125';
console.log(escapeChar) 
/*
1 1 1 1 1 ???
2 1 2 4 8 ???
3 1 3 9 27 ???
4 1 4 16 64 ???
5 1 5 25 125??? */

//Solution 12
let phrase = 'You cannot end a sentence with because because because is a conjunction';
let cutPhrase = phrase.substr(30, 25);
console.log(cutPhrase); //  because because because


// EXERCISE 3

// Solution 1
let lovePhrase = 'Love is the best thing in this world. Some found their love and some are still looking for their love.';
let wordCount = lovePhrase.match(/(love)/g).length;
console.log(wordCount); // 2

