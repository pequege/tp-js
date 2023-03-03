//asd
/*
let nombreUsuario = "Gerardo Mansilla";
let anio = 2023


console.log(`${nombreUsuario} es alumno del año ${anio}`);
document.write(nombreUsuario + " es alumno del año " + anio);
*/

function ejercicio1(){
    //main.innerHTML(`alert("un mensaje")`);
    console.log("click!")
    alert("un mensaje");
}

function ejercicio2(){
    document.getElementById("ejercicio2paragraph").innerHTML = "Hello World";
}

function ejercicio3(){
    document.getElementById("ejercicio3paragraph").innerHTML = 3 + 5;
}

/*
document.write(3 + 5);

let nombreUsuario = prompt();
document.write(`Hola ${nombreUsuario}`);*/

/*
let numero1 = parseInt(prompt());
let numero2 = parseInt(prompt());
document.write(`${numero1} + ${numero2} = ${numero1+numero2}`);
*/
/*
let numero1 = parseInt(prompt());
let numero2 = parseInt(prompt());
document.write(`El número mayor es: ${Math.max(numero1, numero2)}`);
*/
/*
let numero1 = parseInt(prompt());
let numero2 = parseInt(prompt());
let numero3 = parseInt(prompt());
document.write(`El número mayor es: ${Math.max(numero1, numero2, numero3)}`);
*/
/*
let numero1 = parseInt(prompt());
let mensaje = numero1%2==0?" es divisible en 2":" no es divisible en 2";
document.write(numero1 + mensaje);
*/
/*
let frase = prompt();
const vocales = /[aeiouAEIOU]/g;
document.write(`vocales en la frase: ${frase.match(vocales)}`);
*/

/* let frase = prompt("Ingrese una frase").toLowerCase();
let vocalesEnFrase = "";

console.log(frase.substring(""));
for (let i = 0; i < frase.length; i++) {
    switch(frase.charAt(i)){
        case "a":
            vocalesEnFrase += "a";
            break;
        case "e":
            vocalesEnFrase += "e";
            break;
        case "i":
            vocalesEnFrase += "i";
            break;
        case "o":
            vocalesEnFrase += "o";
            break;
        case "u":
            vocalesEnFrase += "u";
            break;
        default:
            break;
    }
}
document.write(`vocales en " ${frase} ": ${vocalesEnFrase}`); */

/* let numero = prompt();
if (numero%2 == 0) {
    document.write(`${numero} es divisible en 2`);
} else if (numero%3 == 0) {
        document.write(`${numero} es divisible en 3`);
    } else if (numero%5 == 0){
        document.write(`${numero} es divisible en 5`);
    } else if (numero%7 == 0){
        document.write(`${numero} es divisible en 7`);
    } */


/*
let numero = parseInt(prompt("Ingrese un número"));
console.log(numero);
if (numero%2 === 0) {
    document.write(`${numero} es divisible en 2<br>`);
    console.log(`${numero} es divisible en 2<br>`)
    if (numero%3 == 0) {
        document.write(`${numero} es divisible en 3<br>`);
        if (numero%5 == 0){
            document.write(`${numero} es divisible en 5<br>`);
            console.log(`${numero} es divisible en 5<br>`)
            if (numero%7 == 0){
                document.write(`${numero} es divisible en 7<br>`);
            }
        }
    }
}else{
    document.write(`${numero} no es divisible en 2,3,5 ni 7`);
}
*/

/* switch (numero) {
    case numero%2 == 0:
        document.write(`${numero} es divisible en 2`);
        break;
    case numero%3 == 0:
        document.write(`${numero} es divisible en 3`);
        break;
    case numero%5 == 0:
        document.write(`${numero} es divisible en 5`);
        break;
    case numero%7 == 0:
        document.write(`${numero} es divisible en 7`);
        break;
    default:
        document.write(`${numero} no es divisible en 2,3,5 ni 7`);
        break;
} */
