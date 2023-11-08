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

//change 
