abstract class KrediBase {
    constructor(){
    }
    kaydet():void{
        console.log("Kaydetme İşlemi Basarili");
    }
    abstract hesapla():void; //tamamlanmamıs fakat extend eden classların doldurması gerekir
}

class TuketiciKredi extends KrediBase{

    constructor(){
        super();
    }
    hesapla(): void {
        console.log("Tüketici kredisine göre hesap yapıldı");
    }
}

class MortgageKredi extends KrediBase{

    constructor(){
        super();
    }
    hesapla(): void {
        console.log("Konut kredisine göre hesap yapıldı");
    }
    baskaBirOperasyon(){

    }
}

let tuketicikredisi = new TuketiciKredi()
tuketicikredisi.hesapla();
tuketicikredisi.kaydet();

let mortgagekredisi = new MortgageKredi()
mortgagekredisi.hesapla();
mortgagekredisi.kaydet();

let kredi: KrediBase        //referans sonrası obje olusturmak
kredi = new TuketiciKredi()

kredi = new MortgageKredi()