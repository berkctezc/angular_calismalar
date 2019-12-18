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
var KrediBase = /** @class */ (function () {
    function KrediBase() {
    }
    KrediBase.prototype.kaydet = function () {
        console.log("Kaydetme İşlemi Basarili");
    };
    return KrediBase;
}());
var TuketiciKredi = /** @class */ (function (_super) {
    __extends(TuketiciKredi, _super);
    function TuketiciKredi() {
        return _super.call(this) || this;
    }
    TuketiciKredi.prototype.hesapla = function () {
        console.log("Tüketici kredisine göre hesap yapıldı");
    };
    return TuketiciKredi;
}(KrediBase));
var MortgageKredi = /** @class */ (function (_super) {
    __extends(MortgageKredi, _super);
    function MortgageKredi() {
        return _super.call(this) || this;
    }
    MortgageKredi.prototype.hesapla = function () {
        console.log("Konut kredisine göre hesap yapıldı");
    };
    MortgageKredi.prototype.baskaBirOperasyon = function () {
    };
    return MortgageKredi;
}(KrediBase));
var tuketicikredisi = new TuketiciKredi();
tuketicikredisi.hesapla();
tuketicikredisi.kaydet();
var mortgagekredisi = new MortgageKredi();
mortgagekredisi.hesapla();
mortgagekredisi.kaydet();
var kredi; //referans sonrası obje olusturmak
kredi = new TuketiciKredi();
kredi = new MortgageKredi();
