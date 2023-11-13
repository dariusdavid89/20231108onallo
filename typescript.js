var szamTomb = [1, 2, 3, -2];
function negativ(num) {
    return num.some(function (szam) { return szam <= 0; });
}
console.log(negativ(szamTomb));
function korKeruletTerulet(sugar) {
    var kerulet = 2 * sugar * Math.PI;
    var terulet = sugar * sugar * Math.PI;
    return [kerulet, terulet];
}
console.log(korKeruletTerulet(3));
var autok = [
    {
        gyarto: "Mercedes",
        tipus: "E260",
        hengerurtartalom: 2000,
        benzinesE: false,
    },
    {
        gyarto: "Audi",
        tipus: "A4",
        hengerurtartalom: 1900,
        benzinesE: false,
    },
    {
        gyarto: "Ford",
        tipus: "Mondeo",
        hengerurtartalom: 1800,
        benzinesE: true,
    },
    {
        gyarto: "Honda",
        tipus: "Civic",
        hengerurtartalom: 1600,
        benzinesE: true,
    },
    {
        gyarto: "BMW",
        tipus: "530",
        hengerurtartalom: 2400,
        benzinesE: true,
    },
    {
        gyarto: "VolksWagen",
        tipus: "Passat",
        hengerurtartalom: 1900,
        benzinesE: false,
    },
];
function legisebbCcm(autoTomb) {
    var legkisebb = autoTomb[0];
    for (var i = 1; i < autoTomb.length; i++) {
        if (autoTomb[i].hengerurtartalom < legkisebb.hengerurtartalom) {
            legkisebb = autoTomb[i];
        }
    }
    return legkisebb;
}
function benzinesDb(autoTomb) {
    var benzines = 0;
    for (var i = 0; i < autoTomb.length; i++) {
        if (autoTomb[i].benzinesE) {
            benzines++;
        }
    }
    return benzines;
}
function atlagCcm(autoTomb) {
    var ossz = 0;
    for (var i = 0; i < autoTomb.length; i++) {
        ossz += autoTomb[i].hengerurtartalom;
    }
    return ossz / autoTomb.length;
}
function vanENembenzinesAuto(autoTomb) {
    return autoTomb.some(function (auto) { return !auto.benzinesE; });
}
function benzinNemBenzin(autoTomb) {
    var benzines = [];
    var nemBenzines = [];
    for (var i = 0; i < autoTomb.length; i++) {
        if (autoTomb[i].benzinesE)
            benzines.push(autoTomb[i]);
        else
            nemBenzines.push(autoTomb[i]);
    }
    return { benzines: benzines, nemBenzines: nemBenzines };
}
console.log("atlag ", atlagCcm(autok));
console.log("vanE ", vanENembenzinesAuto(autok));
console.log("benzin ", benzinNemBenzin(autok));
//change 
