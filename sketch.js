// Declaração das variáveis globais
var angle = 0; // Ângulo de rotação
var shapeType = 'square'; // Tipo de forma geométrica (inicialmente um quadrado)
var colorR, colorG, colorB; // Componentes de cor (vermelho, verde, azul)

function setup() {
  createCanvas(400, 400); // Cria uma tela de 400x400 pixels

  // Inicializa as cores com valores aleatórios
  colorR = random(255); // Vermelho (0-255)
  colorG = random(255); // Verde (0-255)
  colorB = random(255); // Azul (0-255)
}

function draw() {
  background(255); // Define o fundo da tela como branco
  
  // Atualiza a cor de forma aleatória
  colorR = (colorR + random(-5, 5)) % 256;
  colorG = (colorG + random(-5, 5)) % 256;
  colorB = (colorB + random(-5, 5)) % 256;
  
  // Evita valores negativos de cor
  if (colorR < 0) colorR += 256;
  if (colorG < 0) colorG += 256;
  if (colorB < 0) colorB += 256;

  // Define a cor de preenchimento usando as variáveis de cor
  fill(colorR, colorG, colorB);

  // Move o ponto de origem (0,0) para o centro da tela
  translate(width / 2, height / 2);

  // Aplica a rotação ao desenho
  rotate(angle);

  // Desenha a forma geométrica com base no tipo atual
  if (shapeType === 'square') { // Se a forma for um quadrado
    rectMode(CENTER); // Desenha o retângulo a partir do centro
    rect(0, 0, 100, 100); // Desenha um quadrado de 100x100 pixels
  } else if (shapeType === 'circle') { // Se a forma for um círculo
    ellipse(0, 0, 100, 100); // Desenha um círculo com diâmetro de 100 pixels
  } else if (shapeType === 'triangle') { // Se a forma for um triângulo
    triangle(-50, 50, 50, 50, 0, -50); // Desenha um triângulo equilátero
  }

  // Incrementa o ângulo para fazer a forma girar
  angle += 0.01;
}

// Função chamada quando o botão do mouse é pressionado
function mousePressed() {
  // Alterna entre as formas geométricas
  if (shapeType === 'square') {
    shapeType = 'circle'; // Muda para círculo
  } else if (shapeType === 'circle') {
    shapeType = 'triangle'; // Muda para triângulo
  } else if (shapeType === 'triangle') {
    shapeType = 'square'; // Muda para quadrado
  }
}

// Dicas para personalizar:
// Se quiser pode mudar a cor inicial das formas alterando os valores em `colorR`, `colorG`, `colorB` na função `setup()`
// Você também pode ajustar a velocidade de rotação mudando o valor de `angle += 0.01` para um valor maior ou menor
// Para mudar o tamanho das formas, altere os valores de 100 no `rect()`, `ellipse()` e `triangle()`
