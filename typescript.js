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
var auto1 = {
    gyarto: "Ford",
    tipus: "Mondeo",
    hengerurtartalom: 1800,
    benzinesE: true,
};
var auto2 = {
    gyarto: "Mercedes",
    tipus: "E-260",
    hengerurtartalom: 2400,
    benzinesE: false,
};
var auto3 = {
    gyarto: "Seat",
    tipus: "Cordoba",
    hengerurtartalom: 1600,
    benzinesE: true,
};
var auto4 = {
    gyarto: "BMW",
    tipus: "326",
    hengerurtartalom: 2000,
    benzinesE: true,
};
document.write(auto1);
console.log(auto2);
console.log(auto4);
