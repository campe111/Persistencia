"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var node_fs_1 = require("node:fs");
// fs.writeFileSync(' ./precios.txt' , '525,3500,400,1999');
node_fs_1.default.writeFileSync(' ./productos.txt', 'leche,galletitas,harina,queso');
