const quiz = document.getElementById("quiz");
const pergunta = document.getElementById("pergunta");
const respostas = document.getElementById("respostas");
const resultado = document.getElementById("resultado");
const feedback = document.getElementById("feedback");
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

  {
    pergunta:
      "Qual tratado de paz assinado em 1648 encerrou a Guerra dos Trinta Anos na Europa?",
    respostas: [
      "Tratado de Versalhes",
      "Tratado de Utrecht",
      "Tratado de Westfália",
      "Tratado de Nami",
    ],
    correta: 2,
  },

  {
    pergunta: "Qual é a capital da Suíça?",
    respostas: ["Zurique", "Berna", "Genebra", "Lausanne"],
    correta: 1,
  },

  {
    pergunta: "Qual é o menor osso do corpo humano?",
    respostas: ["Estribo", "Martelo", "Cúbito", "Fíbula"],
    correta: 0,
  },

  {
    pergunta:
      "Em que país se situa o deserto do Atacama, um dos mais secos do mundo?",
    respostas: ["Peru", "Argentina", "Bolivia", "Chile"],
    correta: 3,
  },

  {
    pergunta:
      "A 'Crise dos Mísseis de Cuba' em 1962 quase levou a um conflito nuclear entre os Estados Unidos e qual nação?",
    respostas: ["Cuba", "União Soviética", "China", "Alemanha Oriental"],
    correta: 1,
  },

  {
    pergunta:
      "Qual é o nome do cientista que desenvolveu a teoria da relatividade geral?",
    respostas: [
      "Isaac Newton",
      "Stephen Hawking",
      "Nikola Tesla",
      "Albert Einstein",
    ],
    correta: 3,
  },
];

function mostrarPergunta() {
  atualizarStatus();
  let q = perguntas[perguntaAtual];
  pergunta.innerText = q.pergunta;
  respostas.innerHTML = "";
  const letras = ["A", "B", "C", "D"];
  q.respostas.forEach((resposta, indice) => {
    const btn = document.createElement("button");
    btn.classList.add("btn-respostas");
    btn.innerText = `${letras[indice]}. ${resposta}`;
    btn.addEventListener("click", () => verificarResposta(indice));
    respostas.appendChild(btn);
  });
}

function verificarResposta(indice) {
  let q = perguntas[perguntaAtual];

  const botoes = document.querySelectorAll(".btn-respostas");
  botoes.forEach((btn) => (btn.disabled = true));

  if (indice === q.correta) {
    feedback.innerHTML = "";
    const paragrafo = document.createElement("p");
    paragrafo.innerText = "Acertou!";
    feedback.appendChild(paragrafo);
    paragrafo.classList.add("acerto");
    pontos++;
  } else {
    resultado.innerHTML = "";
    const paragrafo = document.createElement("p");
    paragrafo.innerText = "Errou!";
    paragrafo.classList.add("erro");
    feedback.appendChild(paragrafo);
  }

  setTimeout(() => {
    perguntaAtual++;

    if (perguntaAtual < perguntas.length) {
      mostrarPergunta();
      feedback.innerHTML = "";
    } else {
      mostrarResultado();
    }
  }, 1200);
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
    feedback.innerHTML = "";
    mostrarPergunta();
  });
  resultado.appendChild(btnReiniciar);
}

mostrarPergunta();
