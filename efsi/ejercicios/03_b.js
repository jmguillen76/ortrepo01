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

const result = [];

for (let i = 0; i < dupli.length; i++) {

    const object = {
        original: dupli[i],
        modificado: Math.sqrt(dupli[i])
    };

    result.push(object);

}

console.log(result);
