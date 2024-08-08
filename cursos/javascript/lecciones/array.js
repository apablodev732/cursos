/*
// ***********  map *************************
let numbers = [1, 5, 10, 15];
let doubles = numbers.map(function (x) {
  return x * 2;
});
console.log(numbers);
console.log(doubles);

let numbers2 = [1, 5, 10, 15];
let arrayNum = numbers2.map(num => num * num)
console.log(numbers2);
console.log(arrayNum);

// ***** Array-Foreach *****
const array1 = ['a', 'b', 'c'];
array1.forEach((element) => console.log(element));

array1.forEach((element, index) => console.log(element, index));

array1.forEach(function(element, index) {
    console.log(element, index);
})

// Usar foreach en funcion
let numeros = [3, 6, 8, 10, 12]
let nombres = ["anna", "beth", "chris", "daniel", "ethan"]

function pasarLista(nombre, indice) {
    console.log(`Está el numero de estudiante ${indice + 1}  - ${nombre} - presente? Sí!`)
    ;}

numeros.forEach((nombre, indice) => pasarLista(nombre, indice));

// Salid de foreach
let numeros2 = [2, 4, 5, 8, 12]
let impar = 5;

numeros2.every(numero => {
  if (numero == impar) {
    return false;
  }

  console.log(numero);
  
  return true;
});

let sum = 0;

numbers.forEach( number =>{
  sum += number
});

console.log(numbers);
console.log(sum);

*/


// *****************  SPREAD *******************
const array1a = [1, 2, 3, 4, 4];
const array2a = [5, 6, 7, 8, 9];
// COPIAR
const copyArray1 = [...array1a];
//combinar
const combinaArray = [...array1a, ...array2a];
// Agregar
const addElemArray = [...array2a, 10, 11, 12];

console.log(array1a);
console.log(copyArray1);
console.log(combinaArray);
console.log(addElemArray);

// en función
function sum(a,b,c){
  return a+ b +c
}
const numbersSum = [1, 2, 3];
const result =sum(...numbersSum);
console.log(result);





