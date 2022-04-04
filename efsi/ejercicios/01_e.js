// De la lista 11, 33, 2, -1, 110, 99, 8 obtener 
// el segundo mayor impar.

const data = [11, 9, 2, -1, 110, 99, 8];

function sort2(a, b) { return b - a; } 

const results = data.filter(x => x%2 !== 0).sort(sort2);

console.log(results[1]);


