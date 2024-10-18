// let declares reassignable block scoped local variables.
// optionally initialize each variable with a value

let x = 1;

if (x === 1) {
	let x = 2;
	console.log(x); // 2
}

console.log(x);

// Syntax
// Uninitialized

//let name1;
//console.log(name1); undefined

//let name1 = 'Makena';
//console.log(name1);


//let name1 = 'Makena';
//let name2 = 'Wambui';
//console.log(name1, name2);

//let name1 = 'Makena', name2 = 'Wambui';
//console.log(name1, name2);


let name1, name2 = 'Makena';
console.log(name1, name2); // undefined, Makena


// nameN is the name of the variable you are declaring
// Must be a legal JS Identifier 

// valueN is the initial value of the variable.
// Can be any legal expression.
// Default value is undefined.



