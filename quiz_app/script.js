
//array to enter questions and answers
const quizData = [
    {
        question: "'OS' computer abbreviation usually means ?",
        a:'Order of Significance',
        b:'Open Software',
        c:'Operating System',
        d:'Optical Sensor',
        correct:'c'
    },
    {
        question: "'.MOV' extension refers usually to what kind of file?",
        a:'Image file',
        b:'Animation/movie file',
        c:'Audio file',
        d:'MS Office document',
        correct:'b'
    },

    {
        question: "A worldwide network of computers",
        a:'CPU',
        b:'Internet',
        c:'RAM',
        d:'Network',
        correct:'b'
    },

    {
        question: "What does acronym FOSS stand for?",
        a:'Full Option Sensor System',
        b:'Follow-On Support Service',
        c:'Free and Open-Source Software',
        d:'Fiber Optics Science System',
        correct:'c'
    },

    {
        question: "Which of the following is an important step towards the paperless concept?",
        a:'Doxing',
        b:'Digitizing',
        c:'Debugging',
        d:'Downloading',
        correct:'d'
    }

];


//variable initilization
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


//function to load questions from array
function loadQuiz(){

    answerDeselect();

    const currentQuiz = quizData[currentQuestion];
    currQuestion.innerHTML = currentQuiz.question;
    a.innerHTML = currentQuiz.a;
    b.innerHTML = currentQuiz.b;
    c.innerHTML = currentQuiz.c;
    d.innerHTML = currentQuiz.d;
}


//function to get checked radio button value
function gotselected(){

    let answer;     
    answerEls.forEach((answeEl)=>{

        if(answeEl.checked){

            answer =  answeEl.id;
        }

    });

    return answer;

}

// function to deseclect checked radio button
function answerDeselect(){

    answerEls.forEach((answeEl)=>{

        answeEl.checked = false;

    });

}


//click submit button
submit_btn.addEventListener('click', () =>{

   const answer =  gotselected();
   if(answer){

    if(answer === quizData[currentQuestion].correct){
        score++;
    }

    currentQuestion++;

    //check if the quiz is completed
    if(currentQuestion < quizData.length){
        loadQuiz();
       }
       else{
           quiz.innerHTML = `<p class="result">You have answered ${score}/ ${quizData.length} 
           Questions</p> <button class="submit" onclick=location.reload()>Reload</button>`;
       }
       
      
}

});

