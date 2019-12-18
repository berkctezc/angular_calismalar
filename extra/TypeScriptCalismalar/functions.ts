
//Klasik JS Yapisi
function topla(x,y){
    return x+y;
}

//Typescript yapisi
function topla2(x:number,y:number):number{
    return x+y;
}

//anonim fonk
let topla3 = function(x:number,y:number):number{
    return x+y;
}

console.log(topla(2,3));
console.log(topla("Ankara",2)); //JS Yapisi ile giren değer string olup hatalı olabilir
console.log(topla2(2,4));
console.log(topla3(4,8));
// console.log(topla2(2)); ilk par. belirlenir fakat 2.par undef olur hata verir


/* OPTINAL VE DEFAULT PARAMETRELER */

function topla4(x:number,y:number=0):number{ //y:number=0 diyerek default değer belirlemiş olduk 
    return x+y;
}

console.log(topla4(3));

function topla5(x:number,y?:number):number{  
    if(y){ //eger y tanimli ise
        return x+y
    }
    return x;
}

console.log(topla5(3));
console.log(topla5(2,41));

/* REST PARAMETRELER */

function davetEt(ilkDavetli:string,...digerleri:string[]):string{
    return ilkDavetli +" "+ digerleri.join(" ");
}

console.log(davetEt("berk","can","asim","homer"));
