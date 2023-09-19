const questions = [
    {
        question: "A primeira máquina programável remete a revolução industrial, qual finalidade ela possuía?",
        answers: [
            {text: "Extrair carvão", correct: false},
            {text: "Moer grãos", correct: false},
            {text: "Tecer", correct: true},
            {text: "Transporte", correct: false},
        ],
        explanation: "Explicação:\nA primeira máquina programável foi o Tear de Jacquard, inventado em 1804-1805. Consistia em uma máquina de tecelagem que utilizava de cartões perfurados para determinar como seria a costura." 
    },
    {
        question: "Qual foi a primeira pessoa programadora do mundo?",
        answers: [
            {text: "Ada Lovelace", correct: true},
            {text: "Alan Turing", correct: false},
            {text: "Herman Hollerith", correct: false},
            {text: "Grace Hopper", correct: false},
        ],
        explanation: "Explicação:\nA primeira programadora foi Ada Lovelace, uma vez que em contato com a Máquina Análitica, ela foi a primeira pessoa na história a desenvolver conceitos de lógica de programação (usados até hoje) e se tornou, em seu tempo, a única especialista do mundo no processo de sequenciamento de instruções nos cartões perfurados da Máquina Análitica."
    },
    {
        question: "Qual a primeira grande empresa da área de computação?",
        answers: [
            {text: "Apple", correct: false},
            {text: "Samsumg", correct: false},
            {text: "IBM", correct: true},
            {text: "Microsoft", correct: false},
        ],
        explanation: "Explicação:\nHerman Hollerith criou um equipamento chamado Tabulador de Censo que facilitou o processo de censo da população dos Estados Unidos, com isso ele funda uma empresa que anos mais tarde seria a que chamamos atualmente de IBM."
    },
    {
        question: "O que Alan Turing fez que impactou a história da computação?",
        answers: [
            {text: "Criou um método computacional para resolver equações diferencial", correct: false},
            {text: "Criou um modelo de placa de circuito mais eficiente", correct: false},
            {text: "Fez a primeira máquina a armazenar informações como memória", correct: false},
            {text: "Teorizou e desenvolveu uma máquina capaz de outras funções além de cálculos", correct: true},
        ],
        explanation: "Explicação:\nAlan Turing foi um matemático que se destacou no campo da computação por ser o primeiro a teorizar um computador para outras funções além de matemáticas."
    },
    {
        question: "Qual Instituição foi responsável pela criação da primeira rede de computadores?",
        answers: [
            {text: "Laboratórios Stark", correct: false},
            {text: "Eniac", correct: false},
            {text: "CERN", correct: false},
            {text: "Laboratórios Bell", correct: true},
        ],
        explanation: "Explicação:\nEntre 1940 e 1946, George Stibitz e sua equipe dos Laboratórios Bell construíram uma série de máquinas com tecnologias telefônicas – ou seja, empregando relés eletromecânicos. Estas foram as primeiras máquinas a atender mais de um usuário e as primeiras a trabalhar remotamente por linhas telefônicas, formando a primeira rede de computadores."
    },
    {
        question: "Qual objetivo da máquina desenvolvida por Turing?",
        answers: [
            {text: "Fazer cálculo de probabilidades meteorológicas", correct: false},
            {text: "Descriptografar as mensagens transmitidas pelo exército nazista", correct: true},
            {text: "Permitir videochamadas", correct: false},
            {text: "Facilitar operações logísticas de trens", correct: false},
        ],
        explanation: "Explicação:\nNo contexto da Segunda Guerra Mundial era estrategicamente importante ter conhecimentos sobre planejamentos dos inimigos, mas a Alemanha tinha um sistema complexo de criptografia, por isso a Inglaterra investiu em algum método que decifrasse a criptografia dos nazistas. O método encontrado foi a máquina desenvolvida por Turing e sua equipe."
    },
    {
        question: "Qual mecanismo é usado para armazenamento de memória na segunda geração histórica de computadores?",
        answers: [
            {text: "Transistores", correct: true},
            {text: "Válvulas", correct: false},
            {text: "Chips", correct: false},
            {text: "Bactérias", correct: false},
        ],
        explanation: "Explicação:\nA segunda geração de computadores (1955-1964) usava transistores, os quais representavam vantagem sobre a geração antiga por serem menores, consumirem menos corrente e serem mais duráveis."
    },
    {
        question: "Qual o primeiro computador a usar ícones e mouse?",
        answers: [
            {text: "Eniac", correct: false},
            {text: "Z4", correct: false},
            {text: "Windows 95", correct: false},
            {text: "Macintosh", correct: true},
        ],
        explanation: "Explicação:\nA Apple lança na década de 80 o Macintosh, primeiro computador a usar ícones e mouse."
    },
    {
        question: "Qual dispositivo mecânico mais antigo que se tem registro com a função de fazer cálculos?",
        answers: [
            {text: "Ossos de Napier", correct: false},
            {text: "Máquina Diferencial", correct: false},
            {text: "Pascalina", correct: true},
            {text: "Tear de Jacquard", correct: false},
        ],
        explanation: "Explicação:\nO matemático, físico e filósofo francês, Blaise Pascal inventou a primeira calculadora MECÂNICA, para ajudar seu pai contador de impostos. A máquina ficou conhecida como Máquina Aritmética de Pascal (Pascaline) e foi construída entre 1642-1644."
    },
    {
        question: "Qual elemento não faz parte de uma arquitetura básica de computadores?",
        answers: [
            {text: "Rede Neural", correct: true},
            {text: "CPU", correct: false},
            {text: "Unidade de memória", correct: false},
            {text: "Input Device", correct: false},
        ],
        explanation: "Explicação:\nA arquitetura básica de computadores é composta por: CPU (Unidade de Controle e Unidade Lógica e Aritmética), Unidade de Memória e dispositivos de entrada e saída."
    },
];

const questionElement = document.getElementById("question");
const explanationContainer = document.getElementById("explanation-container");
const answerButtons = document.getElementById("answer-buttons");
const nextButton = document.getElementById("next-btn");

let currentQuestionIndex = 0;
let score = 0;

function startQuiz() {
    currentQuestionIndex = 0;
    score = 0;
    nextButton.innerHTML = "Próxima";
    showQuestion();
}

function showQuestion() {
    resetState();
    let currentQuestion = questions[currentQuestionIndex];
    let questionNo = currentQuestionIndex + 1;
    questionElement.innerHTML = questionNo + ". " + currentQuestion.question;

    currentQuestion.answers.forEach(answer => {
        const button = document.createElement("button");
        button.innerHTML = answer.text;
        button.classList.add("btn");
        answerButtons.appendChild(button);
        if (answer.correct) {
            button.dataset.correct = answer.correct;
        }
        button.addEventListener("click", selectAnswer);
    });
}

function resetState() {
    nextButton.style.display = "none";
    while (answerButtons.firstChild) {
        answerButtons.removeChild(answerButtons.firstChild);
    }
    explanationContainer.style.display = "none";
}

function selectAnswer(e) {
    const selectedBtn = e.target;
    const isCorrect = selectedBtn.dataset.correct === "true";

    if (isCorrect) {
        selectedBtn.classList.add("correct");
        score++;
    } else {
        selectedBtn.classList.add("incorrect");
    }

    Array.from(answerButtons.children).forEach(button => {
        if (button.dataset.correct === "true") {
            button.classList.add("correct");
        }
        button.disabled = true;
    });

    // Exibir a explicação da resposta após a seleção
    const currentQuestion = questions[currentQuestionIndex];
    explanationContainer.innerHTML = currentQuestion.explanation;
    explanationContainer.style.display = "block"; // Mostrar a explicação da pergunta atual

    nextButton.style.display = "block";
}

function showScore() {
    resetState();
    questionElement.innerHTML = `Você acertou ${score} de ${questions.length}!`;
    nextButton.innerHTML = "Jogar Novamente";
    nextButton.style.display = "block";
}

function handleNextButton() {
    currentQuestionIndex++;
    if (currentQuestionIndex < questions.length) {
        showQuestion();
    } else {
        showScore();
    }
}

nextButton.addEventListener("click", () => {
    if (currentQuestionIndex < questions.length) {
        handleNextButton();
    } else {
        startQuiz();
    }
});

startQuiz();