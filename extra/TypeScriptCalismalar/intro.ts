//Typescript içinde bildigimiz javascriptte yazabiliriz

function Greeter(name:string){
    return "Merhaba " + name;
}

let msg = Greeter("berk");

console.log(msg);

/* 
Terminale 
> tsc dosya.ts
yazarak js'e compile etmiş oluyoruz 
*/


/*NODEMON
uzerinde calistigimiz dosyalardaki degisiklikleri kontrol eder
>> npm install -g nodeman
>> nodemon dosya.js
*/

let sayi:number = 12
sayi = 10;
sayi = 10.4;
//sayi="string olamaz"

let sehir:string = "İzmir"
sehir="Ankara"
sehir="İstanbul"

let dogruMu : boolean = true
dogruMu = false
dogruMu = true

let sayilar: number[] = [1,2,3]
let sayilar2: Array<number> = [1,2,3]

let dizi:[number,string] = [2,"Ankara"]
dizi[0]
dizi[1]

enum Renk{Kirmizi=1,Siyah,Mavi}

let renk : Renk = Renk.Kirmizi

let deger: any = "Ankara"
deger = 2
deger = { }

let deger4 : void = undefined

function selamVer2():void{
    console.log("Merhaba");
}

//undefined null

let yas:number;
yas=10

class Musteri{

    
}

