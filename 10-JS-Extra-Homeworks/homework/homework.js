// No cambies los nombres de las funciones.

function deObjetoAmatriz(objeto) {
  // Escribe una función que convierta un objeto en una matriz, donde cada elemento representa
  // un par clave-valor en forma de matriz.
  //Ejemplo:
  /*objeto({
      D: 1,
      B: 2,
      C: 3
    }) ➞ [["D", 1], ["B", 2], ["C", 3]]*/
  let arrayKeys = Object.keys(objeto);
  let objetoAMatriz = arrayKeys.map((key) => {
    return [`${key}`, objeto[`${key}`]];
  });
  return objetoAMatriz;
}

function numberOfCharacters(string) {
  //La función recibe un string. Recorre el srting y devuelve el caracter con el número de veces que aparece
  //en formato par clave-valor.
  //Ej: Recibe ---> "adsjfdsfsfjsdjfhacabcsbajda" || Devuelve ---> { a: 5, b: 2, c: 2, d: 4, f: 4, h:1, j: 4, s: 5 }
  let objeto = {};
  const arrayCaraceteres = string.split("");
  for (let i = 0; i < arrayCaraceteres.length; i++) {
    let c = 0;
    for (let j = 0; j < arrayCaraceteres.length; j++) {
      if (i != j) {
        if (arrayCaraceteres[i] === arrayCaraceteres[j]) {
          c = c + 1;
        }
      } else {
        c = c + 1;
      }
    }
    objeto[`${arrayCaraceteres[i]}`] = c;
  }
  return objeto;
}

function capToFront(s) {
  //Realiza una función que reciba como parámetro un string y mueva todas las letras mayúsculas
  //al principio de la palabra.
  //Ejemplo: soyHENRY -> HENRYsoy
  let arrayString = s.split("");
  let mayusculas = [];
  let minusculas = [];
  for (let i = 0; i < arrayString.length; i++) {
    if (arrayString[i] === arrayString[i].toUpperCase()) {
      mayusculas.push(arrayString[i]);
    } else {
      minusculas.push(arrayString[i]);
    }
  }
  return mayusculas.join("") + minusculas.join("");
}

function asAmirror(str) {
  //La función recibe una frase.
  //Escribe una función que tome la frase recibida y la devuelva de modo tal que se pueda leer de izquierda a derecha
  //pero con cada una de sus palabras invertidas, como si fuera un espejo.
  //Ej: Recibe ---> "The Henry Challenge is close!" || Devuelve ---> "ehT yrneH egnellahC si !esolc"
  let arrayFrase = str.split(" ");
  let fraseMirror = [];
  let lng = arrayFrase.length;
  for (let i = 0; i < lng; i++) {
    let palabra = arrayFrase[i];
    let c = arrayFrase[i].length - 1;
    let cadenaMirror = "";
    while (c >= 0) {
      cadenaMirror += palabra.charAt(c);
      c--;
    }
    fraseMirror.push(cadenaMirror);
  }
  return fraseMirror.join(" ");
}

function capicua(numero) {
  //Escribe una función, la cual recibe un número y determina si es o no capicúa.
  //La misma debe retornar: "Es capicua" si el número se número que se lee igual de
  //izquierda a derecha que de derecha a izquierda. Caso contrario retorna "No es capicua"
  let numeroEnString = numero.toString();
  let c = numeroEnString.length - 1;
  let numeroCadena = "";
  while (c >= 0) {
    numeroCadena += numeroEnString.charAt(c);
    c--;
  }
  if (parseInt(numeroCadena) === numero) {
    return "Es capicua";
  } else return "No es capicua";
}

function deleteAbc(cadena) {
  //Define una función que elimine las letras "a", "b" y "c" de la cadena dada
  //y devuelva la versión modificada o la misma cadena, en caso de contener dichas letras.
  let arrayCadena = cadena.split("");
  const cadenaModificada = arrayCadena.filter(
    (letra) =>
      (letra.toLowerCase() != "a") &
      (letra.toLowerCase() != "b") &
      (letra.toLowerCase() != "c")
  );
  return cadenaModificada.join("");
}

function sortArray(arr) {
  //La función recibe una matriz de strings. Ordena la matriz en orden creciente de longitudes de cadena
  //Ej: Recibe ---> ["You", "are", "beautiful", "looking"] || Devuelve ---> [“You", "are", "looking", "beautiful"]
  for (let i = 0; i < arr.length; i++) {
    if (i > 0 && i < arr.length - 1) {
      // intercambiar con la posicion siguiente y lo que llegue si es necesario retroceder una posicion
      if (arr[i].length > arr[i + 1].length) {
        let datoQavanza = arr[i];
        arr[i] = arr[i + 1];
        arr[i + 1] = datoQavanza;
        if (arr[i].length < arr[i - 1].length) {
          let datoQretrocede = arr[i];
          arr[i] = arr[i - 1];
          arr[i - 1] = datoQretrocede;
        }
      }
    } else if (i === 0) {
      // la palabra avanza una posicion si es mayor a la siguiente
      if (arr[i].length > arr[i + 1].length) {
        let datoQsube = arr[i];
        arr[i] = arr[i + 1];
        arr[i + 1] = datoQsube;
      }
    }
  }
  return arr;
}

function buscoInterseccion(arreglo1, arreglo2) {
  //Existen dos arrays, cada uno con 5 números. A partir de ello, escribir una función que permita
  //retornar un nuevo array con la intersección de ambos elementos. (Ej: [4,2,3] unión [1,3,4] = [3,4].
  //Si no tienen elementos en común, retornar un arreglo vacío.
  //Aclaración: los arreglos no necesariamente tienen la misma longitud
  let nuevoArray = [];
  for (let i = 0; i < arreglo1.length; i++) {
    for (let j = 0; j < arreglo2.length; j++) {
      if (arreglo1[i] === arreglo2[j]) {
        nuevoArray.push(arreglo1[i]);
      }
    }
  }
  return nuevoArray;
}

// No modificar nada debajo de esta línea
// --------------------------------

module.exports = {
  deObjetoAmatriz,
  numberOfCharacters,
  capToFront,
  asAmirror,
  capicua,
  deleteAbc,
  sortArray,
  buscoInterseccion,
};
