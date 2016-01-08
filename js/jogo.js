var banco = new Object();

banco = {
  1 : "BANANA",
  2 : "LARANJA",
  3 : "MELANCIA",
  4 : "MORANGO",
  5 : "MARACUJA"
}

do {
  var continua = false;

  var sorteio = Math.floor(Math.random() * 5 + 1);            //sorteia uma palavra que está no Objeto
  console.log(sorteio);                                       //
                                                              //
  var palavra = banco[sorteio];                               //pela a palavra
  console.log(palavra);                                       //
                                                              //
  var tamanho = palavra.length;                               //tamnho desta palavra escolhida
  console.log(tamanho);                                       //
                                                              //
  var chances = 6;                                            //chances do usuario
                                                              //
  var posibility = tamanho;                                   //total de palavras que podem ser colocadar na var "espaco"
                                                              //
  var espacos = [];                                           //Coloca os traços no vetor para apresentação
  for(var i = 0; i < tamanho; i++){                           //
    espacos[i] = "_ ";                                        //
  }                                                           //
  console.log(espacos);                                       //
                                                              //
  var letras_escolhidas = [];                                 //Irá armezenar a letras escolhidas
  var pos = 0;                                                //Irá controlar a entrada de palavras no Array "letras_escolhidas"

    while((chances > 0) && (posibility > 0)){
      var acerto = 0;                                         //Quantidade de vezes que a letra digitada estava na palavra
      var not_insert = 0;                                     //Contador para verificar se a letra já foi digitada
      var escolha = prompt("Este é o Jogo da Forca!\n" + "Número de chances: " + chances + "\n" + "Dica: Fruta.\n\n" + espacos + "\n\n" + "Letras escolhidas: \n" + letras_escolhidas + "\n\n" + "Digite uma letra:\n").toUpperCase();

      for(var k = 0; k < pos; k++){                           //Verifica se a letra já foi digitada ou não
        if(escolha === letras_escolhidas[k]){
          not_insert+=1;
        }
      }

      if(not_insert > 0){
        alert("Essa letra já foi digitda.");
      } else {
        letras_escolhidas[pos] = escolha;
        pos+=1;
      }

        for(var i = 0; i < tamanho; i++){
          if(escolha === palavra[i] && escolha !== espacos[i]) {
            espacos[i] = escolha;
            posibility-=1;
            console.log(posibility);
            acerto+=1;
            console.log(acerto);
          }
        }

        if(acerto === 0 && not_insert === 0){                  //Se o usuario tiver errado a letra e se ele já NÃO ter sido digitada
          chances-=1;
          alert("Você errou. Verifique suas chances restantes");
          console.log(chances);
        }
    }

  if(chances === 0){
    alert("Você perdeu");
  } else {
    alert("Você acertou. A palavra é: " + espacos);
  }

  var op = prompt("Deseja jogar novamente? (S/N)").toUpperCase();

  if(op === "S"){
    continua = true;
  } else {
    continua = false;
  }
} while(continua === true);
