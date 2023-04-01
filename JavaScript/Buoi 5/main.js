var a = 1;
var b = 2;
var c;
console.log(typeof c);
// Khong thay doi gia tri cua bien khi thuc thi
function add() {
    var value = a+4;
    return b + value;
}
var result = add();
console.log("Ket qua:", result,", a:",a);

// OBJECT DATATYPE
// USING MEMORY TO COMPARE
var objA = {};
var objB ={};

var objC = objA;

var objD ={
    name: 'linh'
};
var objE ={
    name: 'linh'
};
console.log(objA==objB);
console.log(objA==objC);

console.log(objD.name==objE.name);