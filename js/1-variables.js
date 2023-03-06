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

function ejercicio4(){
    let nombreUsuario = prompt("Ingrese su nombre de usuario:");
    document.getElementById("ejercicio4paragraph").innerHTML = (`Hola ${nombreUsuario}`);
}

function ejercicio5(){
    let numero1 = parseInt(prompt("Ingrese el primer número"));
    let numero2 = parseInt(prompt("Ingrese el segundo número"));
    document.getElementById("ejercicio5paragraph").innerHTML = (`${numero1} + ${numero2} = ${numero1+numero2}`);
}

function ejercicio6(){
    let numero1 = parseInt(prompt("Ingrese el primer número"));
    let numero2 = parseInt(prompt("Ingrese el segundo número"));
    document.getElementById("ejercicio6paragraph").innerHTML = (`El número mayor es: ${Math.max(numero1, numero2)}`);
}

function ejercicio7(){
    let numero1 = parseInt(prompt("Ingrese el primer número"));
    let numero2 = parseInt(prompt("Ingrese el segundo número"));
    let numero3 = parseInt(prompt("Ingrese el tercer número"));
    document.getElementById("ejercicio7paragraph").innerHTML = (`El número mayor es: ${Math.max(numero1, numero2, numero3)}`);
}

function ejercicio8(){
    let numero1 = parseInt(prompt("Ingrese un número"));
    let mensaje = numero1%2==0?" es divisible en 2":" no es divisible en 2";
    document.getElementById("ejercicio8paragraph").innerHTML = (numero1 + mensaje);
}

function ejercicio9(){
    let frase = prompt("Ingrese una frase").toLowerCase();
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
    document.getElementById("ejercicio9paragraph").innerHTML = (`vocales en " ${frase} ": ${vocalesEnFrase}`);
}

function ejercicio10(){
    let numero = prompt("Ingrese un número");
    if (numero%2 == 0) {
        document.getElementById("ejercicio10paragraph").innerHTML = (`${numero} es divisible en 2`);
    } else if (numero%3 == 0) {
            document.getElementById("ejercicio10paragraph").innerHTML = (`${numero} es divisible en 3`);
        } else if (numero%5 == 0){
            document.getElementById("ejercicio10paragraph").innerHTML = (`${numero} es divisible en 5`);
        } else if (numero%7 == 0){
            document.getElementById("ejercicio10paragraph").innerHTML = (`${numero} es divisible en 7`);
        }
}

function ejercicio11(){
    let numero = parseInt(prompt("Ingrese un número"));
    if (numero%2 === 0) {
        document.getElementById("ejercicio11paragraph").innerHTML += (`${numero} es divisible en 2<br>`);
    }
    if (numero%3 === 0) {
        document.getElementById("ejercicio11paragraph").innerHTML += (`${numero} es divisible en 3<br>`);
    }
    if (numero%5 === 0){
        document.getElementById("ejercicio11paragraph").innerHTML += (`${numero} es divisible en 5<br>`);
    }
    if (numero%7 === 0){
        document.getElementById("ejercicio11paragraph").innerHTML += (`${numero} es divisible en 7<br>`);
        }
}

/*
seaside summer days scoreboard/ notice board
teenage blue scoreboard
CNY scoreboard
let frase = prompt();
const vocales = /[aeiouAEIOU]/g;
document.write(`vocales en la frase: ${frase.match(vocales)}`);
*/


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
