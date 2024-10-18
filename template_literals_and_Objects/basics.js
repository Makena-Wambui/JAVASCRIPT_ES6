// Enclosed by `` (backticks) instead of '' or ""
// They can contain normal strings, along with other parts called placeholders.
// Placeholders are embedded expressions delimited by ${expression}
// These strings and placeholders get passed to a function:
// This function could be a default function or a custom function, you provide.
// The default function, if a custom function is not supplied, performs string interpolation: performs sustitution
// of the placeholders with the values of the expressions, then concatenates the parts into a single string.

// You can supply a function of your own.
// Precede the template literal with the function name.
// The result is a tagged template literal.
// The template literal will be passed to the tag function.
// This function will perform whatever operations you want on the different parts of the template literal.

// Escape backtick in template literal
// Use \ before the backtick to escape it.
// This will prevent the template literal from ending prematurely.
// The backtick will be treated as a normal character.
// The backslash will be removed from the final string.
console.log(`\``);

// Dollar sign can be escaped in template literals to prevent it from being treated as a placeholder.
// Use \$ to escape the dollar sign.
console.log(`$1`);
console.log(`\${1}`);

// Multiline strings
// Using normal strngs, this is the syntax you would use:
console.log("My name is John.\n" + "I am 50 years old.");

// Using template literals, this would be:
console.log(`My name is John.
I am 50 years old.`);

// Using normal string literals to write a single line string across multiple lines for readability.
console.log("My name is Peter and \
I am a Family Guy.");

// Using template literal to write a single line string across multiple lines for readability.
console.log(`My name is Stan Smith and \
I am an American Dad.`);


// String Interpolation
// Without template literal:
// If you want to combine the output from expressions with strings you would have to perform concatenation using +.
const a = 2;
const b = 3;
console.log("The sum of a and b is " + (a + b) + "\nand not " + (2 * a + b) + ".");

// With template literals, you can avoid the concatenation.
// This will improve readability and make the code easier to maintain.
// Use place holders of the form ${expression} to embed expressions in the string.

const c = 2;
const d = 10;
// Using a template literal with placeholders.
console.log(`The sum of c and d is ${c + d} \
and not ${2 * d}.`);
// There is a mild difference between the two syntaxes.
// Template litterals coerce the values of expressions directly to strings.
// This is not the case with normal strings and the + operator;
// which coerces the operands to primitive values before concatenating them.

// Nesting template literals
// You can nest template literals within other template literals.

// Without template literals, if you wanted to return a certain value,
// based on a certain condition:
let classes = "header";
/*
classes += isLargeScreen() ? "" : item.isCollapsed
    ? " icon-expander"
    : " icon-collapser";

// Without a nested template literal:
classes = `header ${isLargeScreen() ? "" : item.isCollapsed ? "icon-expander" : "icon-collapser"}`;

// With a nested template literal:
classes = `header ${isLargeScreen() ? "" : `icon-${item.isCollapsed ? "expander" : "collapser"}`}`;
*/

// Tagged template literals
// A tagged template literal is a function call that uses a template literal as an argument.
// The function is called a tag function.
// The first argument of the tag function contains an array of string values.
// The remaining arguments contain the values of the expressions.
// The tag function can then perform whatever operations it wants on the strings and expressions.
// And return the final string.
// The name of the tag function is placed before the template literal. The name can be whatever you want.

const person = "John";
const age = 50;

// myTag receives three arguments:
// strings is an array of string values.
// arg1 and arg2 are the values of the expressions.
function myTag(strings, arg1, arg2) {
    const str0 = strings[0]; // "Hey "
    const str1 = strings[1]; // " is a "
    // const str2 = strings[2];

    const newArg = arg2 < 100 ? "youngster!" : "wise elder!";
    
    return `${str0}${arg1}${str1}${newArg}`;
}

console.log(myTag`Hey ${person} is a ${age}`);

function tag(strings, ...args) {
    console.log(strings, args);
}

tag`My name is ${person} and I am ${age} years old`; // ["My name is ", " and I am ", " years old"] ["John", 50]
tag`Hello ${1}!`; // ["Hello ", "!"] [1]

// console.log as the tag
// You can use console.log as the tag function.
// This will log the strings and expressions to the console.
console.log`Hello ${person}!`;

// console.log.bind(1, 2) as the tag
// This creates a new function with this value set to 1, and the first argument set to 2.
// console.log does not rely on this, so the 1 is ignored.
// Hence the resulting function logs 2 to the console.
// In this example we use it as a tag function.
// The template literal is passed to the new function.
console.log.bind(3, 20)`Hi!`;
console.log.bind(1, 5)`${person}, you are ${age} years old.`;
console.log.bind(1, 2)`Hi ${person}! How are you?`;

// new Function()as the tag function
// new Function() creates a new function.
// The first argument is a list of arguments for the function.
// The second argument is the function body.
// new Function("console.log('Hello!');") creates a new function that logs "Hello!" to the console. console.log('Hello!'); is the body of the new function.

const newFunc = new Function("console.log(arguments);");
newFunc`Hello! ${person}`;

// recursive tag function
// A tag function can call itself recursively.
// This can be useful for creating recursive templates.

function recursiveTag(strings, ...others) {
    console.log(strings, others);
    return recursiveTag
}
recursiveTag`Hello ${person}!``Welcome to ${age}!`;
recursiveTag`Hello ${person}!``Welcome to Nairobi!`;


