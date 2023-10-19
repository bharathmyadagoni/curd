let buttonEl1 = document.getElementById("onbutton")
let buttonEl2 = document.getElementById("offbutton")

buttonEl1.onclick= function (){
    document.getElementById("myImage").src="pic_bulbon - Copy.gif"
    console.log("onbutton")
}
buttonEl2.onclick= function (){
    document.getElementById("myImage").src="pic_bulboff.gif"
    console.log("offbutton")
}
// array in js
const car = ["audi","volvo","BMW"]
console.log(car)
car[0] = "toyota"
console.log(car)
car.push("Audi")
console.log(car)

// object in js
const cars = {type:"Fiat", model:"500", color:"white"};

cars.color = "red";
cars.cost = 20000
console.log(cars)

// its reassign the value
let a = 20
let b = 10
a=b
console.log(a)

// it doent reassighn
// const c = 20
// const d = 10
// c=d
// console.log(c)

// Hosting
carName = "Volvo"
var carName;
console.log(carName)

let add = 3;
let x = (100 + 50) *add;
console.log(x)

let v = 100
v <<= 5
console.log(v)
