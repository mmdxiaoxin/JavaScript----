const arr1 = [0, 1, 2, [3, 4]];

console.log('default:', arr1.flat());

const arr2 = [0, 1, [2, [3, [4, 5]]]];

console.log('default:', arr2.flat());
console.log('deep1:', arr2.flat(1));
console.log('deep2:', arr2.flat(2));
console.log('all:', arr2.flat(Infinity));
