// Written by Daniel Tejada-Hernández
// friday, July 19st 2022
// From linkedin learning: JavaScript: Programación Orientada a Objetos

// Estáticas, son propiedades de la clase y no varian. 
function Convertidor(){
}

Convertidor.grados_a_radianes = Math.PI/180;
Convertidor.radianes_a_grados = 180/Math.PI;

console.log(`180° son ${180*Convertidor.grados_a_radianes} rad`);
console.log(`2PI rad son ${2*Math.PI*Convertidor.radianes_a_grados}°`);