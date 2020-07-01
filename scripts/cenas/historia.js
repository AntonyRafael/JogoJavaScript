class Historia {
  constructor() {
    this.x = width / 2;
    this.y = height
  }

  draw() {
    this._fundo()
    this._texto()
    this._botao()
  }
  
  _fundo() {
      image(imagemHistoria, 0, 0, width, height)
  }
  
  _texto() {
    textAlign(CENTER);
    textSize(20);
    noStroke();
    textFont('Georgia');
    fill("#fff" );
    
    text('Jack é um espião do governo altamente treinado, e \n foi convocado pelo presidente para salvar sua filha \n Ashley,raptada pelo terrível zombitinic que busca \n extorquir os  códigos nucleares através dela,  ela foi levada \n para a temida floresta das trevas em Trivia cabe a você \n agora passar por todos os desafios e salvar  a vida de \n Ashley e todo planeta !  pronto para a missão ? \n (proximas fases em andamento) ', width/2, height/4 );
    
    
    
    
  }
  
  _botao() {
    botaoIniciar.y = height / 7 * 5;
    botaoIniciar.draw();
    
  }
} 