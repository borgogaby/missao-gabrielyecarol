const caixaPrincipal = document.querySelector(".caixa-principal");
const caixaPerguntas = document.querySelector(".caixa-perguntas");
const caixaAlternativas = document.querySelector(".caixa-alternativas");
const caixaResultado = document.querySelector(".caixa-resultado");
const textoResultado = document.querySelector(".texto-resultado");

const perguntas = [
    {
        enunciado: "Se você pudesse explorar um ambiente submerso, qual escolheria?",
        alternativas: [
            {
                texto: "O fundo dos oceanos da Terra.",
                afirmacao: "Explorar o fundo dos oceanos da Terra revelaria espécies desconhecidas e ecossistemas que ainda permanecem um mistério para a ciência."
            },
            {
                texto: "Os oceanos de uma lua de outro planeta.",
                afirmacao: "Explorar os oceanos de uma lua, como Europa, poderia abrir portas para encontrar formas de vida alienígenas em ambientes completamente diferentes dos terrestres."
            }
           
        ]
    },
    {
        enunciado: "Qual seria a principal ferramenta que você levaria para explorar as profundezas?",
        alternativas: [
            {
                texto: "Um submarino de alta tecnologia.",
                afirmacao: "Um submarino de alta tecnologia garantiria segurança em grandes profundidades, além de permitir visualizações detalhadas do ambiente ao redor."
            },
            {
                texto: "Um traje de mergulho avançado.",
                afirmacao: "Um traje de mergulho avançado daria mais liberdade de movimento e proximidade com a vida marinha, proporcionando uma experiência imersiva e próxima da natureza."
            }
           
        ]
    },
    {
        enunciado: "O que você gostaria de descobrir durante sua exploração subaquática?",
        alternativas: [
            {
                texto: "Uma nova espécie de criatura marinha.",
                afirmacao:"Descobrir uma nova espécie marinha ampliaria nosso conhecimento sobre a biodiversidade e as complexas redes de vida nos oceanos."
            },
            {
                texto: "Uma civilização perdida no fundo do mar.",
                afirmacao:"Encontrar uma civilização perdida nas profundezas mudaria nossa compreensão da história humana e possivelmente revelaria segredos sobre antigas sociedades."
            }
        ]
    }
];

let atual= 0;
let perguntaAtual;
let historiaFinal = "";

function mostraPergunta() {
        if (atual>= perguntas.length) {
            mostraResultado();
            return;
        }
        perguntaAtual = perguntas [atual];
        caixaPerguntas.textContent = perguntaAtual.enunciado;
        caixaAlternativas.textContent = "";
        textoResultado.textContent = "";
        mostraAlternativas();
}

function mostraAlternativas(){
    for (const alternativa of perguntaAtual.alternativas){
        const botaoAlternativa = document.createElement("button");
        botaoAlternativa.textContent = alternativa.texto;
        botaoAlternativa.addEventListener("click", ()=>
            respostaSelecionada(alternativa) );
        caixaAlternativas.appendChild(botaoAlternativa);
    }
}
function respostaSelecionada (opcaoSelecionada){
    const afirmacao = opcaoSelecionada.afirmacao;
    historiaFinal += afirmacao + " ";
    atual++
    mostraPergunta();
}

function mostraResultado(){
    caixaPerguntas.textContent= "Resumindo...";
    textoResultado.textContent = historiaFinal;
    caixaAlternativas.textContent = "";
}
    mostraPergunta ();