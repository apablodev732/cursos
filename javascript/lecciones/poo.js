// constructor
function Persona(nombre, apellido, edad){
    this.nombre = nombre;
    this.apellido = apellido;
    this.edad = edad;
}
const persona1 = new Persona('Alejandro', 'Pablo', 37);
const persona2 = new Persona('Adriana', 'Díaz', 35);


Persona.prototype.telefono = '55891200';

persona1.nacionalidad='Meicano';

console.log(persona1);
console.log(persona2);

Persona.prototype.saludar= function(){
    console.log('Hola me llamo'+ this.nombre + ' '+ this.apellido);
}

persona1.saludar();
persona2.saludar();
