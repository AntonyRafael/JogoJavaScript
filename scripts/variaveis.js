
let imagemCenario;
let imagemPersonagem;
let imagemInimigo;
let imagemInimigoGrande;
let imagemInimigoVoador;
let imagemGameOver;
let imagemHistoria;
let imagemTelaInicial;
let fonteTelaInicial;
let somDoPulo;
let somDano;
let somMorte;
let powerUp;
let imagemPU;

//Paralax 
let imagemCena_1;
let imagemCena_2;
let imagemCena_3;
let imagemCena_4;
let imagemCena_5;
let imagemCena_6;
let imagemCena_7;
let imagemCena_8;
let imagemCena_9;
let imagemCena_10;

let cenario_1;
let cenario_2;
let cenario_3;
let cenario_4;
let cenario_5;
let cenario_6;
let cenario_7;
let cenario_8;
let cenario_9;
let cenario_10;
// Fim Paralax

let jogo;
let telaInicial;
let historia;
let botaoHistoria;
let botaoReiniciar;
let botaoIniciar;

let imagemVida;
let vida;
let fita;
let removeBtn;

let cenaAtual = 'telaInicial';
let cenas;

let cenario;
let somDoJogo;
let personagem;
let inimigo;
let inimigoGrande;
let inimigoVoador;
let pontuacao;

const inimigos = []
const matrizInimigo = [
  [32,106],
  [64,106],
  [96,106],
]
const matrizPersonagem = [
  [263,0],
  [526,0],
  [789,0],
  [1052,0],
  [263,396],
  [526,396],
  [789,396],
]
const matrizInimigoGrande = [
   [48,204],
   [96,204],
   [104,204],
]
const matrizInimigoVoador = [
  [200,390],
  [370, 390],
  //[520, 380],
]