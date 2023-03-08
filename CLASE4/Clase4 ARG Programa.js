// ej 1
var colores = ["red", "green", "blue", "yellow", "orange"];
console.log("EJ 1, Array colores: "+colores);

// ej 2
var blue = colores[2];
console.log("EJ 2, Tercer elemento del array colores: "+blue);

// ej 3
console.log("EJ 3, Posicion 0 del string de la posicion 0 ("+colores[0]+") del array: "+(colores[0])[0]);

// ej 4
function randomnum()
{
    let aux = Math.floor(Math.random() * 99) + 1;
    return aux
}
var random = randomnum();
console.log("EJ 4, Numero random: "+random);

// ej 5
var numeros = [];
function rellenarnums(numeros)
{
    let aux = 1;
    for (i = 0; i < 10; i++)
    {
        numeros.push(aux);
        aux += 1;
    }
}
rellenarnums(numeros);
console.log("EJ 5, Array con los 10 primeros numeros: "+numeros);

// ej 6
var numerosrandom = [];
function rellenarnumsrandom(numeros)
{
    for (i = 0; i < 10; i++)
    {
        let aux = randomnum();
        numeros.push(aux);
    }
}
rellenarnumsrandom(numerosrandom);
console.log("EJ 6, Array con 10 numeros random: "+numerosrandom);

// ej 7
var numerosrandom2 = [];
rellenarnumsrandom(numerosrandom2);
console.log("EJ 7, Copia diferente del array anterior: "+numerosrandom2);

// ej 8
function activar8()
{
    var cadena = prompt("Ingrese cadenas de texto, cuando desee terminar ingrese cancelar");
    var aux = "";
    while (cadena != "cancelar")
    {
        aux += cadena + "-";
        var cadena = prompt("Ingrese cadenas de texto, cuando desee terminar ingrese cancelar");
    } 
    let aux2 = aux.substr(0, aux.length - 1);
    console.log("EJ 8, Cadena: "+aux2);
}



// ej 8 PARTE 2 
function activar8Bis()
{
    var cadenaArray = prompt("Ingrese cadenas de texto para el array, cuando desee terminar ingrese cancelar");
    var auxArray = [];
    while (cadenaArray != "cancelar")
    {
        auxArray.push(cadenaArray);
        var cadenaArray = prompt("Ingrese cadenas de texto, cuando desee terminar ingrese cancelar");
    } 
    console.log(auxArray);
    auxArray.forEach(function(value)
    {
    console.log("Elemento: "+value);
    })
}


// ej 9
function convertirPeso()
{
    let dolar = document.getElementById("dolar").value;
    let aux = (dolar * 300);
    document.getElementById("resultadoPeso").innerHTML = dolar+" Dolares son: "+aux+" Pesos";
}

// ej 10
function convertirDolar()
{
    let pesos = document.getElementById("pesos").value;
    let aux = (pesos / 300);
    document.getElementById("resultadoDolar").innerHTML = pesos+" Pesos son: "+aux+" Dolares";
}

// ej 11
function convertirFahrenheit()
{
    let celsius = document.getElementById("celsius").value;
    let aux = ((celsius * 9/5) + 32);
    document.getElementById("resultadoFahrenheit").innerHTML = celsius+"º Celsius son: "+aux+"º Fahrenheit";
}

// ej 12
function enviarCaja()
{
    let nombre = document.getElementById("nombreCliente").value;
    let material = document.getElementById("tipoCaja").value;
    let tamanio = document.querySelector('input[name="caja"]:checked').value;
    let comentario = document.getElementById("comentario").value;
    document.getElementById("resultadoCaja").value = nombre+" ha pedido una caja de "+material+" con unas dimensiones "+tamanio+". "+comentario; 
}

// ej 13
var contadorIntentos = 3;
function adivinarNumero()
{
    let random = Math.floor(Math.random() * 6);
    let adivinanza = document.getElementById("numSecr").value;
    let button = document.getElementById("boton");
    if (random == adivinanza)
    {
        button.disabled = true;
        document.getElementById("cuadroTexto").value = "Ganaste";
    }
    else
    {
        contadorIntentos -= 1
        document.getElementById("contador").style.color =  "#FFF000";
        document.getElementById("contador").innerHTML = "Tenes "+(contadorIntentos)+" intento/s";
        document.getElementById("cuadroTexto").value = "Fallaste";
    }
    if (contadorIntentos == 0)
    {
        document.getElementById("contador").style.color =  "#FF0000";
        button.disabled = true
        document.getElementById("cuadroTexto").value = "Perdiste";
    }
}

// ej 14
function listaPersonas()
{
    let nombre = document.getElementById("ejFinal").value;
    let ul = document.getElementById("ul");
    let li = document.createElement("li");
    li.appendChild(document.createTextNode(nombre));
    ul.appendChild(li);
}