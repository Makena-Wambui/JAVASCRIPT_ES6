// In strict mode, function declarations within blocks are scoped to that block, and are hoisted to the top of the block.

"use strict";

{
        foo();
        function foo() {
                console.log('foo');
        }
        //foo();
}

foo(); // reference error 
