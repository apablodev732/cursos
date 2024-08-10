/*this hace referencia al objeto
 this en la clase, hace referencia a los parametos del constructor.
 para que los valores de los parametros puedan existir en el objeto
 */

 class Persona{
    constructor(nombre, edad){
        this.nombre = nombre;
        this.edad = edad;
    }
 }

 const persona1 = new Persona('Alice', 34)
console.log(persona1);
// el this etsa haciendo referencia ala clase padre
persona1.nuevoMetodo = function(){
    console.log(`Mi nombre es ${this.nombre}`);
}

persona1.nuevoMetodo();
