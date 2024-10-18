// A block statement is used to group zero or more statements.
// Delimited by a pair of curly braces.
// Contains a list of 0 or more statements and declarations.

var x = 1;
let y = 1;

if (true) {
	var x = 2;
	let y = 2;
	console.log(x);
	console.log(y);
}

console.log(x);
console.log(y);

// Syntax of blocks:
// {
// 	statementList
// }
// Called Compound Statement in other languages.
// When combined with block scoped declarations like class, const and let, blocks prevent temporary variables from polluting the global namespace.


// BLOCK SCOPING RULES WITH VAR OR FUNCTION DECLARATION IN NON STRICT MODE
// Variables declared with var, or variables created by function declarations in non strict mode do not have block scope.
// Hence variables introduced within a block are scoped to the containing function or script.
// The effects of setting them persist beyond the block itself.

var z = 10;

console.log(z);

{
	var z = 15;
}

console.log(z);

// In non strict mode, function declarations within blocks behave strangely so avoid them.

// BLOCK SCOPING RULES WITH let, const, class OR FUNCTION DECLARATION IN NON STRICT MODE
// Identifiers declared with let, const or class have block scope.

let m = 9;
console.log(m);
{
	let m = 10;
	console.log(m);
}
console.log(m);

const c = 5;
console.log(c);

{
	// this block scoped const c = 10; does not throw a syntax error because it can be declared uniquely within the block.
	const c = 10;
	console.log(c);
}

console.log(c);

