// Do not change any of the function names

function mayuscula(nombre) {
  //La función recibe un nombre y debe devolver el mismo que recibe pero con su primer letra en mayúscula
  //ej: Recibe "mario" ----> Devuelve "Mario"
  let primerLetra = nombre.charAt(0);
  let mayuscula = primerLetra.toUpperCase();
  let restoPalabra = nombre.slice(1);
  let nombreAMayus = mayuscula + restoPalabra;
  return nombreAMayus;
}

function invocarCallback(cb) {
  // Invoca al callback `cb`
  cb();
}

function operacionMatematica(n1, n2, cb) {
  //Vamos a recibir una función que realiza una operación matemática como callback junto con dos números.
  //Devolver el callback pasándole como argumentos los números recibidos.
  return cb(n1, n2);
}

function sumarArray(numeros, cb) {
  // Suma todos los números enteros (int/integers) de un array ("numeros")
  // Pasa el resultado a `cb`
  // No es necesario devolver nada
  const suma = numeros.reduce((sum, numero) => {
    return sum + numero;
  });
  cb(suma);
}

function forEach(array, cb) {
  // Itera sobre la matriz "array" y pasa los valores al callback uno por uno
  // Pista: Estarás invocando a `cb` varias veces (una por cada valor en la matriz)
  array.forEach((valor) => {
    cb(valor);
  });
}

function map(array, cb) {
  // Crea un nuevo array
  // Itera sobre cada valor en "array", pásalo a `cb` y luego ubicar el valor devuelto por `cb` en un nuevo array
  // El nuevo array debe tener la misma longitud que el array del argumento
  let nuevoArray = array.map((valor) => {
    return cb(valor);
  });
  return nuevoArray;
}

function filter(array) {
  //Filtrar todos los elementos del array que comiencen con la letra "a".
  //Devolver un nuevo array con los elementos que cumplen la condición
  let palabarasConA = array.filter((item) => {
    const primerLetra = item.charAt(0);
    if (primerLetra.toLowerCase() === "a") {
      return item;
    }
  });
  return palabarasConA;
}

// No modificar nada debajo de esta línea
// --------------------------------

module.exports = {
  mayuscula,
  invocarCallback,
  operacionMatematica,
  sumarArray,
  forEach,
  map,
  filter,
};
