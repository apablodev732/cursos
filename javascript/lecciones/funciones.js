
// **************** Funciones Flecha **********************
const materials = ['Hydrogen', 'Helium', 'Lithium', 'Beryllium'];
console.log(materials.map((material) => material.length));

let sum = (a, b) => a + b;
console.log('resSum' + sum(1, 2));

// un parametro 
let double = n => n * 2;
console.log(double(3));

// sin parametros
let sayHi = () => console.log("¡Hola!");
sayHi();

// Multilinea
let sum2 = (a, b) => {  
    let result = a + b;
    return result; // si usamos llaves, entonces necesitamos un "return" explícito
  };
  console.log(sum2(1,5));

// explicit return
  const fun00 = (name) =>{
    return `Hi ${name}`;
}

// Implicit return un parametro
const fun02 = name => `Hi ${name}`;

// Implicit return uno o mas parametros
const fun01 = (name) => `Hi ${name}`;


// **************** Funciones **********************
// Exprecion de función
let a = function () {}


//****************** Closure ***********************

function outerFunction(){
    let outerVariable = 'Afuera de la función';
    function innterFunction(){
        console.log(outerVariable);
    }
    return innterFunction
}
const closureExample = outerFunction();
closureExample()

function crearContador(){
    let count = 0;
    return function(){
        count++;
        console.log(count);
    } 
}

const counterA = crearContador()
counterA();
counterA();

function outer(){
    let message = 'Hola, ';
    function inner(name){
        console.log(message +  name);
    }
    return inner
}

const closureA =  outer();
const closureB =  outer();

closureA('Alejandro');
closureA('Adriana');



