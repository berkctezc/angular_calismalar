//Klasik JS Yapisi
function topla(x, y) {
    return x + y;
}
//Typescript yapisi
function topla2(x, y) {
    return x + y;
}
//anonim fonk
var topla3 = function (x, y) {
    return x + y;
};
console.log(topla(2, 3));
console.log(topla("Ankara", 2)); //JS Yapisi ile giren değer string olup hatalı olabilir
console.log(topla2(2, 4));
console.log(topla3(4, 8));
// console.log(topla2(2)); ilk par. belirlenir fakat 2.par undef olur hata verir
/* OPTINAL VE DEFAULT PARAMETRELER */
function topla4(x, y) {
    if (y === void 0) { y = 0; }
    return x + y;
}
console.log(topla4(3));
function topla5(x, y) {
    if (y) { //eger y tanimli ise
        return x + y;
    }
    return x;
}
console.log(topla5(3));
console.log(topla5(2, 41));
/* REST PARAMETRELER */
function davetEt(ilkDavetli) {
    var digerleri = [];
    for (var _i = 1; _i < arguments.length; _i++) {
        digerleri[_i - 1] = arguments[_i];
    }
    return ilkDavetli + " " + digerleri.join(" ");
}
console.log(davetEt("berk", "can", "asim", "homer"));
