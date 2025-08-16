const quiz = document.getElementById("quiz");
const pergunta = document.getElementById("pergunta");
const respostas = document.getElementById("respostas");
const resultado = document.getElementById("resultado");
const numeroPergunta = document.getElementById("numero-pergunta");
const pontuacao = document.getElementById("pontuacao");

let perguntaAtual = 0;
let pontos = 0;

const perguntas = [
  {
    pergunta: "Qual é o maior planeta do nosso sistema solar?",
    respostas: ["Venus", "Saturno", "Jupiter", "Marte"],
    correta: 2,
  },
  {
    pergunta: "Qual o rio mais longo do mundo?",
    respostas: ["Yangtzé", "Nilo", "Amazonas", "Mississipi"],
    correta: 1,
  },

  {
    pergunta: "Em que ano a primeira Copa do Mundo de Futebol foi realizada?",
    respostas: ["1930", "1950", "1925", "1920"],
    correta: 0,
  },

  {
    pergunta:
      "Qual é o nome do oceano que separa a América do Norte e a Europa?",
    respostas: [
      "Oceano Índico",
      "Oceano Pacífico",
      "Oceano Atlântico",
      "Oceano Ártico",
    ],
    correta: 2,
  },
];

function mostrarPergunta() {
  atualizarStatus();
  let q = perguntas[perguntaAtual];
  pergunta.innerText = q.pergunta;
  respostas.innerHTML = "";
  q.respostas.forEach((resposta, indice) => {
    const btn = document.createElement("button");
    btn.innerText = resposta;
    btn.addEventListener("click", () => verificarResposta(indice));
    respostas.appendChild(btn);
  });
}

function verificarResposta(indice) {
  let q = perguntas[perguntaAtual];

  if (indice === q.correta) {
    resultado.innerHTML = "";
    const paragrafo = document.createElement("p");
    paragrafo.innerText = "Acertou!";
    resultado.appendChild(paragrafo);
    paragrafo.classList.add("acerto");
    pontos++;
  } else {
    resultado.innerHTML = "";
    const paragrafo = document.createElement("p");
    paragrafo.innerText = "Errou!";
    paragrafo.classList.add("erro");
    resultado.appendChild(paragrafo);
  }

  setTimeout(() => {
    perguntaAtual++;

    if (perguntaAtual < perguntas.length) {
      mostrarPergunta();
      resultado.innerHTML = "";
    } else {
      mostrarResultado();
    }
  }, 1500);
}

function atualizarStatus() {
  numeroPergunta.innerText = `Pergunta ${perguntaAtual + 1} de ${
    perguntas.length
  }`;
  pontuacao.innerText = `Pontuação: ${pontos}`;
}

function mostrarResultado() {
  quiz.style.display = "none";
  resultado.innerText = `Quiz finalizado! Você acertou ${pontos} de ${perguntas.length} perguntas.`;

  const btnReiniciar = document.createElement("button");
  btnReiniciar.innerText = "Reiniciar Quiz";
  btnReiniciar.addEventListener("click", () => {
    pontos = 0;
    perguntaAtual = 0;
    quiz.style.display = "block";
    resultado.innerHTML = "";
    mostrarPergunta();
  });
  resultado.appendChild(btnReiniciar);
}

mostrarPergunta();
