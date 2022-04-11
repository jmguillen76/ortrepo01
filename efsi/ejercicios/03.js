

// [1, 2, 3] -> [1, 2, 3, 1, 2, 3]
// Duplicar el array anterior y aplicarle la funcion raíz cuadrada 
// obteniendo un nuevo array

const data = [
    2, 3, 5, 12, 54, 5, 
    -1, 0, 4, 23, 66, 7
];

const dupli = data.concat(data);
// const dupli = [...data, ...data];

console.log(data.length, dupli.length);
console.log(dupli);