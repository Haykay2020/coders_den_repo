// Math Object

const PI = Math.PI
console.log(PI)

//rounding to the closest number
// if above .5 up if less 0.5 down rounding

console.log(Math.round(PI)) // round values to the nearest number
console.log(Math.round(10.92))
console.log(Math.floor(PI)) //rounding down
console.log(Math.ceil(PI))  //rounding up
console.log(Math.min(-6, 3, 25, 71, 7)) // returns the minimum value
console.log(Math.max(-6, 3, 25, 71, 7)) // returns the maximum value

const randNum = Math.random() // creates random number btw 0 to 0.9999999
console.log(randNum) 

const num = Math.floor(Math.random () * 11)
console.log(num)

console.log(Math.abs(-30)) // absolute value
console.log(Math.sqrt(2)) // Square root
console.log(Math.pow(3, 2)) // Power base
console.log(Math.E) //Euler's number

// Logarithms
console.log(Math.log(2))
console.log(Math.log(10))

// Returns the natural logarithm of 2 and 10 respectively
console.log(Math.LN2)
console.log(Math.LN10)

// Trigonometry
console.log(Math.sin(9))
console.log(Math.cos(60))


// STRINGS

let space = ' '
let space2 = ""
console.log(space) // an empty space string
console.log(space2) //an empty string

let firstName1 = 'Abdulhakeem'
let lastName1 = 'Adisco'
let county1 = 'South Africa'
let city = 'Pretoria'
let languageSkill = 'JavaScript'
let job = 'Developer'
let quote = "The saying, 'Seeing is Believing' is not correct in 2020."
let quoteWithBackTick = `The saying. 'Seeing is Believing' is not correct in 2020.`

console.log(quoteWithBackTick)

// String Concatenation
let fullName = firstName1 + space + lastName1
console.log(fullName)

// Long literal strings
/* A string could be a single character or paragraph or a page.
 If the string length is too big it does not fit in one line. 
 We can use the backslash character (\) at the end of each line 
 to indicate that the string will continue on the next line. */

const paragraph = "My name is Asabeneh Yetayeh. I live in Finland, Helsinki.\
I am a teacher and I love teaching. I teach HTML, CSS, JavaScript, React, Redux, \
Node.js, Python, Data Analysis and D3.js for anyone who is interested to learn. \
In the end of 2019, I was thinking to expand my teaching and to reach \
to global audience and I started a Python challenge from November 20 - December 19.\
It was one of the most rewarding and inspiring experience.\
Now, we are in 2020. I am enjoying preparing the 30DaysOfJavaScript challenge and \
I hope you are enjoying too."

console.log(paragraph)

// Escape sequences in string

/* \n: new line
\t: Tab, means 8 spaces
\\: Back slash
\': Single quote (')
\": Double quote (")
*/

console.log('I hope everyone is enjoying the 30 Days Of JavaScript challenge.\nDo you ?') // line break
console.log('Days\tTopics\tExercises')
console.log('Day 1\t3\t5')
console.log('Day 2\t3\t5')
console.log('Day 3\t3\t5')
console.log('Day 4\t3\t5')
console.log('This is a backslash  symbol (\\)') // To write a backslash
console.log('In every programming language it starts with \"Hello, World!\"')
console.log("In every programming language it starts with \'Hello, World!\'")
console.log('The saying \'Seeing is Believing\' isn\'t correct in 2020')


