// function apresentar(nome){
//     return `meu nome é ${nome}`
// }
// console.log(apresentar("Guilherme"))

const apresentarArrow = nome => `meu nome é ${nome}`;
const soma = (num1, num2) => num1 + num2;
//console.log(soma(2,8))

// arrow com mais de 1 linha

const somaNumerosPequenos = (num1, num2) => {
    if (num1>=10 || num2>=10) {
        return "somente numeros de 1 a 9"
    } else{
        return num1 + num2;
    }
}
console.log(somaNumerosPequenos(10,2))