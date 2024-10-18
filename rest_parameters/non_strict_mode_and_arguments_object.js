// In non strict mode the arguments object is linked to the function's parameters. If you change the value of a parameter inside the function, the corresponding value in arguments is also updated. However the rest parameter does not have this link to the function parameters. Even if you reassign the rest parameter, or named parameters, the rest parameter array does not update. The following example demonstrates this behavior:

function f(a, b, ...args) {
    console.log(arguments);
    console.log(arguments[0]);
    console.log(arguments[1]);
    console.log(args);

    
    a = 10;
    b = 20;
    console.log(arguments[0]);
    console.log(arguments[1]);
    console.log(args);
}
f(1, 2, 3, 4, 5);
