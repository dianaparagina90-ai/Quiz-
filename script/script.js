  const quiz= [
      {
      question: "En anka utmanar dig i schack. Vad gör du?",
      options: ["Spelar seriöst", "Äter pjäserna", "Kvackar tillbaka", "Flyr i panik"],
      correctAnswer: "Kvackar tillbaka"
    },
    {
      question: "Du hittar en magisk potatis. Vad är dess kraft?",
      options: ["Teleportering", "Blir statsminister", "Exploderar i glitter", "Gör dig till en katt"],
      correctAnswer: "Exploderar i glitter"
    },
    {
      question: "En brödrost stirrar på dig. Vad betyder det?",
      options: ["Den vill ha bröd", "Den dömer dig", "Den är kär", "Den är du från framtiden"],
      correctAnswer: "Den är du från framtiden"
    },
    {
      question: "Vilket vapen väljer du i en strid mot en dansande banan?",
      options: ["Gaffel", "Disktrasa", "En annan banan", "En låtlista"],
      correctAnswer: "En annan banan"
    },
    {
      question: "Du öppnar kylskåpet och hittar en portal. Vart leder den?",
      options: ["Till rymden", "Till din barndom", "Till ett pizzarike", "Till inget alls"],
      correctAnswer: "Till ett pizzarike"
    },
    {
      question: "Vad är bossens svaghet i nivå 99?",
      options: ["Kramar", "Vatten", "Dåliga skämt", "Att bli ignorerad"],
      correctAnswer: "Kramar"
    },
    {
      question: "Du får +100 XP. Vad gjorde du?",
      options: ["Sov", "Snubblade stiligt", "Räddade en katt", "Tryckte på fel knapp"],
      correctAnswer: "Tryckte på fel knapp"
    },
    {
      question: "Vilken NPC är mest suspekt?",
      options: ["Den som blinkar för mycket", "Den som inte säger något", "Den som säljer luft", "Den som är en stol"],
      correctAnswer: "Den som är en stol"
    },
    {
      question: "Vad händer när du når max level?",
      options: ["Du vinner", "Du börjar om", "Du blir en legend", "Du blir en brödrost"],
      correctAnswer: "Du blir en brödrost"
    },
    {
      question: "Vilket item ger mest HP?",
      options: ["En sko", "En kaka", "En mystisk soppa", "En gammal strumpa"],
      correctAnswer: "En mystisk soppa"
    }
  ]

  const startBtn = document.getElementById("startBtn");
  const questionContainer = document.getElementById("question");
  const answersContainer = document.getElementById("answers");
  const resultContainer = document.getElementById("result");
  const scoreResult = document.getElementById("scoreValue");  
  const startSection = document.getElementById("startSection")
  const nextBtn = document.getElementById("nextbutton");

  let currentQuestionIndex= 0;
  let score = 0;

  startBtn.addEventListener("click", startQuiz);

  function startQuiz(){
    currentQuestionIndex= 0;
    score= 0;
    startSection.style.display="none";
    showQuestion();
  }

  function showQuestion() {
  
    const currentQuestion = quiz[currentQuestionIndex];
    questionContainer.textContent = `Fråga ${currentQuestionIndex + 1}/${quiz.length}: ${currentQuestion.question}`;
    answersContainer.innerHTML = "";


    currentQuestion.options.forEach(option => {
      const answerResult = document.createElement("div");
      answerResult.textContent = option;

      answerResult.addEventListener("click", function () {
        selectedAnswer(option);
      });

      nextBtn.style.display = "block";

      answersContainer.appendChild(answerResult);
    });

    
  }

  //  nextBtn.addEventListener("click", function () {
  //     showQuestion()});

  function selectedAnswer(optionSelected) {
    const currentQuestion = quiz[currentQuestionIndex];

    if (optionSelected === currentQuestion.correctAnswer) {
      resultContainer.textContent = "Rätt svar!";
      score++;

    } else {
    resultContainer.textContent = `Fel svar! Rätt svar var: ${currentQuestion.correctAnswer}`;
    }

    scoreResult.textContent = score;
    currentQuestionIndex++;
    nextBtn.addEventListener("click", function () {
  showQuestion()});

    }


   
