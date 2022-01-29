function sayHello() {
    var name = prompt("Kerro nimesi:");
    alert("Terve" + name +"!");
}

//sayHello();

function sayHelloToName(name) {
    alert("Tervehdys " + name);

}
//sayHelloToName("Aku");

function SayHelloToFullName(firstName, lastName){
    console.log("Hello " + firstName + " " + lastName);
}
//SayHelloToFullName("Jaakko", "kenttä");

//funktio voi palauttaa arvon

function calcRectArea(width, height) {
    let pintaAla = width * height;
    return pintaAla
}
//let area = calcRectArea(10, 20);
//console.log(area);

//toinen vaihtoehto ylläolevalle 

function calcRectArea(width, height) {
    return width * height;
}
let area = calcRectArea(10, 20);
console.log(area);

function echoEffect(string){
    var newString = string.toUpperCase() + string + string
    return newString
}
console.log(echoEffect("nananaa"));

// Scope

let globaali = "GlOBAALI";

function test(){
    var globaali = "muutettu";
}
test();
console.log(globaali);

//haaste  ympyrän pinta-ala = pi * säde * säde //pii 3.14159265...

function calcCircleRect(radius){
    return Math.round(radius*radius* Math.PI);
}
    console.log(calcCircleRect(10));


function aakkostaja(){
    let sana1 = prompt("anna ensimmäinen sana:");
    let sana2 = prompt("anna toinen sana:");
    return [sana1, sana2].sort()[0]
}
console.log(aakkostaja());

