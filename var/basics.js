// var statement declares a function-scoped or globally scoped variable, optionally initializing it to a value.

var x = 1;
console.log(x); // 1

if (x === 1) {
  var x = 2;
  console.log(x); // 2
}

console.log(x); // 2

var name1 = 'John', name2 = 'Peter';
console.log(name1); // John
console.log(name2); // Peter

{
    var name1 = "Doe";
}
console.log(name1); // Doe

var age, age2 = 20;
console.log(age); // undefined
console.log(age2); // 20


var a = 1, b, c, d = 5;
console.log(a); // 1
console.log(b); // undefined
console.log(c); // undefined
console.log(d); // 5

// nameN is the name of the variable. Can be any valid identifier.
// valueN is the initial value of the variable. Can be any valid expression.  
// Its default value is undefined.

// Scope:
// 1. Function body
// 2. Static initialization block
// If none of the above apply:
// 3. The current module
// 4. The global scope for code running in script mode

function foo() {
  var x = 1;

  function bar() {
    var y = 2;
    console.log(x); // 1
    console.log(y); // 2
  }

  //bar();
  console.log(x); // 1  because x is declared in the outer function hence it is in foo's scope
  //console.log(y); // ReferenceError: y is not defined because y is declared in the inner function hence it is in bar's scope but can not be accessed outside of it
}

foo();
