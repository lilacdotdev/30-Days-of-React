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

// 