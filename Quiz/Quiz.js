



const quizData = [
    {
        question:"if x = 4 - 4 What is the value of 3x + 4 ",
        a:'12',
        b:'0',
        c:'4',
        d:'None Of These',
        correct:'c'
    },
    {
        question:"Is 44 is perfect square ?",
        a:'No',
        b:'May be',
        c:'Yes',
        d:'None Of These',
        correct:'a'
    },   {
        question:"If a set have no elements is called",
        a:'singleton set',
        b:'null set',
        c:'empty set',
        d:'Both b & c',
        correct:'d'
    },   {
        question:"A set have unlimited members is called",
        a:'finite set',
        b:'infinite set',
        c:'equalent set',
        d:'disjoint set',
        correct:'b'
    }, {
        question:"12 , 3 and 9 are ",
        a:'Rational Numbers',
        b:'Irrational Numbers',
        c:'Decimal Fractions',
        d:'None Of These',
        correct:'a'
    }, {
        question:"How many main tenses are ",
        a:'12',
        b:'9',
        c:'3',
        d:'36',
        correct:'c'
    }, {
        question:"The work, we are doing now is",
        a:'past',
        b:'present',
        c:'future',
        d:'None Of These',
        correct:'b'
    }, {
        question:"We Will play the match",
        a:'present',
        b:'future',
        c:'past',
        d:'present perfect',
        correct:'b'
    }, {
        question:"A and An are ",
        a:'definite articles',
        b:'indefinite articles',
        c:'Both a & b',
        d:'None Of These',
        correct:'b'
    }, {
        question:"nadir ali is ___ president of Pakistan.",
        a:'a',
        b:'an',
        c:'the',
        d:'None of these',
        correct:'c'
    }
   

 ];
 const name = prompt('Enter Your Name');
 name.toUpperCase();


        const questionEl = document.getElementById('question'); 
        const answerEls = document.querySelectorAll(".answer");
        const quiz = document.getElementById("quiz");

        const la = document.getElementById('la'); 
        const bt = document.getElementById('bt'); 
        const ct = document.getElementById('ct'); 
        const dt = document.getElementById('dt'); 
        const submitBtn = document.getElementById('submit');
       
        let currentQuiz = 0;
        let score = 0;
        loadQuiz();

        function loadQuiz() {
            deSelectAnswers();
        const currentQuizData = quizData[currentQuiz];
        questionEl.innerText = currentQuizData.question;
       
        la.innerText = currentQuizData.a;
        bt.innerText = currentQuizData.b;
        ct.innerText = currentQuizData.c;
        dt.innerText = currentQuizData.d;
    }

       function getSelected() {
       
        let answer = undefined;
       
        answerEls.forEach((answerEl) => {
       
            if (answerEl.checked) {

                answer = answerEl.id;
            }
        });
        return answer;
       };

       function deSelectAnswers() {
        answerEls.forEach((answerEl) => {
            answerEl.checked = false;
        });
         }

         submitBtn.addEventListener("click" , () => {
            // see answer
            const answer = getSelected();

            if (answer) {
               
                if (answer === quizData[currentQuiz].correct) {
                    score++;
                }
                currentQuiz++;
               
                if (currentQuiz < quizData.length) {
                    loadQuiz();
                }
                if (score >= 6 && currentQuiz >= 10 ) {
                    quiz.innerHTML = ` 
                            <h1 align=center id="h12"> Excellent , ${name} </h1>
    
                            <hr>
                            
                            <h2 align=center> ${name} Your Marks is : ${score} Out of : ${quizData.length}  </h2>
                            
                            <h3 align=center>
                            
                                Weldone ${name} Tamam Behtreen Aese hee Mehnat Krte Raho.
                            
                            </h3>

                            <h4 align=center >&copy 2022-2023 Nadir WA. 0304-2019-543</h4>
                            
                            
                            `
                           
                 }

                 if (score <= 5  && currentQuiz >= 10) {
                    quiz.innerHTML = ` 
                    <h1 align=center id="red"> Fail, C++ </h1>

                    <hr>
                    
                    <h2 align=center><p id="red">${name}<p> Your Marks is : ${score} Out of : ${quizData.length}</h2>
                    
                    <h3 align=center>
                            
                                 ${name} Sharam Karo .
                            
                            </h3>
                            
                    
                    
                    `
                 }
        
                
              
              
            }

       

            
            
         });



       
   