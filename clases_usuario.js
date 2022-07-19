// Written by Daniel Tejada-Hernández
// friday, July 19st 2022
// From linkedin learning: JavaScript: Programación Orientada a Objetos


// En javascript todos los elementos son objetos. 
let fecha = new Date();
console.log(fecha.getFullYear());

/* 
En javascript una clase se define con una función, no existe la palabra class y se carece del constructor.
La función se considera una función constructora,  esta se combina con la función new para crear una instancia. 
*/
function Persona(){
}

/*
Esta linea:
1.crea un objeto generico, del tipo object 
2. asigna al prototipo la función constructora
3. ejecuta la función constructora
4. devuelve la ese objeto de tipo object 
*/
let yo = new Persona(); 

// Propiedades estaticas (que pertenecen a la clase), privadas y estáticas (javascript no tiene tipado estricto)