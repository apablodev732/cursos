class Persona {
   // funcion constructora
    constructor(nombre,edad){
        //Atrinbutos -propiedades
        this.nombre = nombre;
        this.edad = edad;
    }
    //metodo
    saludar(){
        console.log(`Hola mi nombre es  ${this.nombre} y tengo ${this.nombre}`);
    }
}
// instancias
const persona1 = new Persona('Alejandro','37');
const persona2 = new Persona('Adriana','35');

// llamnado metodo de la clase, atravez de la instancia
persona1.saludar();
persona2.saludar();

// clase molde (padre)=> genera un prototipo
class Animal{
    constructor(nombre, tipo){
        this.nombre = nombre;
        this.tipo = tipo;
    }
    emitirSonido(){
        console.log('El animal emite sonido');  
    }

    trucos(){
        console.log('hace trucos');  
    }
}

// clase hija-hereda 
class Perro extends Animal{
    constructor(nombre, tipo, raza){
        // super trae los atributos de la clase padre
        super(nombre, tipo);
        this.raza = raza;
    }
    emitirSonido(){
        console.log('El perro Ladra');
    }

    correr(){
        console.log(`${this.nombre} corre alegremente`);
    }
}

// se crea instancia
const perro1 = new Perro('Max','Perro','maltes');
console.log(perro1);

perro1.correr();
perro1.emitirSonido();
perro1.trucos();



// Se agrega metodo a la instancia
perro1.nuevoMetodo = function(){
    console.log('Este es un metodo');
}

// Se inyecta metopdo a la clase -prototipo
Perro.prototype.segundoMetodo = function(){
    console.log('este es el segundo metodo');
}

perro1.segundoMetodo();






