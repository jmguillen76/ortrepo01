const miarray = [1, 2, 3, 4];

const otroarray = [99, 100, ...miarray];

console.log(otroarray);

const miobjeto = {
    default: true,
    health: 100,
    points: 0
};

const otroobjecto = {
    ...miobjeto,
    points: 200
};

console.log(miobjeto);
console.log(otroobjecto);