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
  const scoreContainer = document.getElementById("score");
  
//variabel för att index börjar på 0 och komma åt objekt
  let currentQuestionIndex= 0;

  //hålla koll på score och börja på 0
  let score = 0;

  //variabel för att hålla koll på om användaren har svarat på frågan eller inte
  let answeredQuestion = false;



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
    scoreContainer.style.display ="block";
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
  answeredQuestion = false;
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
      answerResult.classList.add("answer");

      answerResult.addEventListener("click", function (){ 
          if (!answeredQuestion) {
        selectedAnswer(option);
      }
      });
      
      answersContainer.appendChild(answerResult);
    });
  }

  // Array med roliga och peppande meddelanden för rätt och fel svar
  const correctMessages = [
    "🔥 Snyggt! Du är ett geni!",
    "😎 Boom! Helt rätt!",
    "🧠 200 IQ-move!",
    "🎯 Mitt i prick!",
    "🚀 Du är ostoppbar!",
    "👏 Legend-status!"
];

  const wrongMessages = [
      "💀 Ajdå... försök igen!",
      "😬 Nope, inte riktigt...",
      "🤡 Den där var vild… men fel!",
      "🐢 Långsamt... och fel.",
      "🙈 Hoppsan! Inte rätt denna gång"
  ]

  // Funktion för att hämta ett slumpmässigt meddelande från en array
  function getRandomMessage(answerType) {
  return answerType[Math.floor(Math.random() * answerType.length)];
}
  

  //hantera användarens svar och uppdatera scoren
  function selectedAnswer(optionSelected) {
      answeredQuestion = true;
      const currentQuestion = quiz[currentQuestionIndex];

     // hämta alla svarsalternativ (divarna)
      const allAnswers = answersContainer.children;

  // loopa igenom alla svar
      for (let i = 0; i < allAnswers.length; i++) {
        const answerDiv = allAnswers[i];
        const answerText = answerDiv.textContent;

        if (answerText === currentQuestion.correctAnswer) {
        answerDiv.classList.add("correct"); // rätt svar blir grönt
        } else {
            if (answerText === optionSelected) {
            answerDiv.classList.add("wrong"); // bara det fel valda svaret blir rött
          }
        }
    }

    //jämför det valda svaret med det korrekta svaret och uppdatera resultatet och scoren
    if (optionSelected === currentQuestion.correctAnswer) {
      resultContainer.textContent = `Rätt svar! 
       ${getRandomMessage(correctMessages)}`;
      score++;
     
    } else {
    resultContainer.textContent = `${getRandomMessage(wrongMessages)} Rätt svar var: ${currentQuestion.correctAnswer}`;
    }
    // Uppdatera scoren på sidan
    scoreResult.textContent = score;
    currentQuestionIndex++;

     // Visa nästa knapp efter att användaren har svarat på frågan
      nextBtn.style.display = "block";
      scoreContainer.style.display ="block";
   
    }

// Visa slutresultatet när alla frågor har besvarats
    function showFinalResult() {
      questionContainer.textContent = "Quizet är slut!";
      answersContainer.innerHTML = "";

      resultContainer.textContent = 
        `Du fick ${score} av ${quiz.length} rätt! ${getFinalMessage(score, quiz.length)}`;
      nextBtn.style.display = "none";
      scoreContainer.style.display ="none";
    }

    //Lägg rolig text för slutresultat beroende på antal poäng

    function getFinalMessage(scorePoints, total) {
    const percentage = scorePoints / total;

    switch(true) {
      case percentage===1:
        return "👑 WOW! Du är quizets härskare!";
         
      case  percentage >= 0.8:
        return "🔥 Grymt jobbat! Du är nästan ett geni!";
       

      case percentage >= 0.6:
        return "😎 Snyggt! Du har koll!";
        

      case percentage >= 0.4:
        return "🤔 Helt okej… men du kan bättre!";
        

      case percentage >= 0.2:
        return  "😂 Oj… det där var kämpigt!";
        

      default:
      "💀 Är du ens från denna planet?"
      
    }
  }



   
