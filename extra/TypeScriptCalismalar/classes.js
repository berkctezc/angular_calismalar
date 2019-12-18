/* CLASSLAR */
var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var Ev = /** @class */ (function () {
    function Ev(odaSayisi, pencereSayisi, kat) {
        this._odaSayisi = odaSayisi;
        this._kat = kat;
        this._pencereSayisi = pencereSayisi;
    }
    Ev.prototype.yemekYe = function () {
        console.log(this._kat + " katlı evde" + " yemek yeme işlemi gerçekleşti");
    };
    return Ev;
}());
var ev = new Ev(4, 2, 3);
console.log(ev.yemekYe());
console.log(ev._kat); //public oldugu icin get ihtiyaci olmadan cagirilabilir
console.log(ev._pencereSayisi);
// console.log(ev._odaSayisi); //private oldugu icin cagiramadik
/* INHERITANCE */
var Kisi = /** @class */ (function () {
    function Kisi() {
    }
    Object.defineProperty(Kisi.prototype, "isim", {
        get: function () {
            return this._isim;
            //return "Sayin " + this._isim
        },
        set: function (ad) {
            this._isim = ad;
        },
        enumerable: true,
        configurable: true
    });
    Kisi.prototype.kaydet = function () {
        console.log("Kisi Kaydedildi");
    };
    return Kisi;
}());
var Musteri = /** @class */ (function (_super) {
    __extends(Musteri, _super);
    function Musteri() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    //this.isim - protected iken erisim saglanabilir
    Musteri.prototype.satisYap = function () {
        console.log("Satis Gerceklesti");
    };
    return Musteri;
}(Kisi));
var Personel = /** @class */ (function (_super) {
    __extends(Personel, _super);
    function Personel() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    Personel.prototype.maasOde = function () {
        console.log("Maas Odendi");
    };
    return Personel;
}(Kisi));
var musteri = new Musteri();
musteri.isim = "Engin";
musteri.kaydet();
musteri.satisYap();
var personel = new Personel();
personel.kaydet();
personel.maasOde();
