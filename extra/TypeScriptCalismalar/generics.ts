function deger(x:number):number{
    return x;
}
function deger2(x:string):string{
    return x;
}

let sayi = deger(10);
console.log(sayi);

let sehir = deger2("Ankara");
console.log(sehir);



function deger3<T>(x:T):T{ //T:Type (herhangi birşey kullanılabilir) t tipini kodda belirleriz (<string>/<number>) parametre ve return degeri o tipte olur
    return x;
}

let sayi3=deger3<number>(2);

let sehir3=deger3<string>("Ankara");

/*GENERICLERLE CALISMAK */

class GenericClass<T>{
    degisken:T;
    fonksiyon(parametre: T):T{
        return parametre;
    }
}

let sinif = new GenericClass<number>()
let sinif2 = new GenericClass<string>()

sinif.fonksiyon(5)
sinif2.fonksiyon("Heyy")