const miobjeto = { alpha: 1, beta: 2, gamma: 100 };

const f1 = (miobjeto) => {

    console.log(
        miobjeto.alpha, 
        miobjeto.beta, 
        miobjeto.gamma
    );
};

const f2 = ({ alpha, beta, gamma }) => {
    console.log(alpha, beta, gamma);
};

f1(miobjeto);
f2(miobjeto);


const miarray = [99, 100];

const [v1, v2] = miarray;

console.log(v1, v2);
