// Arrow function can not contain a line break between its parameters and the arrow

/*
const foo = () 
    => {};

    console.log(foo); // SyntaxError: Unexpected token '=>'
*/
// You may put the line break after the arrow
const bar = (a, b, c) => 
    {};

// You may use () or {} around the function body
const baz = (a, b, c) => {
    return a + b + c;
};

const qux = (a, b, c) => (
    a + b + c
);

//You may have line breaks between parameters
const q = (
    a,
    b,
    c
) => {
    let sum = a + b + c;
    return sum;
};