// Função para escrever e apagar HTML com efeito de escrita lenta
function escreverApagarHTML() {
  var conteudo = document.getElementById("conteudo");
  var texto = "EM BREVE...";

  // Variável para controlar o número de vezes que o conteúdo foi reescrito
  var contagem = 0;

  // Função interna para reescrever o conteúdo
  function escrever() {
    // Limpa o conteúdo da div
    conteudo.innerHTML = "";

    // Variável para controlar o índice do caractere atual
    var i = 0;

    // Função para adicionar caracteres com atraso
    var escreverInterval = setInterval(function () {
      // Adiciona o próximo caractere ao conteúdo
      conteudo.innerHTML += texto[i];
      i++;

      // Verifica se chegamos ao fim do texto
      if (i === texto.length) {
        // Cancela o intervalo após a escrita completa
        clearInterval(escreverInterval);

        // Apaga o HTML após 2 segundos (2000 milissegundos)
        setTimeout(function () {
          conteudo.innerHTML = "";

          // Incrementa a contagem de reescritas
          contagem++;

          // Se a contagem ainda não alcançou 4, reescreve novamente após um intervalo de 2 segundos
          if (contagem < 4) {
            setTimeout(escrever, 2000);
          } else {
            // Após a última reescrita, coloca a frase completa sem apagar
            conteudo.innerHTML = texto;
          }
        }, 2000);
      }
    }, 100); // Atraso de 100 milissegundos entre cada caractere
  }

  // Chama a função de escrita pela primeira vez
  escrever();
}

// Chama a função inicialmente
escreverApagarHTML();
