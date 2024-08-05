//2/8/24
//EJERCICIOS ARRAYS
//Agregar elementos al final de un array:
//● Crea un array vacío llamado numbers.
//● Agrega los números del 1 al 5 al array.
//● Imprime el array resultante.
//● Eliminar el último elemento del array.
let numbers = []
numbers.push(1,2,3,4,5)
console.log(numbers)
numbers.pop()
console.log(numbers)

//Utiliza el array numbers del ejercicio anterior.
//● Elimina el último número del array.
//● Imprime el array resultante.
//● Agregar elementos al principio del array.
numbers.pop()
console.log(numbers)
numbers.unshift(0)
console.log(numbers)

//Crea un array vacío llamado colors, agregando cada elemento al principio del array.
//● Agrega los siguientes colores al array en el siguiente orden: 'red', 'blue', 'green'
let colors = []
colors.unshift('red','blue','green')
console.log(colors)

//Eliminar el primer elemento de un array:
//● Utiliza el array colors del ejercicio anterior.
//● Elimina el primer color del array.
colors.shift()
console.log(colors)

//Agregar múltiples elementos al final de un array:
//● Crea un array vacío llamado fruits.
//● Agrega los siguientes elementos al array: 'apple', 'banana', 'orange'.
let fruits = []
fruits.push('apple','banana','orange')

//Eliminar múltiples elementos al final de un array:
//● Utiliza el array fruits del ejercicio anterior.
//● Elimina los últimos dos elementos del array utilizando el método pop.
fruits.pop()
fruits.pop()
console.log(fruits)

//Agregar múltiples elementos al principio de un array:
//● Utiliza el array fruits del ejercicio 5.
//● Agrega los siguientes elementos al principio del array: 'grape', 'kiwi'.
fruits.unshift('grape','kiwi')
console.log(fruits)

//Eliminar múltiples elementos al principio de un array:
//● Utiliza el array fruits del ejercicio anterior.
//● Elimina los primeros dos elementos del array.
fruits.shift()
fruits.shift()
console.log(fruits)

//Agregar un elemento específico al final de un array:
//● Utiliza el array colors del ejercicio 3.
//● Agrega el color 'yellow' al final del array.
colors.push('yellow')
console.log(colors)

//Eliminar un elemento específico del principio de un array:
//● Utiliza el array colors del ejercicio 9.
//● Elimina el primer color del array.
colors.shift()
console.log(colors)


//Desarrollar una función que reciba el nombre de un alumno, las notas de sus materias, y la nota de aprobación (4/6/7) e imprima:
//● Nombre del usuario
//● Cantidad de materias cursadas
//● Cantidad de materias aprobadas
//● Las notas de las materias aprobadas
//● Cantidad de materias reprobadas
//● Las notas de las materias reprobadas
//● Si el alumno pasó de año (aprobó todas las materias)
//● Indicar si el alumno tuvo algún 10
//● Indicar si el alumno aprobó alguna materia raspando (con la nota mínima de aprobación)

let subjectNotes = [6,7,5,3]
function studentNotes(studentName, subjectNotes,aprovementNote){
    console.log("Nombre del alumno: " + studentName)
    console.log("Cantidad de materias cursadas: " + subjectNotes.length)

    const aprovedSubjects = subjectNotes.filter(function(note)
    {
        return note >= aprovementNote 
    });

    console.log("Cantidad de materias aprobadas: " + aprovedSubjects.length);
    console.log("Notas de materias aprobadas: "+ aprovedSubjects)

    const disaprovedSubjects = subjectNotes.filter(function(disaprovedNote)
    {
        return disaprovedNote < aprovementNote 
    });

    console.log("Cantidad de materias desaprobadas: " + disaprovedSubjects.length);
    console.log("Notas de materias desaprobadas: "+ disaprovedSubjects)

    if (subjectNotes = aprovedSubjects){
        console.log("El alumno paso de año")
    }
    else{
        console.log("El alumno no paso de año")
    }

    const ten = subjectNotes.includes(10);
    if (ten == true){
        console.log("El alumno tuvo un 10")
    }
    else{
        console.log("El alumno no tuvo un 10")
    }

    const passedWithMinimum = subjectNotes.includes(aprovementNote);
    if (passedWithMinimum == aprovementNote){
        console.log("El alumno aprobó alguna materia raspando")
    }
    else{
        console.log("El alumno no aprobó ninguna materia raspando")
    }
} 
studentNotes("Juan",subjectNotes, 6)


//5/8/24
//1.Declara un array llamado pelisFavoritas con tres elementos y muéstralo en la consola.
let pelisFavoritas =["Saw 2", "Fight Club", "Coraline"]
console.log(pelisFavoritas)

//2.Accede y muestra en la consola el segundo elemento del array pelisFavoritas.
console.log(pelisFavoritas[1])

//3.Declara un array vacío llamado libros y agrega tres elementos.
let libros = []
libros.push("Corazon delator", "Fin de guardia", "The outsider")

//4.Elimina el último elemento del array libros y muéstralo en la consola.
console.log(libros.pop())

//5.Declara un array llamado colores con cuatro elementos y muestra su longitud en la consola.
let colores = ["Amarillo", "Azul",  "Rojo", "Verde"]
console.log(colores.length)

//6.Del array de colores usando anteriormente, agrega 2 elementos al inicio del mismo y muéstralo en la consola.
colores.unshift("Beige", "Blanco")
console.log(colores)

//7.Elimina el primer elemento del array colores y muéstralo en la consola.
colores.shift()
console.log(colores)

//8.Declara un array llamado frutas con tres elementos y verifica si contiene 'Manzana'. Muestra el resultado en la consola.
let frutas = ["Manzana", "Banana", "Naranja"]
console.log(frutas.includes("Manzana"))

//9.Declara un array de numeros del 1 al 15 y encuentra el primer número mayor que 3 en el array numeros.
let numeros = [1,2,3,4,5,6,7,8,9,10,11,12,13,14,15]
let numeroMayorTres = numeros.find(function(numero){
    return numero > 3
  }); 
console.log(numeroMayorTres)

//10.Ecuentra todos los números menores que 4 en el array numeros.
let numeroMenorCuatro = numeros.find(function(numero){
    return numero < 4
  }); 
console.log(numeroMenorCuatro)

//11.Declara una función llamada agregarElemento que acepte un array y un elemento como parámetros, agregue el elemento al final del array y devuelva la nueva longitud del array.
function agregarElemento(array,num){
    array.push(num)
    console.log(array.length)
}
agregarElemento(numeros,16)

//12.Declara una función llamada eliminarPrimerElemento que acepte un array como parámetro, elimine el primer elemento del array y devuelva el elemento eliminado.
function eliminarPrimerElemento(array){
    console.log(array.shift())

}
eliminarPrimerElemento(libros)

//13.Declara una función llamada longitudArray que acepte un array como parámetro y devuelva la longitud del array mostrado en un mensaje como estee “La longitud de mi array es de [longitud]”.
function longitudArray(array){
    console.log("La longitud de mi array es de " + array.length) 
}
longitudArray(colores)

//14.Declara una función llamada verificarElemento que acepte un array y un elemento como parámetros, y devuelva true si el elemento está en el array o false si no lo está.
function verificarElemento(array,elemento){
    console.log(array.includes(elemento))
}
verificarElemento(colores, "Negro")

//15.Declara una función llamada encontrarElemento que acepte un array y un elemento como parámetros, y devuelva el primer elemento del array que sea igual al elemento dado. Si no se encuentra, devuelve undefined.
function encontrarElemento(array,elemento){
    let encontrado = array.find(function(e){
        return elemento ===  e
      })
      console.log(encontrado)
}
encontrarElemento(colores, "Blanco")

//16.Declara una función llamada filtrarArray que acepte un array y un número como parámetros, y devuelva un nuevo array con todos los elementos mayores al número dado.
function filtrarArray(array, elemento) {
    return array.filter(function(num) {
        return num > elemento;
    });
}
console.log(filtrarArray(numeros, 2));

//EJERCICIOS EVERY O SOME
//17.Dado un array de números, verifica si todos son mayores que cero. Devuelve en consola el resultado
let mayoresCero = numeros.every(function(num){
    return num > 0
})
console.log(mayoresCero)

//18.Validar que todos los strings son no vacíos
let canciones = ["Eyeless", "Metabolic", "Tornado of Souls"]
let noVacio = canciones.every(function(string){
    return string !== ""
})
console.log(noVacio)
//19.Comprueba si todos los elementos en un array de strings contienen algún carácter. Devuelve en consola el resultado
let algunCaracter = canciones.every(function(elemento) {
    return elemento.length > 0;
});
console.log(algunCaracter);

//20.Confirmar que todos los estudiantes pasaron el examen:
let notas = [1,2,4,5,6,7,8,3,2,4,6]
let todosPasaron = notas.every(function(elemento){
    return elemento >= 6
})
console.log(todosPasaron)

//21.Comprueba si todos los estudiantes en un array tienen una calificación mayor o igual a 6. Devuelve en consola el resultado
//Ej: 
//[1,2,4,5,6,7,8,3,2,4,6]
//[6,7,8,9,10]
let calificionMayorSeis = notas.every(function(elemento){ 
    return elemento >= 6
})
console.log(calificionMayorSeis)

//22.Verificar si todas las edades son de adultos:
let edades = [17, 21,18,19,20]
let mayorDeEdad = edades.every(function(elemento){
    return elemento >= 18
})
console.log(mayorDeEdad)

//23.Dado un array de edades, verifica si todas las personas son mayores de 18 años.
let mayorDieciocho= edades.every(function(elemento){
    return elemento >= 18
})
console.log(mayorDieciocho)

//24.Comprobar si todos los números son divisibles por 5:
let divisiblePorCinco = numeros.every(function(num){
    return num%5 == 0 
})
console.log(divisiblePorCinco)

//25.Verificar si al menos un número en un array es mayor que 10.
let algunNumeroMayorDiez = numeros.some(function(num){
    return num > 10
})
console.log(algunNumeroMayorDiez)

//26.Comprobar si al menos un string en un array está vacío.
let stringVacio = canciones.some(function(cancion){
    return cancion == ""
})
console.log(stringVacio)

//27.Verificar si al menos un estudiante no pasó el examen (calificación menor a 6).
let noPasoExamen =notas.some(function(nota){
    return nota < 6
})
console.log(noPasoExamen)

//28.Comprobar si al menos una edad en un array corresponde a un adolescente (13-17 años).
let adolescente= edades.every(function(edad){
    return edad >= 13 || edad <= 17
})
console.log(adolescente)
