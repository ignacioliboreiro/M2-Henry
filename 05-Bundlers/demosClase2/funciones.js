// const {name, a , b} = require("./constantes") // hacemos destructuring ({name, a , b}) para poder llamar direcatmente al elemento 

import { name, a, b } from "./constantes";

const printName = (name) => {
    console.log(name);
}

const suma = (a, b) => {
    console.log(a + b);
}


printName(name);
suma(a, b)