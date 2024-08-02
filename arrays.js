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
    
    


} 

studentNotes("Juan",subjectNotes, 6)