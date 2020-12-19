// // Boolean
// let muted: boolean = true;
// muted = false;

// // Números
// let age = 21;
// let numerador: number = 42;
// let denominador: number = age;
// let resultado = numerador / denominador;

// // String
// let nombre: string = 'Tonga';
// let saludo = `Me llamo ${nombre}`;

// // Arreglos
// let people: string[] = [];
// people = ["Juana", "Maria", "Lucia"];
// // people.push(900) -> No es posible asignar int a array de tipo string

// let peopleAndNumbers: Array<string | number> = [];
// peopleAndNumbers.push("Charly");
// peopleAndNumbers.push(200);

// // Enum
// enum Color {
//     Azul = "Azul",
//     Marron = "Marron",
//     Violeta = "Violeta",
//     Verde = "Verde",
//     Rojo = "Rojo",
// }

// let colorFavorito: Color = Color.Verde
// console.log(`Mi color favorito es ${colorFavorito}`)

// // Any
// let comodin: any = 'Joker';
// comodin = { type: 'Wildcard' };

// // Object
// let someObject: object = { type: 'Wildcard' };

// // Funciones
// function add(a: number, b: number): number {
//     return a + b
// }

// const sum = add(4, 6);

// function createAdder(a:number): (number) => number {
//     return function(b: number) {
//         return b + a;
//     }
// }

// const addFour = createAdder(4);
// const fourPlus6 = addFour(6);

// function fullName(firstName: string, lastName?: string): string {
//     return `${firstName} ${lastName}`;
// }

// const tonga = fullName('Tonga');
// console.log(tonga);

// Interfaces
enum Color {
    Rojo = "Rojo",
    Verde = "Verde"
}

interface Rectangulo {
    ancho: number;
    alto: number;
    color?: Color;
}

let rect: Rectangulo = {
    ancho: 4,
    alto: 6,
    color: Color.Verde
};

function area(r: Rectangulo): number {
    return r.ancho * r.alto
}

const areaRect = area(rect);
console.log(areaRect);

rect.toString = function () {
    return this.color ? `Un rectangulo ${this.color}` : `Un rectangulo`
}

console.log(rect.toString());