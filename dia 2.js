let nombre = prompt("¿Cual es tu nombre?");
let edad = prompt("¿cual es tu edad?");
let lenguaje = prompt("¿Que lenguaje de programación estas estudiando?");

alert(`Hola ${nombre}, tienes ${edad} años y ya estás aprendiendo ${lenguaje}!`);


let respuesta = prompt(`¿Te gusta estudiar ${lenguaje}?. para responder si presiona 1 o presiona 2 para responder no` );

console.log(typeof[respuesta])
if(respuesta === "1"){

    alert("¡Muy bien! Sigue estudiando y tendrás mucho éxito.");

}
else{

    alert("Oh, qué pena... ¿Ya intentaste aprender otros lenguajes?");

}