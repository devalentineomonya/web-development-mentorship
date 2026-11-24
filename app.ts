
let userName = "Valentine" // TypeScript infers the type: string
userName = 1 // INTENTIONAL ERROR: Type 'number' is not assignable to type 'string'. (TS2322)
console.log(userName)
// The same code in a .js file runs fine and prints 1, because JavaScript is dynamically typed.