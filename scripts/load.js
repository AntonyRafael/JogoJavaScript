function preload() {
  
  // Cenarios Paralax
      imagemCena_1 = loadImage('imagens/cenario/paralax/paralax1.png');
      imagemCena_2 = loadImage('imagens/cenario/paralax/paralax2.png');
      imagemCena_3 = loadImage('imagens/cenario/paralax/paralax3.png');
      imagemCena_4 = loadImage('imagens/cenario/paralax/paralax4.png');
      imagemCena_5 = loadImage('imagens/cenario/paralax/paralax5.png');
      imagemCena_6 = loadImage('imagens/cenario/paralax/paralax6.png');
      imagemCena_7 = loadImage('imagens/cenario/paralax/paralax7.png');
      imagemCena_8 = loadImage('imagens/cenario/paralax/paralax8.png');
      imagemCena_9 = loadImage('imagens/cenario/paralax/paralax9.png');
      imagemCena_10 = loadImage('imagens/cenario/paralax/paralax10.png');
  //fim cenario paralax
  imagemHistoria = loadImage('imagens/assets/background-historia.jpg');
  imagemVida = loadImage('imagens/assets/coracao.png');
  fita = loadJSON('fita/fita.json');
  imagemPU = loadImage('imagens/assets/coracao.png');
  imagemPersonagem = loadImage('imagens/personagem/jack/Run.png');
  
  imagemInimigoVoador = loadImage('imagens/inimigos/morte-negra.png');
  imagemInimigo = loadImage('imagens/inimigos/rato.png');
  imagemInimigoGrande = loadImage('imagens/inimigos/zombies/zombie-cerebro.png');
  imagemTelaInicial = loadImage('imagens/assets/telaInicial.webp');
  fonteTelaInicial = loadFont('imagens/assets/BONEAPA.TTF');

  
  imagemGameOver = loadImage('imagens/assets/game-over.png');
  
  somDoJogo = loadSound('sons/musica-de-fundo.mp3');
  somDoPulo = loadSound('sons/pulo.wav');
  somDano = loadSound('sons/som_dano.mp3');
  somMorte = loadSound('sons/batidas_coracao.mp3');
 
}