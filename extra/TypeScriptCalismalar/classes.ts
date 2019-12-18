/* CLASSLAR */

class Ev{
    private _odaSayisi:number; //private degerler
    _pencereSayisi:number;
    _kat:number;

    constructor(odaSayisi:number,pencereSayisi:number,kat:number) {
        this._odaSayisi=odaSayisi;
        this._kat=kat;
        this._pencereSayisi=pencereSayisi;
    }
    yemekYe(){
        console.log(this._kat+" katlı evde" + " yemek yeme işlemi gerçekleşti");
    }
}

let ev = new Ev(4,2,3);
console.log(ev.yemekYe());
console.log(ev._kat); //public oldugu icin get ihtiyaci olmadan cagirilabilir
console.log(ev._pencereSayisi);
// console.log(ev._odaSayisi); //private oldugu icin cagiramadik

/* INHERITANCE */

class Kisi{
    //protected isim:string;
    private _isim:string;

    get isim():string{
        return this._isim
        //return "Sayin " + this._isim
    }
    set isim(ad:string){
        this._isim=ad;
    }
    kaydet(){
        console.log("Kisi Kaydedildi");   
    }
}

class Musteri extends Kisi{
    //this.isim - protected iken erisim saglanabilir
    satisYap(){
        console.log("Satis Gerceklesti");
    }
}

class Personel extends Kisi{
    maasOde() {
        console.log("Maas Odendi");
    }
}

let musteri = new Musteri();
musteri.isim="Engin";
musteri.kaydet();
musteri.satisYap();

let personel = new Personel();
personel.kaydet();
personel.maasOde();
