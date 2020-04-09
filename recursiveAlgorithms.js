// Sample Code from Reading

const sumOf = function(list) {
    // Base case
    if (list.length === 1) {
        return list[0];
    }
    // General case
    return list[0] + sumOf(list.slice(1));

}

let lst = [2,4,6,8,10];
//console.log(sumOf(lst));

// 1. Counting Sheep
/* 

Write a recursive function that counts how many sheep jump over the fence. Your 
program should take a number as input. That number should be the number of sheep 
you have. The function should display the number along with the message "Another 
sheep jumps over the fence" until no more sheep are left.

What is the input to the program? The number of sheep (3)
What is the output of the program? A string that shows the number of sheep
What is the input to each recursive call? Sheep - 1
What is the output of each recursive call? 3 - 2 - 1 - 0

*/
const countSheep = function(sheep) {
    // Base case
    if (sheep === 0) {
        return console.log('All sheep jumped over the fence')
    } else {
        console.log('I have ' + sheep + ' sheep! Another sheep jumps over the fence...')
        // General case
        return countSheep(sheep - 1)
    }


}

console.log('Exercise 1: ' + countSheep(3));

/*
2. Power Calculator

Write a function called powerCalculator() that takes two parameters, an integer as 
a base, and another integer as an exponent. The function returns the value of the 
base raised to the power of the exponent. Use only exponents greater than or equal 
to 0 (positive numbers)

What is the input to the program? two integers
What is the output of the program? he value of the base raised to the power of the exponent
What is the input to each recursive call? (10, 2) & (10, -2)
What is the output of each recursive call? 100 & String requesting numbers greater than zero

*/

const powerCalculator = function(base, expo) {
    // base case
    if (expo === 0) {
        return 1;
    } 
    else if (expo < 0) {
        return console.log('exponent should be greater than zero')
    } else {
        return base * powerCalculator(base, expo - 1)
    }
    
}
console.log('Exercise 2.1: ' + powerCalculator(10,2))
console.log('Exercise 2.2: ' + powerCalculator(10,-2))

/*
3. Reverse String

Write a function that reverses a string. Take a string as input, 
reverse the string, and return the new string.

What is the input to the program? A string
What is the output of the program? The string in reverse
What is the input to each recursive call? Hello World
What is the output of each recursive call? dlroW olleH

*/

const reverseString = function(string) {
    if(string === "") {
        return "";
    } else {
        return reverseString(string.substr(1)) + string.charAt(0);
    }
}
stng = "Hello World"
console.log('Exercise 3: ' + reverseString(stng))

/* 
4. Nth Triangle Number

Calculate the nth triangular number. A triangular number counts the objects that 
can form an equilateral triangle. The nth triangular number is the number of dots 
composing a triangle with n dots on a side, and is equal to the sum of the n 
natural numbers from 1 to n. This is the Triangular Number Sequence: 1, 3, 6, 10, 
15, 21, 28, 36, 45.

What is the input to the program? A number from 1 to n
What is the output of the program? The number of objects used to make a triangle 
What is the input to each recursive call? 5
What is the output of each recursive call? 15

*/

function enthTriNumber(num) {
    if (num <= 1) {
        return num
    } else {
        return num + enthTriNumber(num - 1)
    }
}

console.log('Exercise 4: ' + enthTriNumber(5))

/*
5. String Splitter

Write a recursive function that splits a string based on a separator (similar to 
String.prototype.split). Don't use JS array's split function to solve this problem.

What is the input to the program? 02/20/2020
What is the output of the program?  ["02", "20", "2020"]
What is the input to each recursive call? A String 
What is the output of each recursive call? An array

*/

/*
6. Fibonacci
Write a recursive function that prints the Fibonacci sequence of a given number. The 
Fibonacci sequence is a series of numbers in which each number is the sum of the 2 
preceding numbers. For example, the 7th Fibonacci number in a Fibonacci sequence 
is 13. The sequence looks as follows: 1, 1, 2, 3, 5, 8, 13.

*/

const fibonacciSeq = function(fibNum) {
    if (fibNum === 1) {
        return [0, 1];
    } else {
        let fibArray = fibonacciSeq(fibNum - 1);
        fibArray.push(fibArray[fibArray.length - 1] + fibArray[fibArray.length - 2])
        return fibArray;
    }
}

console.log('Exercise 6: ' + fibonacciSeq(7))

/* 
7. Factorial
Write a recursive function that finds the factorial of a given number. The factorial 
of a number can be found by multiplying that number by each number between itself 
and 1. For example, the factorial of 5 is 5 * 4 * 3 * 2 * 1 = 120.

*/
const factorial = function(num) {
    if( num === 1 ) {
        return 1
    } else {
        return num * factorial(num - 1)
    }
}

console.log('Exercise 7: ' + factorial(5))


/* 
8. Find a way out of the maze
You have entered a Maze and need to find your way out of it. There are more than one 
possible paths through the Maze to the single exit point. Write a recursive function 
that will help you find a possible path though the maze.

For the above maze, a possible exit path can be RRDDLLDDRRRRRR

*/
let mySmallMaze = [
    [' ', ' ', ' '],
    [' ', '*', ' '],
    [' ', ' ', 'e']
];

let maze = [
    [' ', ' ', ' ', '*', ' ', ' ', ' '],
    ['*', '*', ' ', '*', ' ', '*', ' '],
    [' ', ' ', ' ', ' ', ' ', ' ', ' '],
    [' ', '*', '*', '*', '*', '*', ' '],
    [' ', ' ', ' ', ' ', ' ', ' ', 'e']
];

/*
9. Find ALL the ways out of the maze
Use the above maze and modify your solution so it finds All the possible exit paths 
through the Maze. To find all possible exit paths through the maze, think about how 
many places you can move at each turn. Possibly up, down, left or right?

Notice that this maze has 3 exits paths. Your recursive function should print all 
three of the paths with the proper directions. For example, given the maze above, 
the program should output the following:

Path to the exit: RRDDLLDDRRRRRR
Path to the exit: RRDDRRUURRDDDD
Path to the exit: RRDDRRRRDD
*/



/*
10. Anagrams
An anagram is any word or phrase that uses the letters of a given ("subject") word or 
phrase in another, rearranged order. Write a function that creates an anagram list, 
listing all the rearrangements of a given word. For example, if the user types "east", 
the program should list all 24 permutations, including "eats", "etas", "teas", and 
non-words like "tsae".

Hint: For your algorithm, you might want to think about a prefix and use that to create 
the new words. For example, given "east", use "e" as a prefix and place it in front of 
all 6 permutations of "ast" — "ast", "ats", "sat", "sta", "tas", and "tsa". This will 
give you the words "east", "eats", "esat", "esta", "etas", and "etsa". Continue this way 
until you find all the anagrams for "east". Then you can use "a" as a prefix and permute 
the remaining words "est". For "east", there should be 24 words.
*/


/*
11. Organization Chart
Write a recursive function that prints the following organization chart. Your output 
should be as shown below with proper indentation to show the hierarchy. You may store 
the org chart in an object and send that as an input to your program.

*/




/*
12. Binary Representation
Write a recursive function that prints out the binary representation of a given number. 
For example, the program should take 3 as an input and print 11 as output, or 25 as an 
input and print 11001 as an output. Note that the binary representation of 0 should be 0.

*/

const findBinary = function (decimal) {
    if (decimal == 0) {
        return 0
    } else {
        return decimal % 2 + 10 * (findBinary(decimal / 2))
    }
}
console.log('Excerise 12 '+ findBinary(3))