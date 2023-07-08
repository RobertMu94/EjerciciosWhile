/**Ejercicio 1 */

/** let num = parseInt(prompt("Ingrese un número: "));

let i = 1;
while (i <= num) {
  if (i % 5 === 0) {
    console.log(i);
  }
  i++;
} */

/**Ejercicio 2 */

/**let num1 = parseInt(prompt("Ingrese primer número del 1 a 50: "));
let num2 = parseInt(prompt("Ingrese segundo número del 1 a 50: "));

let rango = 1

while(rango <= 50){
    if(rango === num1 ){
        console.log(rango + "“¡Lotería!” ");      
    }else if(rango == num2) { 
        console.log(rango + "“¡Lotería!” ");
    }else{
        console.log(rango);
    }
    rango++;
} */

/**Ejercicio 3 */

/**let numeros = [];
let iterancia = 1;
while (iterancia !== 0) {
    iterancia = parseInt(prompt("Ingrese numeros, termine el programa con el numero 0:"));
  if (!isNaN(iterancia)) {
    numeros.push(iterancia);
  }
}
console.log(numeros);
*/

/**Ejercicio 4 */

/**let letrasypalabras = [];
let entrada = prompt("Ingresa una palabra o letra");

while (entrada !== "") {
    letrasypalabras.push(entrada);
    entrada = prompt("Ingresa otra palabra o letra");
}

let concatenacion = letrasypalabras.join("");
console.log(concatenacion);*/

/**Ejercicio 5 */

/**let Dia = prompt("Ingresa un día de la semana (ej: lunes, jueves, domingo):");
let Diasemana = Dia.toLowerCase();

while(Diasemana !== "domingo"){
    Diasemana = prompt("Ingresa un día de la semana (ej: lunes, jueves, domingo):");
    
    if(Diasemana == "lunes" ){
        alert("Comienzo de semana");
    }else if(Diasemana == "martes"){
        alert("Martes de locos");
    }else if(Diasemana == "miercoles"){
        alert("Miercoles ombligo de semana");
    }else if(Diasemana == "jueves"){
        alert("Juernes");
    }else if(Diasemana == "viernes"){
        alert("Be viernes");
    }else if(Diasemana == "sabado"){
        alert("Sabado el cuerpo lo sabe");
    }else if(Diasemana == "domingo"){
        alert("Ve a descansar");
    }else{
        alert("No ingreso ningun dia");
    }

}*/









