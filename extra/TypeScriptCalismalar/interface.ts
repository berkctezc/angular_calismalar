interface Product{
    id:number;
    name:string;
    unitPrice:number;
}
class Product2{
    id:number;
    name:string;
    unitPrice:number;
}

function save(product:Product){
    console.log(product.name+ " kaydedildi!");
}
function save2(product2:Product){
    console.log(product2.name+" kaydedildi!");
    
}

save({id:1,name:"Laptop",unitPrice:10}) //interface yapisi

let mouse = new Product2()
mouse.name = "ATech"

save2(mouse) //class yapisi

interface  PersonService{
    save();
}
class CustomerService implements PersonService{
    save(){
        
    } //zorunlu
}