const quizData = [
    {
        question: "When India got Independence?",
        a:'1927',
        b:'1930',
        c:'1945',
        d:'1900',
        correct:'c'
    },
    {
        question: "Which is the best js framework?",
        a:'Angular',
        b:'React',
        c:'Vue',
        d:'Spring',
        correct:'b'
    }

];

let currentQuestion = 0;
let score = 0;

const answerEls = document.querySelectorAll(".answer");

const quiz = document.querySelector(".quiz_container");

const currQuestion = document.getElementById('question');

const a = document.getElementById('ans_a');
const b = document.getElementById('ans_b');
const c = document.getElementById('ans_c');
const d = document.getElementById('ans_d');
const submit_btn = document.getElementById('submit_btn');


loadQuiz();

function loadQuiz(){

    answerDeselect();

    const currentQuiz = quizData[currentQuestion];

    

    currQuestion.innerHTML = currentQuiz.question;
    a.innerHTML = currentQuiz.a;
    b.innerHTML = currentQuiz.b;
    c.innerHTML = currentQuiz.c;
    d.innerHTML = currentQuiz.d;

 

}

function gotselected(){

 

    let answer;
     
    answerEls.forEach((answeEl)=>{

        if(answeEl.checked){

            answer =  answeEl.id;
        }


    });

    return answer;

}

function answerDeselect(){

    answerEls.forEach((answeEl)=>{

        answeEl.checked = false;

    });

}


submit_btn.addEventListener('click', () =>{


    
   const answer =  gotselected();

   console.log(answer);

  

   if(answer){


    if(answer === quizData[currentQuestion].correct){

        score++;
    }

    currentQuestion++;
    if(currentQuestion < quizData.length){

        loadQuiz();
       
       }
       else{

           quiz.innerHTML = `<p class="result">You have answered ${score}/ ${quizData.length} Questions</p> <button class="submit" onclick=location.reload()>Reload</button>`
          
       }
       
      
}


    




});

