const fs = require('fs')

// Ejemplo de estado inicial
const array = [
    {
        DNI: "23984723D",
        Nombre: "Paquito",
        Apellidos: "García"
    },
    {
        DNI: "2398233F",
        Nombre: "Juanito",
        Apellidos: "García"
    },
];

// proceso intermedio ----------
const csv = [Object.keys(array[0]).join(","), ...(array.map( row => Object.values(row).join(",")))].join("\n")

fs.writeFile("prueba.csv", csv, (error, data) => console.log(csv))


// proceso final ---------