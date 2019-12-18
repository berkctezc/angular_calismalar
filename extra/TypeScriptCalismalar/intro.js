//Typescript içinde bildigimiz javascriptte yazabiliriz
function Greeter(name) {
    return "Merhaba" + name;
}
var msg = Greeter("berk");
console.log(msg);
/*
Terminale
> tsc dosya.ts
yazarak js'e convert etmiş oluyoruz
*/
/*NODEMON
uzerinde calistigimiz dosyalardaki degisiklikleri kontrol eder
>> npm install -g nodeman
>> nodemon dosya.js
*/ 
