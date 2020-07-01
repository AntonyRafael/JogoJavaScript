class Jogo {
  constructor() {
    this.indice = 0;
    this.mapa = fita.mapa;

  }

  setup() {

    
    // Paralax
    
    cenario_1 = new Cenario(imagemCena_1, 4);
    cenario_2 = new Cenario(imagemCena_2, 3.5);
    cenario_3 = new Cenario(imagemCena_3, 3);
    cenario_4 = new Cenario(imagemCena_4, 2);
    cenario_5 = new Cenario(imagemCena_5, 1.9);
    cenario_6 = new Cenario(imagemCena_6, 1.6);
    cenario_7 = new Cenario(imagemCena_7, 1.3);
    cenario_8 = new Cenario(imagemCena_8, 1);
    cenario_9 = new Cenario(imagemCena_9, 1.5);
    cenario_10 = new Cenario(imagemCena_10, 2);


    // Fim Paralax
    pontuacao = new Pontuacao();
    vida = new Vida(fita.configuracoes.vidaMaxima,   fita.configuracoes.vidaInicial);

    personagem = new Personagem(matrizPersonagem, imagemPersonagem, 0, 30, 110, 135, 270, 380);
    
    

    const inimigo = new Inimigo(matrizInimigo, imagemInimigo, width - 52, -20, 80, 100, 34, 64, 10);


    const inimigoGrande = new Inimigo(matrizInimigoGrande, imagemInimigoGrande, width, 0, 120, 140, 48, 64, 10);
    //matriz, imagem, x,variacaoY, largura, altura, larguraSprite, alturaSprite,velocidade,delay

    const inimigoVoador = new Inimigo(matrizInimigoVoador, imagemInimigoVoador, width, 200, 120, 140, 100, 200, 10);


    inimigos.push(inimigo);
    inimigos.push(inimigoGrande);
    inimigos.push(inimigoVoador);
    
    somDoJogo.loop();
  }
  keyPressed(key) {
    if (key === 'ArrowUp') {
      personagem.pula()
      somDoPulo.play()
    }
    if (key === 'Enter')  {
      if (cenas[cenaAtual] === 1) {
        window.location.reload();
      } else {
        cenas[cenaAtual] = 1;
      }
    }
  }

  draw() {

    
    
    // paralax
    cenario_10.exibe();
    cenario_10.move();
    cenario_9.exibe();
    cenario_9.move();
    cenario_8.exibe();
    cenario_8.move();
    cenario_6.exibe();
    cenario_6.move();
    cenario_7.exibe();
    cenario_7.move();

    cenario_5.exibe();
    cenario_5.move();
    cenario_4.exibe();
    cenario_4.move();


    pontuacao.exibe();
    pontuacao.adicionarPonto();
    vida.draw();

    personagem.exibe();
    personagem.aplicaGravidade();
    
    const linhaAtual = this.mapa[this.indice];
    
    const inimigo = inimigos[linhaAtual.inimigo];
    const inimigoVisivel = inimigo.x < -inimigo.largura;
    
    inimigo.velocidade = linhaAtual.velocidade;
    

    inimigo.exibe();
    inimigo.move();
    
   /* powerUp.exibe();
    powerUp.move();*/
    
    
    if (inimigoVisivel) {
      this.indice++
      inimigo.aparece();
      
      if (this.indice > this.mapa.length - 1) {
        this.indice = 0;
      }
    }

    if (personagem.estaColidindo(inimigo)) {
      vida.perdeVida();
      somDano.play();
      personagem.tornarInvencivel();
      if (vida.vidas == 0) {
        image(imagemGameOver, width / 2 - 100 , height / 3);
        somDoJogo.stop();
        somMorte.play();
        textSize(25);
        textAlign(CENTER);
        stroke(50);
        fill('#db0000');
        
        text('APERTE <ENTER> PARA RECOMECAR', ((windowWidth / 2)), ((windowHeight / 2) + 150 ));
  
        
        noLoop();
      }
   
    }


    cenario_3.exibe();
    cenario_3.move();
    cenario_1.exibe();
    cenario_1.move();
    cenario_3.move();
    cenario_2.exibe();
    cenario_2.move();









  }
}