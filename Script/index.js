// Declaring Questions 
const question_array=
[
    {
        q:"1. Who is the father of C language?",
        o1:"Bjarne Stroustrup",
        o2:"James A. Gosling",
        o3:"Dennis Ritchie",
        o4:"Dr. E.F. Codd",
        ans:"ans3"
    },
    {
        q:"2. C was primarily devloped as",
        o1:"System programming language",
        o2:"General purpose language",
        o3:"Data processing language",
        o4:"None of the above.",
        ans:"ans1"
    },
    {
        q:"3. C programs are converted into machine language with the help of",
        o1:"An Editor",
        o2:"A compiler",
        o3:"An operating system",
        o4:"None of these.",
        ans:"ans2"
    },
    {
        q:"4. A C variable cannot start with",
        o1:"A number",
        o2:"A special symbol other than underscore",
        o3:"Both of the above",
        o4:"An alphabet",
        ans:"ans3"
    },
    {
        q:"5. Which is the only function all c programs must contain?",
        o1:"start()",
        o2:"system()",
        o3:"printf()",
        o4:"main()",
        ans:"ans4"
    }
]

// Getting inputs


const qs=document.getElementById("question");
const ops1=document.getElementById("option1");
const ops2=document.getElementById("option2");
const ops3=document.getElementById("option3");
const ops4=document.getElementById("option4");

// Declaring score and Iterator
let i=0;
let score=0;

//Assign qustion and options 

const StartQuiz= (j)=>
{
    const st_page=document.getElementById("start-page");
    st_page.style.display="none";
    const qs_page=document.getElementById("question-page");
    qs_page.style.display="block";
    qs.innerText=question_array[j].q;
    ops1.innerText=question_array[j].o1;
    ops2.innerText=question_array[j].o2;
    ops3.innerText=question_array[j].o3;
    ops4.innerText=question_array[j].o4;
}

// After completion View score function

const viewScore= ()=>
{
    const result=document.getElementById("result-page");
    result.style.display="block";
    const qs_page=document.getElementById("question-page");
    qs_page.style.display="none";
    const scor=document.getElementById("scr");
    scor.innerText=`Your score: ${score}/5`;
}

// Checking answers of user and increasing Score snd then recalling Startquiz function

const loadQuestion=()=>
{
    let answer;
   const options=document.getElementsByClassName("opt")
   console.log(options);
   for(let i=0;i<options.length;i++)
   {
       
       if(options[i].checked){
         answer=options[i].id;
         options[i].checked=false;
       }
   }
   if(i<question_array.length-1)
   {
       if(answer===question_array[i].ans)
       {
           score++;
       }
       i++;
       StartQuiz(i);
   }
   else{
    if(answer===question_array[i].ans)
    {
        score++;
    }
       viewScore()
   }   
}

// Defining Try again function

const load=()=>{

    window.location.reload();
}



