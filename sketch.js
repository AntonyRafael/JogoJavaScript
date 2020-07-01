// retirar o pulo infinito(máx 2) ok
// novos personagens ok mudar para meus personagens 
// Arrumar o game over ok 
// Fundo '3d'
// colisão + precisa
function setup() {
  createCanvas(windowWidth, windowHeight);

  frameRate(40)
  jogo = new Jogo();
  historia = new Historia();
  telaInicial = new TelaInicial();

  jogo.setup();
  
  cenas = {
    jogo: jogo,
    historia:historia,
    telaInicial:telaInicial
  };
    botaoIniciar = new BotaoIniciar('Iniciar', width /2, height / 2);
    botaoHistoria = new BotaoHistoria("historia",width/2 ,height / 2) ;
    

}

function keyPressed() {
  jogo.keyPressed(key);
}

function draw() {
  cenas[cenaAtual].draw();
}