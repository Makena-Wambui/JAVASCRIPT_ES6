// In JS, when you use 'this' in a class, it refers to the instance of the class.
// When you create an object from a class, 'this' will refer to the specific object.

// Arrow functions in JS work differently from regular functions.
// Arrow functions do not have their own 'this' context. They inherit 'this' from the parent scope/ where they are defined.
// If you define an arrow function in a class, it will inherit 'this' from the class.
// This means inside the arrow function, this always refers to the instance of the class or the class itself if it is a static method.

class C {
    a = 1;
    autoBoundMethod = () => {
      console.log(this.a); // this will always refer to the instance of the class  
    };
}

// Instantiating the class 
const c = new C();
console.log(c.a); // 1
c.a = 2;
console.log(c.a);
c.autoBoundMethod(); // 2

// example of autobound behavior
// destructuring 
// extract the autoBoundMethod property from the c object and store it in a variable called autoBoundMethod
const { autoBoundMethod } = c;

// This is similar to:
//const autoBoundMethod = c.autoBoundMethod;
// Then we call the autoBoundMethod function that we just extracted from the c object

autoBoundMethod(); // 2

// Why does autoBoundMethod() still log 2 even though we extracted it from the c object?
// This is because the autoBoundMethod is an arrow function and it inherits 'this' context from where it was defined.
// we originally defined the autoBoundMethod in the class C, so it will always refer to the instance of the class C.


// Contrast this with a regular function
class A {
    a = 100;
    method() {
        console.log(this.a);
    }    
}

// Instantiating the class
const ob = new A();
console.log(ob.a); // 100
ob.method();
// changing the value of a
ob.a = 200;
console.log(ob.a);
ob.method(); // 200

// destructuring
const method = ob.method;

// loses its this context
//method(); // undefined

// you would need to manually bind this
const m = ob.method.bind(ob);
m(); // 200

//Arrow functions don’t lose their this context even if you destructure them or call them outside the object.
// Regular functions lose their this context when you destructure them or call them outside the object.You would need to manually bind this to the function.

//memory consumption
//Arrow functions in class fields are not shared between instances. Each instance has its own copy of the arrow function.
// They are created for each instance of the class.
// If you create multiple instances, a new function is created for each instance.
// This can be memory-intensive if you have a lot of instances, compared to the regular methods.
// Regular methods are shared between instances. They are created once and shared between all instances of the class.
// Regular methods are defined once on the prototype of the class and shared between all instances.
// Hence they are more memory-efficient compared to arrow functions in class fields.

// Functions like call, apply, and bind can be used to change the context of this in a function.
// But they are not useful for arrow functions because they have their this locked in when they are defined.
// Arrow functions cannot be bound to a different context using call, apply, or bind. ie you can not change the this context of an arrow function.