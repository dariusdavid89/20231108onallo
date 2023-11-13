let szamTomb: number[] = [1, 2, 3, -2]

function negativ(num: number[]): boolean {



    return num.some((szam) => szam <= 0)



}
console.log(negativ(szamTomb));


function korKeruletTerulet(sugar: number): [number, number] {

    let kerulet: number = 2 * sugar * Math.PI;
    let terulet: number = sugar * sugar * Math.PI;
    return [kerulet, terulet];
}
console.log(korKeruletTerulet(3))


interface Auto {
    gyarto: string,
    tipus: string,
    hengerurtartalom: number,
    benzinesE: boolean

}

let autok: Auto[] = [
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
]

function legisebbCcm(autoTomb: Auto[]): Auto {

    let legkisebb: Auto = autoTomb[0];
    for (let i = 1; i < autoTomb.length; i++) {
        if (autoTomb[i].hengerurtartalom < legkisebb.hengerurtartalom) {
            legkisebb = autoTomb[i];
        }
    }
    return legkisebb;
}

function benzinesDb(autoTomb: Auto[]): number {

    let benzines: number = 0;
    for (let i = 0; i < autoTomb.length; i++) {
        if (autoTomb[i].benzinesE) {
            benzines++
        }
    }
    return benzines;
}

function atlagCcm(autoTomb: Auto[]): number {

    let ossz: number = 0;
    for (let i = 0; i < autoTomb.length; i++) {
        ossz += autoTomb[i].hengerurtartalom;

    }
    return ossz / autoTomb.length;
}

function vanENembenzinesAuto(autoTomb: Auto[]): boolean {

    return autoTomb.some(auto => !auto.benzinesE)
}

function benzinNemBenzin(autoTomb: Auto[]): { benzines: Auto[], nemBenzines: Auto[] } {
    const benzines: Auto[] = [];
    const nemBenzines: Auto[] = [];

    for(let i = 0; i < autoTomb.length; i++){

        if(autoTomb[i].benzinesE) benzines.push(autoTomb[i]);
        else nemBenzines.push(autoTomb[i]);
    }
    return {benzines, nemBenzines};
}

console.log("atlag ", atlagCcm(autok))
console.log("vanE ", vanENembenzinesAuto(autok))
console.log("benzin ", benzinNemBenzin(autok))

//change 
