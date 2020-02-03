let sideMenu = document.querySelector("aside");
let header = document.querySelector("header");
let pullTab = document.querySelector(".pull-tab");
let main = document.querySelector(".main");
let quiz = document.querySelector("body > div.main > div > div.quiz");
let toggleNav = ()=>{
    let Nav = document.querySelectorAll("header a");
    Nav.forEach(ele =>{
        ele.classList.toggle("hidden");
    })
    sideMenu.style.paddingTop=header.offsetHeight+"px";
    pullTab.style.top = 20+header.offsetHeight+"px";
    resizeMain();
}
let burgerButton = document.querySelector("header i");
burgerButton.addEventListener("click",toggleNav);

/////////////////////////////////////////////////////////////
let showSide = ()=>{
    if(window.screen.width<window.innerWidth){
        if(window.screen.width>800)
        {sideMenu.style.width="400px";
        main.style.width=window.screen.width-400+"px";
        main.style.marginLeft="400px";
        }
        else{
            sideMenu.style.width=window.screen.width+"px";
        }
    }
    else{
        if(window.innerWidth>800)
        {sideMenu.style.width="400px";
        main.style.width=window.innerWidth-400+"px";
        main.style.marginLeft="400px";
        }
        else{
            sideMenu.style.width=window.innerWidth+"px";
        }
    }

}
pullTab.addEventListener("click",showSide)

///////////////////////////////
let hideSide = ()=>{
    sideMenu.style.width="0px";
    if(window.screen.width<window.innerWidth){
        main.style.width = window.screen.width+"px";
    }
    else{
        main.style.width = window.innerWidth+"px";
    }
    main.style.marginLeft = "0px";
}
let crossButton = document.querySelector(".close-btn");
crossButton.addEventListener("click",hideSide);
////////////////////////////////////////////
let hideNav = ()=>{
    let Nav = document.querySelectorAll("header a");
    Nav.forEach(ele =>{
        if(!ele.classList.contains("hidden"))
        {
            ele.classList.add("hidden");
        }
    })
}
var resizeMain = ()=>{
    main.style.paddingTop = header.offsetHeight+"px";
    if(window.screen.height<window.innerHeight){
        main.style.height = window.screen.height-header.offsetHeight+"px";
    }
    else{
        main.style.height = window.innerHeight-header.offsetHeight+"px";
        console.log("hi");
    }
    if(main.offsetHeight<header.offsetHeight+quiz.offsetHeight){
        main.style.height=header.offsetHeight+quiz.offsetHeight+"px";
    }
    
    if(window.screen.width<window.innerWidth){
        if(window.screen.width>800)
        {
            main.style.marginLeft="400px";
            main.style.width = window.screen.width-400+"px";
        }
        else
        {
            main.style.width = window.screen.width+"px";
        }
    }
    else{
        if(window.innerWidth>800)
        {
            main.style.marginLeft="400px";
            main.style.width = window.innerWidth-400+"px";
        }
        else
        {
            main.style.width = window.innerWidth+"px";
        }
    }
}
window.addEventListener("DOMContentLoaded",()=>{
    hideNav();
    if(window.screen.width<window.innerHeight){
        if(window.screen.width>800)
        {
            showSide();
        }
        else{
            hideSide();
        }
    }
    else{
        if(window.innerWidth>800)
        {
            showSide();
        }
        else{
            hideSide();
        }
    }
    resizeMain();
})
window.addEventListener("resize",()=>{
    hideNav();
    if(window.screen.width<window.innerHeight){
        if(window.screen.width>800)
        {
            showSide();
        }
        else{
            hideSide();
        }
    }
    else{
        if(window.innerWidth>800)
        {
            showSide();
        }
        else{
            hideSide();
        }
    }
    resizeMain();
})
////////////////////////////////////////////////////////
//RESPONSIVE CODE ABOVE
///////////////////////////////////////////////////////
let options = document.querySelectorAll(".answer");
options.forEach(element => {
    element.addEventListener("click",()=>{
        options.forEach(ele=>{
            if(ele.classList.contains("selected"))
            {
                ele.classList.remove("selected")
            }
        element.classList.add("selected");
        })
    })
});

class Question
{
    constructor(text,ans1,ans2,ans3,ans4,correctOption,explanation)
    {
        this.text=text;
        this.ans1=ans1;
        this.ans2=ans2;
        this.ans3=ans3;
        this.ans4=ans4;
        this.correctOption=correctOption;
        this.explanation=explanation;
    }
}
 
let HTML_Quiz = new Array();
let q1 = new Question("The full form of html is?","Hypertext markup Language","Hypertext makeup Language","Hightext markup Language","Hightext makeup Language","a","HTML is abbreviation for Hypertext markup Language");
let q2 = new Question("Which attribute specifies a unique alphanumeric identifier to be associated with an element?","class","id","article","html","b","HTML is Hyper Text Markup Language which is used to create web pages and applications. The id attribute is most used to point to a style in a style sheet, and by JavaScript (via the HTML DOM) to manipulate the element with the specific id. Class is a name given to HTML elements which can be used by CSS and JavaScript for styling the web pages. A self-contained content is called attribute.");
let q3 = new Question("The _____________ attribute specifies an inline style associated with an element, which determines the rendering of the affected element.","dir","style","class","article","b","Style attribute specifies an inline style for an element. The style attribute will override any style set globally, e.g. styles specified in the style tag or in an external style sheet. A self-contained content is called attribute. Class is a name given to HTML elements which can be used by CSS and JavaScript for styling the web pages. List of directory files is given by dir tag which is not supported in HTML5.");
let q4 = new Question("Which attribute is used to provide an advisory text about an element or its contents?","tooltip","dir","title","head","c","The extra information about an element is specified by title tag. The information is most often shown as a tooltip text when the mouse moves over the element. List of directory files is given by dir tag which is not supported in HTML5. Tooltip or else infotip is a graphical user interface of an element. Container of metadata is called head.");
let q5 = new Question("The __________ attribute sets the text direction as related to the lang attribute.","lang","sub","dir","ds","c","The dir attribute specifies the text direction of the element’s content. List of directory files is given by dir tag which is not supported in HTML5. The language of an element’s content is given by lang attribute. The subscript text is defined by sub attribute.");
HTML_Quiz.push(q1);
HTML_Quiz.push(q2);
HTML_Quiz.push(q3);
HTML_Quiz.push(q4);
HTML_Quiz.push(q5);
let JS_Quiz = new Array();
let q6 = new Question("Which of the following property gives access to the JavaScript memory usage data?","performance.memory","memory(performance)","performance(memory)","performance()","a","The property performance.memory gives access to the JavaScript memory usage data. It returns an object of type ObjectObject.");
let q7 = new Question("What is the purpose of the timing property in the window.performance object?","Time of navigation event","Time of page load event","Time of navigation and page load event","Time of scrolling","c","Each performance.timing attribute shows the time of a navigation event (such as when the page was requested) or page load event (such as when the DOM began loading), measured in milliseconds. The legacy Performance.timing read-only property returns a PerformanceTiming object containing latency-related performance information.");
let q8 = new Question("Which of the following property is associated with the Response event?","responseStart", "responseEnd","both responseStart and responseEnd","responsiveStart","c","PerformanceTiming.responseStart read-only property returns an unsigned long long representing the moment in time (in milliseconds since the UNIX epoch) when the browser received the first byte of the response from the server, cache, or local resource. The properties associated with the Response event are: responseStart and responseEnd.");
let q9 = new Question("Which of the following computation is correct to calculate the time taken for page load once the page is received from the server?","responseEnd-loadEventEnd","loadEventEnd-responseEnd","loadEventEnd/responseEnd","responseEnd/loadEventEnd","b","The legacy PerformanceTiming.loadEventEnd read-only property returns an unsigned long representing the moment, in milliseconds since the UNIX epoch, when the load event handler terminated, that is when the load event is completed. The time taken for page load once the page is received from the server: loadEventEnd-responseEnd.");
let q10 = new Question("What does it indicate when the type attribute of the navigation object is set to 2?","Navigation by moving back through history","Navigation by moving forward through history","Navigation by moving back & forward through history","Navigation by moving in favorites","c","The navigator object contains information about the browser. When the type attribute of the navigation object is set to 2, it means that the navigation is done by moving back or forward through history.")
JS_Quiz.push(q6);
JS_Quiz.push(q7);
JS_Quiz.push(q8);
JS_Quiz.push(q9);
JS_Quiz.push(q10);
let CSS_Quiz = new Array();
let q11 = new Question("Which of the following property specifies whether an element is an accelerator indicator or not.","move","@keyframes","accelerator","none of the mentioned","c","Syntax: accelerator: true | false")
let q12 = new Question("Which of the following property defines the width of each column in a multicolumn text flow?","width","column","filter","column-width","d","Implemented CSS3 and Browser-Specific Syntax: column-width: length | auto")
let q13 = new Question("Which of the following property specifies the direction in which a marquee should move?","marquee","marquee-play","marquee-direction","none of the mentioned","c","Syntax: marquee-direction: forward | reverse");
let q14 = new Question("Which of the following property defines a mask to be used as a box’s overlay in order to clip the box to a complex shape?","shadder","mask","mask-attachment","mask-image","b","Syntax: mask: mask-attachment");
let q15 = new Question("Which of the following property is used to apply visual effects to associated elements?","filter","effect","adjust","none of the mentioned","a","Syntax: filter: filtername(filtervalues) ... filtername(filtervalues)");
CSS_Quiz.push(q11);
CSS_Quiz.push(q12);
CSS_Quiz.push(q13);
CSS_Quiz.push(q14);
CSS_Quiz.push(q15);
let curr_ques = 0; 
let score = 0;
let wrong = new Array();
let qTime=15;
let alertTime=5;
let curr_time=0;
let curr_quiz = HTML_Quiz;
let result = document.querySelector(".result");
let showResult = ()=>{
    quiz.style.display="none";
    result.style.display="block";
    document.querySelector(".score").innerHTML = score;
    wrong.forEach(element => {
        let ans;
        if(curr_quiz[element].correctOption=="a")
        {
            ans = curr_quiz[element].ans1;
        }
        else if(curr_quiz[element].correctOption=="b")
        {
            ans = curr_quiz[element].ans2;
        }
        else if(curr_quiz[element].correctOption=="c")
        {
            ans = curr_quiz[element].ans3;
        }
        else if(curr_quiz[element].correctOption=="d")
        {
            ans = curr_quiz[element].ans4;
        }
        document.querySelector(".exp-container").innerHTML =document.querySelector(".exp-container").innerHTML + `<div class="wrong-question"><b>Q:</b> ${curr_quiz[element].text}</div>
        <div class="correct-ans"><b>Correct Answer:</b> ${ans}</div>
        <div class="explanation"><b>Explanation: </b>${curr_quiz[element].explanation}</div>`
    });
    
    console.log(score);
}
let stop;
let showQuestion = ()=>{
    if(curr_ques<curr_quiz.length){
        options.forEach(element => {
            element.classList.remove("selected");
            element.classList.remove("wrong");
            element.classList.remove("correct");
        });
        curr_time = 0;
        clearInterval(stop);
        stop=setInterval(timer,1000);
        document.querySelector(".clock .secs").style.color="#fff";
        document.querySelector(".qno").innerHTML = "Question "+(curr_ques+1).toString();
        document.querySelector(".clock .secs").innerHTML=qTime-curr_time;
        document.querySelector(".question").innerHTML = curr_quiz[curr_ques].text;
        document.querySelector("#a").innerHTML = curr_quiz[curr_ques].ans1;
        document.querySelector("#b").innerHTML = curr_quiz[curr_ques].ans2;
        document.querySelector("#c").innerHTML = curr_quiz[curr_ques].ans3;
        document.querySelector("#d").innerHTML = curr_quiz[curr_ques].ans4;
    }
    else{
        clearInterval(stop);
        showResult();
    }
}
let setQuiz = (quizname)=>{
    result.style.display="none";
    quiz.style.display="none";
    document.querySelector(".start-quiz").style.display="block";
    curr_quiz = quizname ;
    if(window.innerWidth<800||window.screen.width<800)
    {
        hideSide();
    }
    clearInterval(stop);

}
let startQuiz = ()=>{
    result.style.display="none";
    document.querySelector(".exp-container").innerHTML="";
    document.querySelector(".start-quiz").style.display="none";
    quiz.style.display="block";
    wrong = new Array();
     stop=setInterval(timer,1000)
    if(window.innerWidth<800||window.screen.width<800)
    {
        hideSide();
    }
    curr_ques = 0;
    score=0;
    showQuestion();

}

let timer = ()=>{
    if(curr_time<qTime)
    {
        if(qTime-curr_time<alertTime)
        {
            document.querySelector(".clock .secs").style.color="red";
        }
        if(qTime-curr_time<10)
        {
            document.querySelector(".clock .secs").innerHTML='0'+ (qTime-curr_time).toString();
            console.log("0");
        }
        else{
            document.querySelector(".clock .secs").innerHTML=qTime-curr_time;
        }
        curr_time++
    }
    else{
        wrongAnswer();
    }
}



let wrongAnswer= ()=>{
    wrong.push(curr_ques);
    score = score+0;
    curr_ques++;
    showQuestion();
}
let correctAnswer = ()=>{
    score = score+20;
    curr_ques++;
    setTimeout(showQuestion, 1000);
    
}
let checkAnswer= ()=>{
    
    let ans = document.querySelector(".selected");
    if(ans.id==curr_quiz[curr_ques].correctOption)
    {
        ans.classList.add("correct")
        correctAnswer();
    }
    else{
        ans.classList.add("wrong");
        setTimeout(wrongAnswer, 1000);
    }
}

let takeAnotherQuiz = ()=>{
    if(curr_quiz==CSS_Quiz){
        setQuiz(JS_Quiz);
    }
    else if(curr_quiz==JS_Quiz){
        setQuiz(HTML_Quiz);
    }
    else if(curr_quiz==HTML_Quiz){
        setQuiz(CSS_Quiz);
    }
}

