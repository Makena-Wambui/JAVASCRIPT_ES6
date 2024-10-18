// Use blocks to encapsulate data.
// let and const declarations are scoped  to containing block.
// You can hide data from the global scope without needing to wrap it in a function.
let sector;

{
	// these variables are scoped to this block and are not acccessible outside of this block.
	const angle = Math.PI / 3;
	const r = 10;

	sector = {
		r,
		angle,
		area: (angle / 360) * Math.PI * r * r,
		perimeter: (angle / 360) * Math.PI * (r * 2) + r + r,
	};
}

console.log(sector);

console.log(typeof radius);
