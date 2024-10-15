let victory = 0;
let defeat = 0;

victory = 160;
defeat = 53;

function calcKDA(victory, defeat) {
    let calc = victory - defeat;
    let kda = "";

    if(calc <= 10){
        kda = "Ferro";
    } else if(calc >= 11 && calc <= 20){
        kda = "Bronze";
    } else if(calc >= 21 && calc <= 50){
        kda = "Prata";
    } else if(calc >= 51 && calc <= 80){
        kda = "Ouro";
    } else if(calc >= 81 && calc <= 90){
        kda = "Diamante";
    } else if(calc >= 91 && calc <= 100){
        kda = "Lendário";
    } else {
        kda = "Imortal";
    }

    return { calc, kda }; 
}

let resultado = calcKDA(victory, defeat);

console.log("O Herói tem de saldo " + resultado.calc + " e está no nível " + resultado.kda);
