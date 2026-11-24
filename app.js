
// STRING
// NUMBERS
// BOOLEAN
// NULL
// NULL
// UNDEFINED
// let someVariable;
// 
let someVariable;
let userName = "Valentine" // 'This would still work'
userName = "SomeName"
const pI = 3.142 // 2345
let isLoggedIn = true // false
// pI = 12444
let age = null;
let cart = undefined;


let firstName = "Valentine"
let lastName = "Omonya"
// console.log(firstName + " " + lastName)
const combinedName = firstName.concat(" ",lastName)
// console.log(combinedName)
const newValue = `${firstName} ${lastName}`
// console.log(newValue)
// 
const message = "our session starts at 9pm."
// console.log(message.toUpperCase())
// console.log(message.toLowerCase())
// * &
// pass by ref pass by value
// 
let greeting = "Hello world"

// console.log(greeting.slice(3, 8))
// console.log(greeting.substring(3, 8))
// console.log(greeting.slice(-5))
// 
let meetingName = "Introduction to Javascript"
// console.log(meetingName.lastIndexOf("a"))
// const updatedMeetingName = meetingName.replace("Javascript", "HTML")
// console.log(meetingName.replaceAll("a", "Javascript"))
const userInput = "  Some information  "
// console.log(userInput.trim())
// console.log(userInput.trimStart())
// console.log(userInput.trimEnd())
// 
let vowels = 'AEIOU'
// console.log(vowels.split(''))
let title = "My Project Proposal"
// NOTE: the first argument of padEnd/padStart is the TOTAL length the string
// should reach, NOT how many characters to add.
// title is already 19 characters long, so padding to 4 or 6 changes nothing:
// console.log(title.padEnd(4,"-----"))   // "My Project Proposal" (unchanged)
// console.log(title.padStart(6,"-----")) // "My Project Proposal" (unchanged)
// Use a target longer than the string instead:
// console.log(title.padEnd(30, "-"))     // "My Project Proposal-----------"
// console.log(title.padStart(30, "-"))   // "-----------My Project Proposal"
// console.log(title.repeat(4))
/*
+ = adding
- = substractiong
== comparison
/ = dividing
* = multiplication
* % modulus
* ** exponential
* -- descement
* ++ increment
* +=1 add one
* += 10 add to
*/
let a = 3;
let b = 2;
// console.log(a + b)
// console.log(a - b)
// console.log(a % b)
// console.log(a ** b)
// console.log(--a)
// console.log(++b)
// console.log(b--)
// console.log(b++)


/*
==
===
*/
// console.log("5" === 5)
//  !
// || 
// &&
// <
// >
// <=
// >=
/*
BRING A BOY AND A GIRL  BOY = FALSE, BOTH = TRUE
    boy && girl

BRING A BOY OR A GIRL = BOY => TRUE, GIRL => TRUE, BOTH => TRUE, NONE => FALSE
    boy || girl
    NOTE: in JavaScript, || is still TRUE when BOTH are true (true || true === true).
    "EITHER ONE BUT NOT BOTH" is a different rule called XOR:
    boy !== girl   // BOTH => FALSE, BOY => TRUE, GIRL => TRUE, NONE => FALSE

BRING A BOY NOT A GIRL = GIRL => FALSE, BOY => TRUE
    boy && !girl

BRING NEITHER A BOY NOR A GIRL EITHER=> FALSE BOTH=> FALSE, NONE => TRUE
    !boy && !girl   // same as !(boy || girl)

*/
let num2 = 10
let num1 = 5


