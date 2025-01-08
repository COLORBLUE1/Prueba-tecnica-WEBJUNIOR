class Persona {
  constructor(nombre, edad) {
    this.nombre = nombre;
    this.edad = edad;
  }

  saludar() {
    console.log(`Hola, mi nombre es ${this.nombre} y tengo ${this.edad} años.`);
  }
}

//Se crea un objeto de la clase y se llama al metodo
const Personaone = new Persona("abel", 30);
Personaone.saludar();
