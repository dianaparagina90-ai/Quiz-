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
// kallar på html element, dom manipuleras i js filen.
  const startBtn = document.getElementById("startBtn");
  const questionContainer = document.getElementById("question");
  const answersContainer = document.getElementById("answers");
  const resultContainer = document.getElementById("result");
  const scoreResult = document.getElementById("scoreValue");  
  const startSection = document.getElementById("startSection")
  const nextBtn = document.getElementById("nextbutton");
  const resetBtnContainer = document.getElementById("resetBtnContainer");
  const restartBtn = document.getElementById("resetBtn"); 
  
//variabel för att index börjar på 0 och komma åt objekt
  let currentQuestionIndex= 0;

  //hålla koll på score och börja på 0
  let score = 0;

  //variabel för att hålla koll på om användaren har svarat på frågan eller inte
  let answered = false;



  //Börja quiz knappen
  startBtn.addEventListener("click", startQuiz);

  //Nästa fråga knappen
  nextBtn.addEventListener("click",showQuestion);

  //Starta om även i mitten av quizet
  restartBtn.addEventListener("click", startQuiz);


  //Starta quizet, visa första frågan och nollställ score
  function startQuiz(){
    currentQuestionIndex= 0;
    score= 0;
    startSection.style.display="none";
    resetBtnContainer.style.display="block";
    scoreResult.textContent = score;
    showQuestion();
  }


  //Visa varje fråga i taget
  function showQuestion() {
     if (currentQuestionIndex >= quiz.length) {
    showFinalResult(); 
    return; 
  }
//nollställ variabeln för att tillåta svar på nästa fråga
  answered = false;
//nollställ resultat och göm nästa knapp tills användaren svarar på frågan
  resultContainer.textContent = "";
  nextBtn.style.display = "none";
  answersContainer.innerHTML = "";

//hämta aktuell fråga och visa den, samt svarsalternativen
    const currentQuestion = quiz[currentQuestionIndex];
    questionContainer.textContent = `Fråga ${currentQuestionIndex + 1}/${quiz.length}: ${currentQuestion.question}`;
    answersContainer.innerHTML = "";

    //skapa knappar för varje svarsalternativ och lägg till event listeners
    currentQuestion.options.forEach(option => {
      const answerResult = document.createElement("div");
      answerResult.textContent = option;

      answerResult.addEventListener("click", function (){ 
          if (!answered) {
        selectedAnswer(option);
      }
      });
      
      // Visa nästa knapp efter att användaren har svarat på frågan
      nextBtn.style.display = "block";

      answersContainer.appendChild(answerResult);
    });
  }

 
  //hantera användarens svar och uppdatera scoren
  function selectedAnswer(optionSelected) {
      answered = true;
    const currentQuestion = quiz[currentQuestionIndex];
    //jämför det valda svaret med det korrekta svaret och uppdatera resultatet och scoren
    if (optionSelected === currentQuestion.correctAnswer) {
      resultContainer.textContent = "Rätt svar!";
      score++;
      // Visa nästa knapp efter att användaren har svarat på frågan
    } else {
    resultContainer.textContent = `Fel svar! Rätt svar var: ${currentQuestion.correctAnswer}`;
    }
    // Uppdatera scoren på sidan
    scoreResult.textContent = score;
    currentQuestionIndex++;
   
    }

// Visa slutresultatet när alla frågor har besvarats
    function showFinalResult() {
      questionContainer.textContent = "Quizet är slut!";
      answersContainer.innerHTML = "";
      resultContainer.textContent = 
        `Du fick ${score} av ${quiz.length} rätt!`;
      nextBtn.style.display = "none";
    }


   
