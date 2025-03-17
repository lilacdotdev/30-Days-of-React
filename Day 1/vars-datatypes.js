// Day 1 - JavaScript Refresher


// ! == Var/Let/Const ==
// var is for declaring fuction scoped variables
// try and avoid var as much as you can, as it'll cause some headaches with debugging in the future.
var x = 1

// let is block-scope
let y = 2

// const is a constant, which is not allowed to be reassigned to a new value
const z = 3
// z = 4 will just error out

// Block Scope vs Function Scope
// Block Scope is within the block of code,
function a1(){
    if(true){
        let x1 = "1a"
    }
}

// whereas Function Scope is within the entire function
function a2(){
    var x2 = "2a"
    // * x is in scope
}
// * x is out of scope


// ! == Data Types ==
/*  Primitive Datatypes 
        Numbers
        Strings
        Booleans
        Null
        Undefined
        Symbols

    Non-primitve types
        Objects
        Arrays
*/


// ! == Arrays ==
// Creating arrays
const arr1 = Array() // empty array
const arr2 = [] // yet another empty array, but this is reccomended

const nums = [1,2,3,4,5,6] // num array
const strs = ['string', 'array', 'lets', 'go'] // string array
// i think we get the point lol just use the datatypes

// Printing arrays
console.log("Check out these nums! ", nums)

// Length
console.log("Length of nums: ", nums.length)

// Arrays with different datatypes
const mixed = ["lots", 0, 'f', "datatyp", 35, true] // got strs, nums, bools... what doesn't it have?!

// Array by splitting string
let str1 = "Testing"
const str1split = str1.split('')
// results in : ["T", "e", "s", "t", "i", "n", "g"]

let longstr = "Test1, test2, test3"
let splitlongstr = longstr.split(',')
// results in : ["Test1", "test2", "test3"]

// Access value via index
console.log(splitlongstr[2]) // prints "test2"

// Modify array by index
let modMe = [1,2,3]
modMe[0] = 11
// results in : [11, 2, 3]


// ! == Array Operations ==
// Fill
const empty6arr = Array(6) // Creates an array with 6 empty slots
const filled6arr = Array(6).fill('Six!') // ['Six!', 'Six!', 'Six!', 'Six!', 'Six!', 'Six!']

// Concat
const list1 = [1,2,3]
const list2 = [4,5,6]
const list1and2 = list1.concat(list2) // [1,2,3,4,5,6]

// Length
const list3 = [1,2,3]
const l3len = list3.length // 3

// IndexOf
const list4 = [1,2,3,2]
console.log(list4.indexOf(3)) // 2, because number 3 is at index 2
console.log(list4.indexOf(2)) // 1, because number 2 exists *first* at index 1
console.log(list4.indexOf(4)) // -1, because number 4 does not exist in this array
// * note: indexOf will always prioritize the first existance of an item.

// LastIndexOf
console.log(list4.lastIndexOf(2)) // 3, because number 2 exists *last* at index 3

// Includes
console.log(list4.includes(3)) // true
console.log(list4.includes(4)) // false

// Array.isArray
console.log(Array.isArray(list4)) // true
console.log(Array.isArray(x)) // false

// ToString
console.log(list4.toString()) // "1,2,3,2"

// Join
console.log(list4.join()) // "1,2,3,2" *Default is to just use commas as a delim*
console.log(list4.join('')) // "1232"
console.log(list4.join(' $ ')) // "1 $ 2 $ 3 $ 2"

// Slice
// First of the ones i really gotta explain lol cause theyre getting kinda complicated
// Peeks a slice of an array based off [start, end) <- which means [ <-inclusive, exclusive-> )
console.log(list4.slice()) // [1,2,3,2]
console.log(list4.slice(1,2)) // [2]
console.log(list4.slice(1,3)) // [2,3]

// Splice
// Cuts and replace.
// params (starting-pos, number of items to replace, replacements)
const list5 = [1,2,3,2,6]
console.log(list5.splice(3,2,4,5)) // [1,2,3,4,5] 
// Explanation: We instruct to splice list5 starting at index 3 (in this case value of 2), replacing the next 2 items with 4 and 5.

// Push
// Appends an item at the end
list5.push(6)
console.log(list5) // [1,2,3,4,5,6]

// Pop
// Remove the last item
list5.pop()
console.log(list5) // [1,2,3,4,5]

// Shift
// Remove the first item
list5.shift()
console.log(list5) // [2,3,4,5]

// Unshift
// Appends an item to the start
list5.unshift(1)
console.log(list5) // [1,2,3,4,5]

// Reverse
list5.reverse()
console.log(list5) // [5,4,3,2,1]

// Sort
const list6 = ["Echo", "Charlie", "Alpha", "Bravo", "Delta"]
list6.sort() // ["Alpha", "Bravo", "Charlie", "Delta", "Echo"]
console.log(list6)


// ! == Conditionals ==
// If
// Your everyday if  statement syntax.
let condition = true
if (condition) {
    console.log("1")
} else if (!condition) {
    console.log("2")
} else {
    console.log("3")
}

// Switch
// Standard java switch case
let matchme = 2
switch (matchme) {
    case 1:
        console.log("This is 1!")
        break
    case 2:
        console.log("This is 2!")
        break
    default:
        console.log("This is not 1 or 2!")
        break
}
// Breakcase can be used to not have to type out break, but I'm a java dev so...

// Ternary Operators
let isTest = true
isTest
    ? console.log("This is a test!")
    : console.log("This is NOT a test.")


// Prompt
let valueEntered = -1;
//valueEntered = prompt("Enter a value")


// ! == Loops ==
// For loop
/* Syntax : 
for(initialization; condition; increment/decrememnt) {
    command(s)
}                                                    */
// In other words, it's a basic java for loop
for(let i = 0; i < 3; i++) { // runs 3 times, idx 0,1,2
    console.log(i)
}

// While
while(condition){
    console.log("While loop running!")
    break // breaks out the loop; this is just so the program isnt eternal.
}

// Do While
// I wanna take a sec to express my hatred for this loop. That's all.
do {
    console.log("In loop")
    break; // Once more just breaks out so the program isnt perpetually stuck here.
} while(condition)

// For of
// Now they're getting wild. This one is a python for each.
// Basically just takes each element and one-by-one writes it to a variable.
const forList = ["Alpha", "Bravo", "Charlie"]
for(const idx in forList){
    console.log(forList[idx])
}

// For each
// This one's a whacky one. Kinda like a for loop but a method of Arrays??
// Takes a callback function with params item, index, and array. Wild.
forList.forEach((phoenetic, i, arr) => {
    console.log(i, phoenetic)
})

// For in
// Used for objects which is pretty cool. Ahem, GDscript.
const obj = {
    key1: 'Test1',
    key2: 'Test2',
}
for(const keys in obj) {
    console.log(keys, obj[keys])
}


// ! == Scope ==
/* Heirarchy
    - Window Scope : Accessed anywhere in this webapp
    - Global Scope : Accessed anywhere in the file
    - Local Scope : Only accessed in blocks of code
*/

// Example: Make pretend this is the start of a js file.
windowScp = "Window Scope"
let globalScp = "Global Scope"
function scoping(){
    let localScp = "Local Scope"
}
// localScp is out of scope here, but Global and Window are in scope


// ! == Objects ==
// Empty Object
const obj1 = {}

// Object with Values
const triangle = {
    base: 5,
    height: 12,
}
console.log("Triangle Object : ", triangle)

// Object Methods
const programmer = {
    firstname: "Sebastian",
    nickname: "Lilac",
    age: 20,
    skills: ["lots", "of", "things"],

    getName: () => {
        return `${this.firstname}`
    },

    getBio: function () {
        return `${this.firstname} '${this.nickname}', Programmer at age ${this.age}`
    },   
}

console.log(programmer.getBio())

// Setting a new key
programmer.test = "Testing"
programmer.testfunc = function () {
    console.log("Hello World!")
}

programmer.testfunc()

/* -Object Methods-
    Object.assign(obj) : Copy an object without touching the original
    Object.keys(obj) : Return all key as an array
    Object.values(obj) : Return all values as an array
    Object.entries(obj) : get both keys and values as an array
    obj.hasOwnProperty('property_name') : Does a specific key exist in an obj
*/

// ! == Functions ==
// Basic Function Syntax
function functionName(param1, param2, param3, nth_param) {
    console.log("Code here.")
}

// Unlimited Parameter Function
// Having no params and calling the arguments keyword results in unlimited parameters
function unlimitedparams() {
    console.log(arguments)
}
unlimitedparams(1,2,3,4,5,6,7,8)

// Here's a useful way to traverse it
function manyparams() {
    let sum = 0
    for (let i = 0; i < arguments.length; i++){
        sum += arguments[i]
    }
    console.log(`Your sum totals out to ${sum}`)
}

manyparams(1,2,3,4,5)

// Arrow Function
const square = (n) => {
    return n*n
}

// Called as :
console.log("Square of 9 is: ",square(9))

// Anonymous Function
const anonFunc = function () {
    console.log("I am a nonny mouse.\nSqueak squeak.")
}

anonFunc()

// Expression Function
const rect = function (l,w) {
    return l*w
}

console.log("Rectange length 6 width 7 has an area of", rect(6,7))

// Self-Invoking Functions
;(function (n) {
    console.log("I invoked myself for a value of",n*n,"!")
})(2)

// Function Parameter Defaults
function defaultTest(msg = "Hello World of Defaults") {
    console.log(msg)
} 
defaultTest()
defaultTest("This is NOT the default value")

// ! == Higher Order Functions ==
// A Callback function is just a function that can be passed as a parameter

// Returning function creates a heirarchy of functions
const Highest = x => {
    const Higher = y => {
        const High = z => {
            return x + y + z
        }
        return High
    }
    return Higher
}

console.log("Heirarchy in action:",Highest(1)(2)(3))

// setInterval
// Exectute function on an interval
function sayHi(){
    console.log("hi")
}
//setInterval(sayHi, 1000) // This is commented out cause it goes on forever and tilted me

// setTimeout
// Wait x ms then do function
/*setTimeout(() => {
    console.log("Hello.")
}, 2000)*/ //so is this. ^

// ! == Classes ==
// Declaring a class
class ClassName {
    //class here
}

// Class instatiation
const classname = new ClassName()
console.log(classname)

// Constructor
class Animal {
    constructor(species = null, name = null){
        this.species = species
        this.name = name
    }
}

console.log(new Animal("Cat", "Bento"))

// Class Methods
class Gun {
    constructor(
        model = "Glock 19",
        calibre = "9mm",
        is_semi = "true"
    ) {
        this.model = model
        this.calibre = calibre
        this.is_semi = is_semi
    }
    fire(){
        console.log("Bang!")
    }
}

const glock = new Gun() // defaulted gun

glock.fire()

// Getters and Setters
class Gun2 {
    constructor(
        model = "Glock 19",
        calibre = "9mm",
        is_semi = "true"
    ) {
        this.model = model
        this.calibre = calibre
        this.is_semi = is_semi
    }
    fire(){
        console.log("Bang!")
    }
    get getModel() {
        return this.model
    }
    set setModel(model) {
        this.model = model
    }
}

const sniper = new Gun2("M40A5", ".308 Lapua", "True")

console.log(sniper.model)
sniper.setModel = "SVD"
console.log(sniper.model)
sniper.fire()

// Static Method
// Essentially calling not the class instance itself, but the class itself
class Tools {
    static obfuscate(input){
        return "This is an obfuscation that definitely works soooo well.";
    }
}

console.log(Tools.obfuscate("test"))

// Inheritance
class Rifle extends Gun{
    constructor(
        model = "Vector",
        calibre = "45 ACP",
        is_semi = "true",
        barrelLength = "1m"
    ) {
        super(model, calibre, is_semi)
        this.barrelLength = barrelLength
    }
    // OVERRIDE
    fire(){
        console.log("BOOM!")
    }
}
new Rifle().fire()

// ! == Document Object Model (React DOM) ==
/*<!DOCTYPE html>
<html lang="en">
  <head>
    <meta charset="utf-8" />
    <meta name="viewport" content="width=device-width, initial-scale=1" />
    <title>React App</title>
  </head>

  <body>
    <!-- <div class="root"></div> -->
    <div id="root"></div>

    <script>
      // const root = document.querySelector('.root')
      // const root = document.getElementById('root')
      const root = document.querySelector('#root')
      root.innerHTML = <h1>Welcome to 30 Days Of React </h1>
    </script>
  </body>
</html>*/