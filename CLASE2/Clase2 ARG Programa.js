//ej 1
var dato = 3;
function miFuncion(dato)
{
    console.log(typeof(dato));
}
miFuncion(dato);

//ej 2
var num1 = prompt("Ingrese el primer numero");
var num2 = prompt("Ingrese el segundo numero");
function resta(num1,num2)
{
    restanums = num1-num2;
    console.log(restanums);
}
resta(num1,num2);

//ej 3
var a = 1;
var b = 2;
console.log("Variable a: "+a, "Variable b: "+b );
function cambio(a,b)
{
    let aux = a;
    var a = b;
    var b = aux;
    console.log("Variable a: "+a, "Variable b: "+b );
}
cambio(a,b)

//ej 4
var ladocua = prompt("Ingrese el lado del cuadrado");
function cuadrado(ladocua)
{
    let perimetro = ladocua * 4;
    let area = ladocua * ladocua;
    console.log("Perimetro del cuadrado: "+perimetro, "Area del cuadrado: "+area);
}
cuadrado(ladocua);

//ej 5 
var temp = prompt("Ingrese una temperatura en Fahrenheit");
function grados(temp)
{
    let celsius = (temp - 32) * 5/9;
    console.log(temp+" grados Fahrenheit son : "+celsius+" grados Celsius")
}
grados (temp)

//ej 6
var fact = prompt("Ingrese el numero");
function factorial(fact)
{
    let uno = 1;
    let aux = fact
    for (aux; aux>0; aux--)
    {
      uno *= aux;  
    }
    console.log(uno);
}
factorial(fact);

//ej 7
var str = prompt("Ingrese la palabra/frase a verificar");
function palindromo(str) {
  let espacios = str.replace(/[\W_]/g, "").toLowerCase();
  let strRev = espacios.split("").reverse().join("");

  if (espacios === strRev)
  {
    console.log(str+" es palindromo");
  }
  else
  {
    console.log(str+" no es palindromo");
  }
}
palindromo(str);

//ej 8
var cadena = prompt("Ingrese una cadena");
function mayusminus(cadena)
{
    console.log("Cadena en mayusculas: "+cadena.toUpperCase());
    console.log("Cadena en minusculas: "+cadena.toLowerCase());
}
mayusminus(cadena);

//ej 9
var nota = prompt("Ingrese la nota");
function notas(nota)
{   
    if (nota > 0 && nota < 11)
    {
        if (nota > 0 && nota <= 3)
        {
            console.log("La nota "+nota+" es muy deficiente");
        }
        if (nota > 3 && nota <= 5)
        {
            console.log("La nota "+nota+" es insuficiente");
        }
        if (nota == 6)
        {
            console.log("La nota "+nota+" es suficiente");
        }
        if (nota == 7)
        {
            console.log("La nota "+nota+" es bien");
        }
        if (nota > 7 && nota <= 9)
        {
            console.log("La nota "+nota+" es notable");
        }
        if (nota == 10)
        {
            console.log("La nota "+nota+" es sobresaliente");
        }
    }
    else
    {
        console.log("Ingrese una nota valida");
    }
}
notas(nota);

//ej 10
var mes = prompt("Ingrese el numero de mes");
function diasmes(mes)
{
    if (mes > 0 && mes < 13)
    {
        if (mes == 2)
        {
            console.log("El mes "+mes+" tiene 28 dias")
        }
        if (mes == 1 || mes == 3 || mes == 5 || mes == 7 || mes == 8 || mes == 10 || mes == 12)
        {
            console.log("El mes "+mes+" tiene 31 dias")
        }
        if (mes == 4 || mes == 6 || mes == 9 || mes == 11)
        {
            console.log("El mes "+mes+" tiene 30 dias")
        }
    }
    else
    {
        console.log("Ingrese un numero valido")
    }
}
diasmes(mes);

//ej 11
var piramide = prompt("Ingrese un numero mayor que 0 y menor que 11");
function piramidenums(piramide)
{
    if (piramide > 0 && piramide < 11)
    {
        let aux = 1;
        let uno = ""
        for (aux; aux<=piramide;aux++)
        {
            uno += aux.toString(); 
            console.log(uno)
        }
    }
    else
    {
        console.log("Ingrese un numero valido");
    }
}
piramidenums(piramide);

//ej 12
var bultos = prompt("Ingrese la cantidad de bultos en stock");
var caja = prompt("Ingrese que cantidad de bultos entran en una caja");
function bultosencaja(bultos,caja)
{
    let aux = 0;
    let auxbultos = bultos
    while (auxbultos > caja)
    {
        aux += 1;
        auxbultos -= caja;
    }
    console.log("Se pueden llenar: "+aux+" cajas, sobran: "+auxbultos+" bultos");
}
bultosencaja(Number(bultos),Number(caja));

//ej 13
var codigo = prompt("Ingrese el codigo del auto");
function codigoautos(codigo)
{
    let Fiesta = "fiesta";
    let Focus = "focus";
    if (codigo == Fiesta || codigo == Focus)
    {
        if (codigo == Fiesta)
        {
            console.log("El descuento es del 5%");
        }
        if (codigo == Focus)
        {
            console.log("El descuento es del 10%");
        }
    }
    else
    {
        console.log("Ingrese un codigo valido");
    }
}
codigoautos(codigo);