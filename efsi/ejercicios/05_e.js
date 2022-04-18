// ¿Cuántas cartas con número par y negras hay en una 
// baraja de poker?

// Eliminar 6 cartas de la baraja al azar y calcular en promedio
// (haciendo 1000 iteraciones) cuanto valen las cartas (con número)
// que quedan.

const palos = ['pique', 'diamante', 'corazón', 'trébol'];

const figuras = [
    'A',
    2, 3, 4, 5, 6, 7, 8, 9, 10,
    'J', 'Q', 'K'
];

const mazo = [];

let id = 0;

for (const palo of palos) {

    const color = palo === 'diamante' || palo === 'corazón' ? 'rojo' : 'negro'

    for (const figura of figuras) {
        mazo.push({
            id: id++,
            palo,
            figura,
            color
        });

    }

}

const carta_al_azar = (mazo) => Math.round(Math.random() * mazo.length)

const cartas_eliminadas = (mazo) => {

    const eliminadas = [];

    for (let i = 1; i <= 6; i++) {
        eliminadas.push(carta_al_azar(mazo));
    }

    return eliminadas;

}

const promedio = (mazo) => {

    const eliminadas = cartas_eliminadas(mazo);

    let suma = 0;
    let count = 0;

    for (let i = 0; i < mazo.length; i++) {
        const carta = mazo[i];

        if (!eliminadas.includes(carta.figura) && typeof carta.figura === 'number') {
            count++;
            suma += carta.figura;
        }

    }

    const promedio = suma / count;

    return promedio;

}

let suma = 0;
const limit = 100000;
let promedio_total;

for (let k = 1; k <= limit; k++) {

    suma += promedio(mazo);

    promedio_total = suma / limit;

}

console.log(promedio_total);




