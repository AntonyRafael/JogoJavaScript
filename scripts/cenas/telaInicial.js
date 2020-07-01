class TelaInicial {
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
      image(imagemTelaInicial, 0, 0, width, height)
  }
   
  
  
  _texto() {
    fill(0);
    strokeWeight(2);
    stroke(245, this.opacity);
    textAlign(CENTER);
    textSize(50);
    textFont(fonteTelaInicial);
    text('Jack the', width / 2, height / 3);
    textSize(100);
    text('Skeleton', width / 2, height / 6 * 3);
    textFont('Georgia')
  }
  
  _botao() {
    
    
    
    botaoHistoria.draw();
    botaoHistoria.y = height / 6 * 5;
    botaoIniciar.y = height / 7 * 4.5;
    botaoIniciar.draw();

  }
}