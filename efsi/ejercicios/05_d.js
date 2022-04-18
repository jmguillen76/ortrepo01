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


const eliminadas = cartas_eliminadas(mazo);

console.log(`Se eliminan las cartas ${JSON.stringify(eliminadas)}`);

let suma = 0;
let count = 0;

for (let i = 0; i < mazo.length; i++) {
    const carta = mazo[i];

    if (!eliminadas.includes(carta.figura) && typeof carta.figura === 'number') {
        // console.log(carta.figura);
        count++;
        suma += carta.figura;
    }
    
}

// console.log(suma/4, count);

const promedio = suma/count;

console.log(`El promedio es ${promedio}`);


