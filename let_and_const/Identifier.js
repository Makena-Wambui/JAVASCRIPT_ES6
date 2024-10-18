//What is an identifier?

//Used to link a value with a name.

//Used in various places:
	//1. Variable decalaration:
const age = 30;
console.log(age);

	//2. Function declaration
function fn() {}

	//3. Object Keys
const obj = {name: 'Alicia'}; // name is an Identifier
console.log(obj['name']);

	//4. Class declaration
class C {
	//#id : '1010101'; // private property
}

	//5. Label
lbl: console.log(1);

//Identifiers are commonly made of alphanumeric characters, _s and $s.
//They can not start with numbers.
//JS Identifiers are not limited to ASCII.


// Not all places accept the full range of identifiers.
// Certain syntaxes, eg function declarations, function expressions, variable declaration require identifier names not to be reserved word.

//let import = "illegal identifier";
//console.log(import); syntax error

// However private properties and object properties allow reserved words.

const skirt = { import: 'yes' };
console.log(skirt.import); //yes
