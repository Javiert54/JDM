// InicioProceso
// Escribir &quot;Introduce el primer número&quot;
// Leer numero1
// Escribir &quot;Introduce el segundo número&quot;
// Leer numero2
// //comparamos los dos números,
// //si el primero es mayor o igual que el segundo entra
// Si (numero1&gt;=numero2) Entonces
// //Si el numero1 y numero2 son iguales entra y escribe que son iguales
// //Sino lo son escribe que el numero1 es el mayor
// Si (numero1=numero2) Entonces
// escribir &quot;los números &quot; numero1 &quot; &quot; numero2 &quot; son iguales&quot;
// Sino
// Escribir numero1 &quot; es el mayor de los dos&quot;
// FinSi
// //Si el primer Si es falso, escribe que el numero2 es mayor
// Sino
// Escribir numero2 &quot; es el mayor de los dos&quot;
// FinSi
// FinProceso

function comparar(){

    var primer = Number(document.getElementById("primer").value);
    var segundo = Number(document.getElementById("segundo").value);
    if(primer>segundo){
        console.log(primer +" > "+ segundo);
    }
    else if(primer==segundo){
        console.log(primer +" = "+ segundo);
    }
    else {
        console.log(primer +" < "+ segundo);
    }
}