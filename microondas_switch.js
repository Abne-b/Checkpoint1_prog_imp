// - Precisamos desenvolver um menu para um microondas super veloz, 
// onde teremos 5 opções de comida com seus respectivos tempos pré-definidos. 

//       1 - Pipoca – 10 segundos (padrão);
//       2 - Macarrão – 8 segundos (padrão);
//       3 - Carne – 15 segundos (padrão);
//       4 - Feijão – 12 segundos (padrão);
//       5 - Brigadeiro – 8 segundos (padrão); 

// - O usuário poderá alterar o tempo padrão, aumentando ou diminuindo de acordo com sua vontade. 
// -Se o tempo informado for maior que 2x o necessário, exibir mensagem que a comida queimou.
// - Se o tempo for menor que o padrão, exibir a mensagem: "tempo insuficiente"; 
// - Opções não listadas no menu, devem exibir uma mensagem de erro: "Prato inexistente";
// - Se o tempo for 3x maior que o necessário para o prato, o microondas deve exibir a mensagem: “kabumm”;
// - No final de cada tarefa, o microondas deverá exibir a mensagem: "Prato pronto, bom apetite!!!".

function microondas (prato,t){
//condicionando o nome e o tempo do prato 
    switch(prato){        
        case "pipoca":
            tempo = 10;
            break;
        case "macarrão":
            tempo = 8;
            break;
        case "carne":
            tempo = 15;
            break;
        case "feijão":
            tempo = 12;
            break; 
        case "brigadeiro":
            tempo = 8;
            break;
        default:
            console.log("Prato inexistente!");
            return         
    }
//definindo a condição pra variável t
    if(t < tempo){            
        console.log("Tempo insuficiente!")
        }
    if(t >= tempo*2 && t < tempo*3){            
        console.log("Sua comida queimou!")
        } 
    if( t >= tempo*3){            
        console.log("KABUMM")
        } 
    else if(t >= tempo && t < tempo*2){
        console.log("Prato pronto, bom apetite!!!")
    }
}

//testando as condições
microondas("pipoca", 3);
microondas("macarrão", 8);
microondas("brigadeiro", 10);
microondas("carne", 30);
microondas("feijão", 36);
microondas("banana", 7);

