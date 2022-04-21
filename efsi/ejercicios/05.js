// ¿Cuántas cartas con número par y negras hay en una 
// baraja de poker?

// Eliminar 6 cartas de la baraja al azar y calcular en promedio
// (haciendo 1000 iteraciones) cuanto valen las cartas (con número)
// que quedan.

const { palos, figuras } = require('./05_mod.js');

const mazo = [];

for (const palo of palos) {

    const color = palo === 'diamante' || palo === 'corazón' ? 'rojo' : 'negro'

    for (const figura of figuras) {
        mazo.push({
            palo,
            figura,
            color
        });
        
    }
    
}

console.log(mazo);

let count = 0;

for (const carta of mazo) {
    if(carta.color === 'negro' && carta.figura % 2 === 0) {
        count++;
    }
}

console.log(`Existen ${count} cartas par y negras`);