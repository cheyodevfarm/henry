// En estas primeras 6 preguntas, reemplaza `null` por la respuesta

// Crea una variable "string", puede contener lo que quieras:
const nuevaString = "cheyo";

// Crea una variable numérica, puede ser cualquier número:
const nuevoNum = 5;

// Crea una variable booleana:
const nuevoBool = false;

// Resuelve el siguiente problema matemático:
const nuevaResta = 10 - nuevoNum === 5;

// Resuelve el siguiente problema matemático:
const nuevaMultiplicacion = 10 * 4 === 40;

// Resuelve el siguiente problema matemático:
const nuevoModulo = 21 % 5 === 1;

// En los próximos 22 problemas, deberás completar la función.
// Todo tu código irá dentro de las llaves de la función.
// Asegúrate que usas "return" cuando la consola te lo pida.
// Pista: "console.log()" NO fucionará.
// No cambies los nombres de las funciones.

function devolverString(str) {
  // "Return" la string provista: str
  return str;
}

function suma(x, y) {
  // "x" e "y" son números
  // Suma "x" e "y" juntos y devuelve el valor
  var result = x + y;
  return result;
}

function resta(x, y) {
  // Resta "y" de "x" y devuelve el valor
  var result = x - y;
  return result;
}

function multiplica(x, y) {
  // Multiplica "x" por "y" y devuelve el valor
  var result = x * y;
  return result;
}

function divide(x, y) {
  // Divide "x" entre "y" y devuelve el valor
  var result = x / y;
  return result;
}

function sonIguales(x, y) {
  // Devuelve "true" si "x" e "y" son iguales
  // De lo contrario, devuelve "false"
  if (x === y) {
    return true;
  } else {
    return false;
  }
}

function tienenMismaLongitud(str1, str2) {
  // Devuelve "true" si las dos strings tienen la misma longitud
  // De lo contrario, devuelve "false"
  var lngStr1 = str1.length;
  var lngStr2 = str2.length;
  if (lngStr1 === lngStr2) {
    return true;
  } else {
    return false;
  }
}

function menosQueNoventa(num) {
  // Devuelve "true" si el argumento de la función "num" es menor que noventa
  // De lo contrario, devuelve "false"
  if (num < 90) {
    return true;
  } else {
    return false;
  }
}

function mayorQueCincuenta(num) {
  // Devuelve "true" si el argumento de la función "num" es mayor que cincuenta
  // De lo contrario, devuelve "false"
  if (num > 50) {
    return true;
  } else {
    return false;
  }
}

function obtenerResto(x, y) {
  // Obten el resto de la división de "x" entre "y"
  var resto = x % y;
  return resto;
}

function esPar(num) {
  // Devuelve "true" si "num" es par
  // De lo contrario, devuelve "false"
  var resto = num % 2;
  if (resto === 0) {
    return true;
  } else {
    return false;
  }
}

function esImpar(num) {
  // Devuelve "true" si "num" es impar
  // De lo contrario, devuelve "false"
  var resto = num % 2;
  if (resto !== 0) {
    return true;
  } else {
    return false;
  }
}

function elevarAlCuadrado(num) {
  // Devuelve el valor de "num" elevado al cuadrado
  // ojo: No es raiz cuadrada!
  var potenciaCuadrada = Math.pow(num, 2);
  return potenciaCuadrada;
}

function elevarAlCubo(num) {
  // Devuelve el valor de "num" elevado al cubo
  var potenciaCubo = Math.pow(num, 3);
  return potenciaCubo;
}

function elevar(num, exponent) {
  // Devuelve el valor de "num" elevado al exponente dado en "exponent"
  var resultadoPotencia = Math.pow(num, exponent);
  return resultadoPotencia;
}

function redondearNumero(num) {
  // Redondea "num" al entero más próximo y devuélvelo
  var redondeado = Math.round(num);
  return redondeado;
}

function redondearHaciaArriba(num) {
  // Redondea "num" hacia arriba (al próximo entero) y devuélvelo
  var redondeado = Math.ceil(num);
  return redondeado;
}

function numeroRandom() {
  //Generar un número al azar entre 0 y 1 y devolverlo
  //Pista: investigá qué hace el método Math.random()
  var numeroAleatorio = Math.random();
  return numeroAleatorio;
}

function esPositivo(numero) {
  //La función va a recibir un entero. Devuelve como resultado una cadena de texto que indica si el número es positivo o negativo.
  //Si el número es positivo, devolver ---> "Es positivo"
  //Si el número es negativo, devolver ---> "Es negativo"
  //Si el número es 0, devuelve false
  if (numero > 0) {
    return "Es positivo";
  } else if (numero === 0) {
    return false;
  } else {
    return "Es negativo";
  }
}

function agregarSimboloExclamacion(str) {
  // Agrega un símbolo de exclamación al final de la string "str" y devuelve una nueva string
  // Ejemplo: "hello world" pasaría a ser "hello world!"
  var nuevaString = str + "!";
  return nuevaString;
}

function combinarNombres(nombre, apellido) {
  // Devuelve "nombre" y "apellido" combinados en una string y separados por un espacio.
  // Ejemplo: "Soy", "Henry" -> "Soy Henry"
  var nombreCombinado = `${nombre} ${apellido}`;
  return nombreCombinado;
}

function obtenerSaludo(nombre) {
  // Toma la string "nombre" y concatena otras string en la cadena para que tome la siguiente forma:
  // "Martin" -> "Hola Martin!"
  var saludo = "Hola " + nombre + "!";
  return saludo;
}

function obtenerAreaRectangulo(alto, ancho) {
  // Retornar el area de un rectángulo teniendo su altura y ancho
  var area = ancho * alto;
  return area;
}

function retornarPerimetro(lado) {
  //Escibe una función a la cual reciba el valor del lado de un cuadrado y retorne su perímetro.
  var perimetro = lado * 4;
  return perimetro;
}

function areaDelTriangulo(base, altura) {
  //Desarrolle una función que calcule el área de un triángulo.
  var area = (base * altura) / 2;
  return area;
}

function deEuroAdolar(euro) {
  //Supongamos que 1 euro equivale a 1.20 dólares. Escribe un programa que reciba
  //como parámetro un número de euros y calcule el cambio en dólares.
  var cotizEnDolar = 1.2;
  var conversion = euro * cotizEnDolar;
  return conversion;
}

function esVocal(letra) {
  //Escribe una función que reciba una letra y, si es una vocal, muestre el mensaje “Es vocal”.
  //Verificar si el usuario ingresó un string de más de un carácter y, en ese caso, informarle
  //que no se puede procesar el dato mediante el mensaje "Dato incorrecto".
  var lngLetra = letra.length;
  if (lngLetra === 1) {
    var vocales = ["a", "e", "i", "o", "u"];
    var esVocal = false;
    for (let i = 0; i < vocales.length; i++) {
      if (letra.toLowerCase() === vocales[i]) {
        esVocal = true;
        break;
      }
    }
    if (esVocal) {
      return "Es vocal";
    } else {
      return "Dato incorrecto";
    }
  } else {
    return "Dato incorrecto";
  }
}

// No modificar nada debajo de esta línea
// --------------------------------

module.exports = {
  nuevaString,
  nuevoNum,
  nuevoBool,
  nuevaResta,
  nuevaMultiplicacion,
  nuevoModulo,
  devolverString,
  tienenMismaLongitud,
  sonIguales,
  menosQueNoventa,
  mayorQueCincuenta,
  suma,
  resta,
  divide,
  multiplica,
  obtenerResto,
  esPar,
  esImpar,
  elevarAlCuadrado,
  elevarAlCubo,
  elevar,
  redondearNumero,
  redondearHaciaArriba,
  numeroRandom,
  esPositivo,
  agregarSimboloExclamacion,
  combinarNombres,
  obtenerSaludo,
  obtenerAreaRectangulo,
  retornarPerimetro,
  areaDelTriangulo,
  deEuroAdolar,
  esVocal,
};
