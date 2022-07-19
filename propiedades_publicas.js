// Written by Daniel Tejada-Hernández
// friday, July 19st 2022
// From linkedin learning: JavaScript: Programación Orientada a Objetos

function Persona(){
    this.cedula = new String();
    this.nombre = new String();
}

let yo = new Persona();

yo.cedula = '123';
yo.nombre = 'Daniel'
console.log(yo);

//otra forma sería
let tu = new Persona();
tu['cedula'] = '456';
tu['nombre'] = 'Carmen';

