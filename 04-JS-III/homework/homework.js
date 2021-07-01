// No cambies los nombres de las funciones.

function devolverPrimerElemento(array) {
  // Devuelve el primer elemento de un array
  return array[0];
}

function devolverUltimoElemento(array) {
  // Devuelve el último elemento de un array
  // Tu código:
  var longitud = array.length;
  var ultimo = longitud - 1;
  return array[ultimo];
}

function obtenerLargoDelArray(array) {
  // Devuelve el largo de un array
  return array.length;
}

function incrementarPorUno(array) {
  // "array" debe ser una matriz de enteros (int/integers)
  // Aumenta cada entero por 1
  // y devuelve el array
  array.map((item, index) => {
    array[index] = item + 1;
  });
  return array;
}

function agregarItemAlFinalDelArray(array, elemento) {
  // Añade el "elemento" al final del array
  // y devuelve el array
  array.push(elemento);
  return array;
}

function agregarItemAlComienzoDelArray(array, elemento) {
  // Añade el "elemento" al comienzo del array
  // y devuelve el array
  // Pista: usa el método `.unshift`
  array.unshift(elemento);
  return array;
}

function dePalabrasAFrase(palabras) {
  // "palabras" es un array de strings/cadenas
  // Devuelve un string donde todas las palabras estén concatenadas
  // con espacios entre cada palabra
  // Ejemplo: ['Hello', 'world!'] -> 'Hello world!'
  var cadena = "";
  palabras.map((palabra) => {
    if (cadena === "") {
      cadena = palabra;
    } else {
      cadena = cadena + " " + palabra;
    }
  });
  return cadena;
}

function arrayContiene(array, elemento) {
  // Comprueba si el elemento existe dentro de "array"
  // Devuelve "true" si está, o "false" si no está
  const dato = array.filter((palabra) => palabra === elemento);
  if (dato.length) {
    return true;
  } else return false;
}

function agregarNumeros(numeros) {
  // "numeros" debe ser un arreglo de enteros (int/integers)
  // Suma todos los enteros y devuelve el valor
  var sumaNumeros = 0;
  numeros.map((numero) => {
    sumaNumeros = sumaNumeros + numero;
  });
  return sumaNumeros;
}

function promedioResultadosTest(resultadosTest) {
  // "resultadosTest" debe ser una matriz de enteros (int/integers)
  // Itera (en un bucle) los elementos del array, calcula y devuelve el promedio de puntajes
  var sumaNumeros = 0;
  resultadosTest.map((numero) => {
    sumaNumeros = sumaNumeros + numero;
  });
  var promedio = sumaNumeros / resultadosTest.length;
  return promedio;
}

function numeroMasGrande(numeros) {
  // "numeros" debe ser una matriz de enteros (int/integers)
  // Devuelve el número más grande
  var numMayor = 0;
  numeros.map((numero, index) => {
    if (index === 0) {
      numMayor = numero;
    } else if (numero > numMayor) {
      numMayor = numero;
    }
  });
  return numMayor;
}

function multiplicarArgumentos() {
  // Usa la palabra clave `arguments` para multiplicar todos los argumentos y devolver el producto
  // Si no se pasan argumentos devuelve 0. Si se pasa un argumento, simplemente devuélvelo
  // Escribe tu código aquí:
  if (arguments.length) {
    var producto = 1;
    for (let i = 0; i < arguments.length; i++) {
      producto = producto * arguments[i];
    }
    return producto;
  } else {
    return 0;
  }
}

function cuentoElementos(arreglo) {
  //Realiza una función que retorne la cantidad de los elementos del arreglo cuyo valor es mayor a 18.
  var contadorElementos = 0;
  arreglo.filter((item) => {
    if (item > 18) {
      contadorElementos = contadorElementos + 1;
    }
  });
  return contadorElementos;
}

function diaDeLaSemana(numeroDeDia) {
  //Suponga que los días de la semana se codifican como 1 = Domingo, 2 = Lunes y así sucesivamente.
  //Realiza una función que dado el número del día de la semana, retorne: Es fin de semana
  //si el día corresponde a Sábado o Domingo y “Es dia Laboral” en caso contrario.
  if (numeroDeDia > 1 && numeroDeDia < 7) {
    return "Es dia Laboral";
  } else return "Es fin de semana";
}

function empiezaConNueve(n) {
  //Desarrolle una función que recibe como parámetro un número entero n. Debe retornar true si el entero
  //inicia con 9 y false en otro caso.
  var numeroAString = n.toString();
  // numeroAString = n;
  if (parseInt(numeroAString.charAt(0)) === 9) {
    return true;
  } else return false;
}

function todosIguales(arreglo) {
  //Escriba la función todosIguales, que indique si todos los elementos de un arreglo son iguales:
  //retornar true, caso contrario retornar false.
  var primerElemento = arreglo[0];
  for (let i = 1; i < arreglo.length; i++) {
    if (primerElemento !== arreglo[i]) {
      return false;
    }
  }
  return true;
}

function mesesDelAño(array) {
  //Dado un array que contiene algunos meses del año desordenados, recorrer el array buscando los meses de
  // "Enero", "Marzo" y "Noviembre", guardarlo en nuevo array y retornarlo.
  //Si alguno de los meses no está, devolver: "No se encontraron los meses pedidos"
  var mesesencontrados = array.filter((mes) => {
    if (mes === "Enero" || mes === "Marzo" || mes === "Noviembre") {
      return mes;
    }
  });
  if (mesesencontrados.length === 3) return mesesencontrados;
  else return "No se encontraron los meses pedidos";
}

function mayorACien(array) {
  //La función recibe un array con enteros entre 0 y 200. Recorrer el array y guardar en un nuevo array sólo los
  //valores mayores a 100 (no incluye el 100). Finalmente devolver el nuevo array.
  var mayoresACien = array.filter((valor) => {
    if (valor > 100) {
      return valor;
    }
  });
  return mayoresACien;
}

function breakStatement(numero) {
  //Iterar en un bucle aumentando en 2 el numero recibido hasta un límite de 10 veces.
  //Guardar cada nuevo valor en un array.
  //Devolver el array
  //Si en algún momento el valor de la suma y la cantidad de iteraciones coinciden, debe interrumpirse la ejecución y
  //devolver: "Se interrumpió la ejecución"
  //Pista: usá el statement 'break'
  var i = 1;
  var aumentadosEnDos = [];
  var interrupcion = false;
  var suma = numero;
  do {
    i = i + 1;
    if (suma === i) {
      interrupcion = true;
    } else {
      suma = suma + 2;
      aumentadosEnDos.push(suma);
    }
  } while (i <= 10);
  if (!interrupcion) {
    return aumentadosEnDos;
  } else return "Se interrumpió la ejecución";
}

function continueStatement(numero) {
  //Iterar en un bucle aumentando en 2 el numero recibido hasta un límite de 10 veces.
  //Guardar cada nuevo valor en un array.
  //Devolver el array
  //Cuando el número de iteraciones alcance el valor 5, no se suma en ese caso y se continua con la siguiente iteración
  //Pista: usá el statement 'continue'
  var i = 1;
  var nuevoArray = [];
  var suma = numero;
  do {
    i = i + 1;
    if (i === 5) {
      continue;
    }
    suma = suma + 2;
    nuevoArray.push(suma);
  } while (i <= 10);
  return nuevoArray;
}

// No modificar nada debajo de esta línea
// --------------------------------

module.exports = {
  devolverPrimerElemento,
  devolverUltimoElemento,
  obtenerLargoDelArray,
  incrementarPorUno,
  agregarItemAlFinalDelArray,
  agregarItemAlComienzoDelArray,
  dePalabrasAFrase,
  arrayContiene,
  agregarNumeros,
  promedioResultadosTest,
  numeroMasGrande,
  multiplicarArgumentos,
  cuentoElementos,
  diaDeLaSemana,
  empiezaConNueve,
  todosIguales,
  mesesDelAño,
  mayorACien,
  breakStatement,
  continueStatement,
};
