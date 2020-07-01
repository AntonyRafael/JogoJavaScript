class BotaoReiniciar {
  
   constructor(texto, x, y) {
     this.texto = texto;
     this.x = x;
     this.y = y;
     this.botao = createButton(this.texto);
     this.botao.mousePressed( () => this.alteraCena()  );
     this.botao.addClass('botao-tela-inicial');
     this.botao.id("historia");
     if (cenaAtual == "telaInicial") {
         this.botao.remove();
      }
    
   } 
  
  draw() {
    this.botao.position(this.x,this.y);
    //this.botao.center('horizontal');
    
  }
  
  alteraCena() {
    this.botao.remove();
    cenaAtual = 'telaInicial';
    }
  
  
}