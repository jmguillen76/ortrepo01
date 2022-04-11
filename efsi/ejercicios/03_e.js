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

const result = dupli
    .map(x => ({ original: x, modificado: Math.sqrt(x) }))
    .filter(x => !isNaN(x.modificado))
    .map(x => ({
        original: x.original,
        modificado: Number(x.modificado.toFixed(2))
    }));


console.log(result);
