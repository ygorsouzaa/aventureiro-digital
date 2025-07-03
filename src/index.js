const prompt = require('prompt-sync')({ sigint: true });

let nomeAventureiro = "Alessandro"
let moeda = 100
let xpAventureiro = 0
let nivelAventueiro = 1
let statusAventureiro = true


//Loop principal do jogo
do {
    //Menu do programa 
    console.log("---Seja bem-vindo ao menu do aventureiro--")
    console.log("Escolha uma das opções abaixo para começar")
    console.log("1. Caçar monstros")
    console.log("2. Explorar cavernas")
    console.log("3. Minerar")
    console.log("4. Aprimorar equipamentos")
    console.log("5. Descansar/Sair do jogo!")
    

    let escolha = parseInt(prompt("O que você quer fazer aventureiro? Escolha um número da opção: "))

    if(escolha === 1){

        console.log("--Opções de monstro--")
        console.log("1. Glitchador")
        console.log("2. A Sombra do Feed")
        console.log ("3. EcoVazante")
        console.log("4. Criptogórgon")
        console.log("5. Murmúrio Silencioso")

        let escolhaMonstro = parseInt(prompt("Escolha um monstro que você deseja caçar: "))

        let xpGanho = 0 
        let nomeMonstro = ""

        switch(escolhaMonstro){

            case 1:
                nomeMonstro = "Glitchador";
                xpGanho = 50;
                break 

            case 2:
                nomeMonstro = "A sombra do feed";
                xpGanho = 100;
                break

            case 3:
                nomeMonstro = "Ecovazante";
                xpGanho = 70;
                break

            case 4:
                nomeMonstro = "Criptogórgon";
                xpGanho = 80;
                break

            case 5:
                nomeMonstro = "Murmúrio Silencioso"
                xpGanho = 140
                break
            
            default:
                console.log("Escolha uma das 5 alternativas")
        }   
    } 

    if(escolha === 2){

        console.log("Escolha as cavernas que você deseja explorar:")

        console.log("1. Caverna Sul")
        console.log("2. Caverna Norte")
        console.log("3. Caverna Oeste")
        console.log("4. Caverna Leste")

        let caverna = ""
        let xpGanho = 0

        switch(escolha){
            
            case 1:
                caverna = "Caverna Sul"
                xpGanho = 50
                break

            case 2:
                caverna = "Carverna Norte"
                xpGanho = 70
                break

            case 3:
                caverna = "Caverna Oeste"
                xpGanho = 130
                break

            case 4:
                caverna = "Caverna Leste"
                xpGanho = 40
                break

            default:
                console.log("Selecione uma das 4 opções")
        }
    }


} while(escolha !== 5); //Os valores não podem ser mais que 5. 