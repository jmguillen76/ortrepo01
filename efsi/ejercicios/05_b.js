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

let count = 0;

for (const carta of mazo) {
    if(carta.color === 'negro' && carta.figura % 2 === 0) {
        count++;
    }
}

console.log(`Existen ${count} cartas par y negras`);

const carta_al_azar = (mazo) => Math.round(Math.random() * mazo.length)

const rnd1 = carta_al_azar(mazo);

console.log(rnd1);