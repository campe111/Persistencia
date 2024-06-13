import * as fs from 'node:fs';
const productos: string[] = ["Leche","Galletitas","harina","queso"];
const precios: number[] = [525 , 3500 , 400 , 1999];

let factorProducto: string = "";
for (let i = 0; i < productos.length; i++) {
    factorProducto += `${productos[i]} `;
}
fs.writeFileSync('./productos.txt', factorProducto);
let mercaderiaList = fs.readFileSync('./productos.txt', "utf-8");
let wordSpace = mercaderiaList.trim()
let finalDate = wordSpace.split(" ");
console.log(finalDate);


let espacio: string = " ";

for (let i = 0; i < precios.length; i++) {
    espacio += `${precios[i].toString()} `;
    }
fs.writeFileSync('./precios.txt', espacio);

let precioList = fs.readFileSync('./precios.txt', "utf-8");
let spaceOff = precioList.trim();
let factorFinal:string[] = spaceOff.split(" ");
console.log(factorFinal);





