interface fruitType{name: string
    unitPerKg:number
pricePerKg:number}

let fruitShop:string[]= ["mango", "apple", "pear"];


let fruit1:fruitType = {name:"mango",
    unitPerKg:8,
    pricePerKg:800
}
let fruit2:fruitType = {name:"apple",
unitPerKg:10,
pricePerKg:600
}
let fruit3:fruitType = {name:"pear",
    unitPerKg:12,
    pricePerKg:500}
console.log([fruit1.name,fruit2.name,fruit3.name])
    console.log(`i bought a 3 kg of ${fruit1.name}. it unit per kg is ${3*fruit1.unitPerKg} and price is ${3 * fruit1.pricePerKg}`)
    console.log(`i bought 6 ${fruit2.name}it weight in kg is ${6/fruit2.unitPerKg} and its price is  ${fruit2.pricePerKg/fruit2.unitPerKg *6}`)
    console.log(7/fruit3.unitPerKg)
    console.log(fruitShop)
