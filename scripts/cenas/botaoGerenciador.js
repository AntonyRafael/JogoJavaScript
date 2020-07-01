class BotaoIniciar {
  
   constructor(texto, x, y) {
     this.texto = texto;
     this.x = x;
     this.y = y;
     this.botao = createButton(this.texto);
     this.botao.mousePressed( () => this.alteraCena()  );
     this.botao.addClass('botao-tela-inicial');
     
   } 
  
  draw() {
    this.botao.position(this.x,this.y);
    this.botao.center('horizontal');
  }
  
  alteraCena() {
    this.botao.remove();
    cenaAtual = 'jogo';
    if (cenaAtual == 'jogo') {
      botaoHistoria.removeHist();
      }
    }
  
  
  

  
}