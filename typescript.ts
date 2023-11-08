let szamTomb: number[] = [1, 2, 3, -2]

function negativ(num: number[]): boolean{

    
    
   return num.some((szam) => szam <= 0)


    
}
console.log(negativ(szamTomb));


function korKeruletTerulet(sugar: number):[number, number]{

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

function legisebbCcm(autoTomb: Auto[]): Auto{

    let legkisebb: Auto = autoTomb[0];
    for(let i = 1; i < autoTomb.length; i++){
        if(autoTomb[i].hengerurtartalom < legkisebb.hengerurtartalom){
            legkisebb = autoTomb[i];
        }
    }
    return legkisebb;
}

function benzinesDb(autoTomb: Auto[]): number{

    let benzines: number = 0;
    for(let i = 0; i < autoTomb.length; i++){
        if(autoTomb[i].benzinesE){
            benzines++
        }
    }
    return benzines;
}   

//change 
