// ***** Concatenación *****
let str1 = 'Hola';
let ejemploStr = `${str1} mundo`;
console.log(ejemploStr);

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
