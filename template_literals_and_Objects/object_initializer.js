// A comma-separated list of zero or more pairs of property names and their associated values in an object
// wrapped/enclosed  in curly braces.

// You can also initialize an object using Obect.create() method.
// Or by invoking a constructor function with the new keyword.

let object1 = { a: 'foo', b: 42, c: {} };
console.log(object1);
console.log(object1.a);
console.log(object1.c);

const p = 'bar';
const q = 89;
const r = {};
object1 = { p, q, r };
console.log(object1);
console.log(object1.r);

let object2 = { a: p, b: q, c: r };
console.log(object2);
console.log(object2.a);

// Properties are used to describe the object.
// Values of object properties can either contain primitive data types or other objects.

// object Literal Syntax VS JSON
// Object literal syntax is not the same as JSON.
// here are some differences:
// 1. JSON only allows property definition syntax of "property": value.
    //Property names must be "double quoted" strings.
    //No shorthand property definition syntax.
    //Computed property names are not allowed.

// 2. JSON object property values => strings, numbers, true, false, null, arrays or other JSON objects.
   // JSON can not express methods, or other nonplain objects like Date, Map, Set, RegExp, etc.
    // JSON can not have comments.
    // JSON can not contain undefined.
    // JSON can not contain a trailing comma.
    // JSON can not contain a reference to itself.

//3. In JSON, "__proto__" is a normal property key, not a reference to the object's prototype.
     // In an object literal, __proto__ is a reference to the object's prototype.


// JSON is a textual format for representing structured data.
// Used to transmit data btwn servers and web applications.

// Object literal syntax is a way to directly create objects in JavaScript code.

// Differences when it comes to special property __proto__:
//1. In object literals, __proto__ is a special property.
   //When you use it in an object literal, it sets the objects prototype.Which affects inheritance.
   // In JSON, __proto__ is just a regular property.
   // JSON.parse() will simply create an object with __proto__ as a regular property.
   // And the object's prototype will not be affected.

   // Example1: __proto__ in object literals
   // The __proto__ property sets myObj prototype to the object that is passed as its value.
   // that is, myObj.__proto__ = { greeting() { return `Hello, ${this.name}`; } };
    const myObj = {
        name: "James",
        __proto__ : {
            greeting() {
                return `Hello, ${this.name}`;
            }
        },
    };

    // myObj can access the greeting method through its prototype, even though it is not directly defined on myObj.
    console.log(myObj.name);
    console.log(myObj.greeting());

    // Example2: __proto__ in JSON
    // A json string that contains a __proto__ property.
    const jsonString = '{"name": "James", "__proto__": {"greeting": "Hello, ${this.name}"}}';
    const o = JSON.parse(jsonString);
    console.log(o);
    console.log(o.name);
    console.log(o.__proto__);
    console.log(o.__proto__.greeting);
    console.log(o.greeting);

    // JSON allows duplicate keys, but the last one wins.
    // So you can have a duplicate __proto__ key in a JSON string.
    // But object literals do not allow duplicate __proto__ key.
    const o1 = { age: 25, name: "Doe", age : 30 };
    console.log(o1);

    // Duplicate proto in JSON
    // No syntax error occurs.
    // The last __proto__ key wins.
    const jString = `{ 
        "name": "Doe",
        "__proto__": {"greeting": "Hello!"},
        "__proto__": {"greeting": "Hi."}
    }`;
    const aNewObj = JSON.parse(jString);
    console.log(aNewObj);

    // Duplicate __proto__ key in object literal, throws a syntax error.
    const anotherObj = { 
        name: "John",
        gender: "Male",
        __proto__: {
            title: "Director",
            intro() {
                return `Hello, I am ${this.name} and I am the ${this.title}`;
            }
        },
        /*
        Duplicate proto fields not allowed in object literals.
        __proto__: {
            location: "Miami",
        },
        */
    };
    console.log(anotherObj.title);
    console.log(anotherObj.intro());

// An empty object with no properties:
const emptyObj = {};

// Note: Object initializer is also called object literal.

const myObj1 = {
    foo: "bar",
    age: 42,
    baz: { myKey: "myValue" },
};

// Object properties can be accessed using dot notation or bracket notation.
console.log(myObj1.foo);
console.log(myObj1["age"]);
console.log(myObj1.baz);
console.log(myObj1.baz.myKey);

// Sometimes there are variables i your code you would like to put in your object.
const var1 = "6 feet";
const var2 = "180 pounds";
const var3 = {};
const var4 = 32;

const myObj2 = {
    myHeight: var1,
    myWeight: var2,
    myInfo: var3,
    myAge: var4,
};
console.log(myObj2.myHeight);

// You can use this shorthand notation to achieve the same;

const myObj3 = { var1, var2, var3, var4 };
console.log(myObj3.var1);

// Duplicate Property Names
// If you have two properties with the same name, the last one wins.
// The second property overwrites the first

const o2 = { x: 5, x: 10 };
console.log(o2);

// Duplicate property names are allowed everywhere including strict mode, and in classes.
// Exception: Private Properties. They must be unique in the class body

// METHOD DEFINITIONS
// A property of an object can refer to a function, or a getter/setter method.
// Syntax:
/*
const obj = {
    property: value,
    property: function(parameters) {},
    get property() {},
    set property(value) {return value;},
};


Shorthand Notation so we do not use function keyword.
const obj = {
    property(parameters) {}
};

You can also concisely define generator methods.
const obj = {
    *property(parameters) {}
};
*/

// Computed Property Names are allowed in object literals.
// You put an expression in [] brackets.
// This expression will be computed and used as the property name.

let j = 0;
const anotherObj1 = {
    ["prop" + j]: "bar",
    [`key${++j}`]: j,
    [`anotherKey${++j}`]: j,
};
console.log(anotherObj1);


const arr = ["a", "b", "c"];
const arr2 = [1, 2, 3];
const anotherObj2 = {
    [arr]: "Full Array",
    [arr2]: "Another Array",
    [arr[0]]: "First Element",
    [arr[1]]: "Second Element",
    [arr[2]]: "Thired Element",
};
console.log(anotherObj2);

const param = "size";
//console.log(param.charAt(0));
const objectt = {
    [param]: 12,
    [`mobile${param.charAt(0).toUpperCase()}${param.slice(1)}`]: 20,
};
console.log(objectt);


// Spread Properties
// The spread syntax is supported in object literals.
// It will copy enumerable own properties from one or more source objects to a target object.
// You can now do shallow cloning or merge objects without using Object.assign().

const myObj4 = { 
    foo: "bar",
    x: 42,
    __proto__: {
        key: "proto property",
    },
};
const myObj5 = { foo: "baz", y: 13 };

const clone = { ...myObj4 };
console.log(clone);
console.log(clone.key); // undefined because __proto__ is not copied.

const merged = { ...myObj4, ...myObj5 };
console.log(merged);
console.log(merged.key);
// Also, Object.assign() triggers setters, while the spread syntax does not.

// Prototype Setter
// This property defiition: __proto__: value or "__proto__": value does not create a property called __proto__.
// If the provided value of __proto__ is an object or null, then the [[Prototype]]
// of the created object will be that value.
// Otherwise, if the value of __proto__ is neither an object nor null, the object's prototype will be the default prototype, and it won't be changed.
// __proto__ used as a key in an object literal is std syntax for setting an object's prototype.
// Different from older and less efficient Object.prototype.__proto__ accessor.
//which changes the prototype of existing objects, ie after an object is created.
// __proto__ key in an object literal is used to set the prototype of an object
// at creation, similar to Object.create().

// Examples
const myEmpty = {};
console.log(Object.getPrototypeOf(myEmpty) === Object.prototype);
// myEmpty uses the default prototype, which is Object.prototype.

const nullObj = { __proto__: null };
console.log(Object.getPrototypeOf(nullObj)); // nullObj has no prototype because its prototype is set to null.

const protoObj = {};
const objProto = { __proto__: protoObj };
console.log(Object.getPrototypeOf(objProto) === protoObj);

const voidProto = { __proto__: "not an object or null" };
console.log(Object.getPrototypeOf(voidProto) === Object.prototype);
console.log(Object.hasOwn(voidProto, "__proto__"));

// __proto__ can only be used once to set the prototype.
// Otherwise,you get a syntax error.

// const doubleProto = { __proto__: {}, "__proto__": {} };
// console.log(doubleProto); // duplicate proto fields not allowed in object literals.

// If you use __proto__ without the colon, it will behave as a regular property, and not as a prototype setter.
const __proto__ = {};
const regProto = {
    __proto__,
};
console.log(regProto.__proto__);
console.log(Object.getPrototypeOf(regProto) === __proto__);
console.log(Object.getPrototypeOf(regProto) === Object.prototype);
console.log(Object.hasOwn(regProto, "__proto__"));
console.log(regProto.__proto__);

// You can define properties with the name __proto__ and not have them be treated as prototype setters.
// You can use [] brackets to define a property with the name __proto__.
// Or define a function with it.
const normalProto = {
    ["__proto__"]: "not a prototype setter", 
};
console.log(normalProto.__proto__);

// Or you can define __proto__ as a method property.
const methodProto = {
    __proto__() {
        return "not a prototype setter";
    }
};
console.log(methodProto.__proto__());
console.log(Object.getPrototypeOf(methodProto) === Object.prototype);
console.log(Object.hasOwn(methodProto, "__proto__"));
