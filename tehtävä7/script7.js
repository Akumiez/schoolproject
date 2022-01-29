//taulukko - array
var nimiLista = ["aku", "eero", "juho", "katri"];
console.log(nimiLista);

var nimi = nimiLista[1];
console.log(nimi);

//console.log(nimiLista[3]);

// Sulkeiden käytöstä: [hakasulkuihin tehdään lista] {aaltosulkuihin tehdään objekti}

console.log(nimiLista.length);

var randomLista = [1, 2, ["omena", "banaani"], 5, {merkki:"Nike"}];
var numero = randomLista[3];
console.log[numero];
var ruoka = randomLista[2][0];
console.log(ruoka);

console.log(randomLista[4].merkki);

// Listan metodit
var kauppaLista = ["maito", "voi", "kerma"];

//lisää loppuun
kauppaLista.push("banaani");
console.log(kauppaLista);

//lisää alkuun
kauppaLista.unshift("omena");
console.log(kauppaLista);

// Listasta poistaminen lopusta

kauppaLista.pop();
console.log(kauppaLista);

//alusta poistaminen
kauppaLista.shift();
console.log(kauppaLista);

//teksti ja lista - tulostaa valitun kirjaimen. Alkaa 0, 1, 2 jne
var teksti = "hooray";
console.log(teksti[0]);

var listaTeksti = "Maria, Saara, Eevi";
var uusiLista = listaTeksti.split(",");
console.log(uusiLista);

//haaste 7

var marvel = ["spiderman", "captain america", "Hulk", "Thor", "Iron man"];
console.log(marvel);

//lisätää listana 2 kpl lisää sankareita

marvel.push("Wolverine", "Daredevil");
console.log(marvel);

//poistetaan kaksi alusta
// marvel.splice(0, 1, 2);
// console.log(marvel)

marvel.shift();
marvel.shift();
marvel.shift();
console.log(marvel);

//join lisää ja poistaa merkkejä listassa
//concat lisää kaksi riviä listoja yhteen tulostaessa kolmannen rivin
//slice valitsee tietyt kohdat listasta
//reverse vaihtaa paikkaa
//sort sorttaa tiettyyn järjestykseen, esim. aakkos / numerot pienestä isoon
//splice lisää listan väliin merkin / laittaa sen olemassa olevan tilalle ja tai poistaa

//join
var nimiLista2 = ["aku", "kontiainen"];
console.log(nimiLista2.join(" "));

//concat
var presidentit = ["tarja", "martti"];
var presidentit2 = ["mauno", "urho"];
var presidentit3 = presidentit.concat(presidentit2);
console.log(presidentit3);

//slice

var osa = marvel.slice(0,4);
console.log(osa);

//reverse
console.log(osa.reverse());

//sort
console.log(osa.sort());

// splice

var numeroita = [9, 10, 20, 500, 40];
numeroita.splice(1, 2); //poistaa
console.log(numeroita);

var numeroita = [9, 10, 20, 500, 40];
numeroita.splice(2,1);
console.log(numeroita);

var numeroita = [9, 10, 20, 500, 40];
numeroita.splice(0, 0, "2", "3");
console.log(numeroita);



