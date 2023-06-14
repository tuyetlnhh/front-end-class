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

var objTruong = {
    address: {
        city: 'HCM',
        district:'Binh Thanh'
    } //Nested object
};
var objLinh = {};
objLinh.name = 'Linh';
objLinh.address = objTruong.address;
objLinh.address.country = 'VN';

var objTony = objTruong;
var objHuy = objLinh;
var objTai = {
    address: {
        city: 'HCM',
        district:'Binh Thanh'
    } //Nested object
};
console.log('compare nested object: ', objTruong.address == objTai.address);
console.log('compare nested object Linh: ', objTruong.address == objLinh.address);
console.log('object Linh & object Truong ', {objTruong,objLinh});

function statusScore(score) {
    if (score < 0 || score > 10) return 'invalid score';
    if (score < 5) return 'bad';
    if (score <= 7) return 'average';
    return 'good';
}

console.log('Status score: ', statusScore(5));