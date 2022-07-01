var startBtn = document.querySelector("#start");
var nextBtn = document.querySelector("#next");
var allBtns = document.querySelector(".buttons");
var endBtn = document.querySelector("#end");
var timeLeft=30;
var timer;
var clock = document.querySelector("#countdown");
var score = 0;
var savedScores = JSON.parse(localStorage.getItem("savedScores"))||[];
var initials = ""

var questions = ["How many infinity stones are there?", "What is the alien race Loki sends to invade Earth in The Avengers?", "What mutant power does X-Men leader Cyclops have?", "Who is stronger: The Scarlet Witch or The Dark Phoenix?"]

var answers = ["8", "6", "4", "7", "The Skrulls", "The Kree", "The Chitauri", "The Flerkens", "Power to Emit Energy Beams From His Eyes", "Power to Manipulate Ice and Cold", "Power to Shapeshift", "Power to Absrob Solar Energy", "Scarlet Witch", "Dark Phoenix","I'm not sure", "It's a Tie! They're Both Powerful Women Who Kick Butt!!"] 

var questionOne = ""
var questionTwo = ""
var questionThree = ""
var questionFour = ""
var choiceOne = ""
var choiceTwo = ""
var choiceThree = ""
var choiceFour = ""

function reset() {
    var btnOne = document.getElementById("btnOne")
    var btnTwo = document.getElementById("btnTwo")
    var btnThree = document.getElementById("btnThree")
    var btnFour = document.getElementById("btnFour")
    btnOne.style.backgroundColor = "transparent";
    btnTwo.style.backgroundColor = "transparent";
    btnThree.style.backgroundColor = "transparent";
    btnFour.style.backgroundColor = "transparent";
    var cloneOne = btnOne.cloneNode()
    var cloneTwo = btnTwo.cloneNode()
    var cloneThree = btnThree.cloneNode()
    var cloneFour = btnFour.cloneNode()
    btnOne.replaceWith(cloneOne)
    btnTwo.replaceWith(cloneTwo)
    btnThree.replaceWith(cloneThree)
    btnFour.replaceWith(cloneFour)
}

startBtn.addEventListener("click", function qOne() {

    var questionOne = document.querySelector("h2");
    questionOne.innerText = questions[0]

    var choiceOne = document.getElementById("btnOne");
    choiceOne.innerText = answers[0]
    choiceOne.addEventListener("click", function() {
        document.getElementById("btnOne").style.backgroundColor = "red";
    })

    var choiceTwo = document.getElementById("btnTwo");
    choiceTwo.innerText = answers[1]
    
    choiceTwo.addEventListener("click", function() {
        document.getElementById("btnTwo").style.backgroundColor = "green";
        score++
    })

    var choiceThree = document.getElementById("btnThree");
    choiceThree.innerText = answers[2]
    
    choiceOne.addEventListener("click", function() {
        document.getElementById("btnThree").style.backgroundColor = "red";
    })

    var choiceFour = document.getElementById("btnFour");
    choiceFour.innerText = answers[3]
    
    choiceOne.addEventListener("click", function() {
        document.getElementById("btnFour").style.backgroundColor = "red";
    })

    qTwo()

    timeLeft=30;
    timer = setInterval(function qOne(){
        timeLeft--;
        clock.textContent=timeLeft

        if(!timeLeft){
            document.querySelector("h2").innerText = "Time's Up!"
            clearInterval(timer);
            reset();
        }

    },1000)

})

function qTwo() {

    nextBtn.addEventListener("click", function qTwo() {
    reset()    

    var questionTwo = document.querySelector("h2");
    questionTwo.innerText = questions[1]

    var choiceOne = document.getElementById("btnOne");
    choiceOne.innerText = answers[4]
   
    choiceOne.addEventListener("click", function() {
        document.getElementById("btnOne").style.backgroundColor = "red";
    } )

    var choiceTwo = document.getElementById("btnTwo");
    choiceTwo.innerText = answers[5]
    
    choiceOne.addEventListener("click", function() {
        document.getElementById("btnTwo").style.backgroundColor = "red";
    } )

    var choiceThree = document.getElementById("btnThree");
    choiceThree.innerText = answers[6]
    
    choiceThree.addEventListener("click", function() {
        document.getElementById("btnThree").style.backgroundColor = "green";
        score++
    } )

    var choiceFour = document.getElementById("btnFour");
    choiceFour.innerText = answers[7]
    
    choiceFour.addEventListener("click", function() {
        document.getElementById("btnFour").style.backgroundColor = "red";
    } )

    qThree()

})}

function qThree() {

    nextBtn.addEventListener("click", function qThree() {
    reset()    

    var questionThree = document.querySelector("h2");
    questionThree.innerText = questions[2]

    var choiceOne = document.getElementById("btnOne");
    choiceOne.innerText = answers[8]
    
    choiceOne.addEventListener("click", function() {
        document.getElementById("btnOne").style.backgroundColor = "green";
    } )

    var choiceTwo = document.getElementById("btnTwo");
    choiceTwo.innerText = answers[9]
    
    choiceTwo.addEventListener("click", function() {
        document.getElementById("btnTwo").style.backgroundColor = "red";
    } )

    var choiceThree = document.getElementById("btnThree");
    choiceThree.innerText = answers[10]
    
    choiceThree.addEventListener("click", function() {
        document.getElementById("btnThree").style.backgroundColor = "red";
    } )


    var choiceFour = document.getElementById("btnFour");
    choiceFour.innerText = answers[11]
    
    choiceFour.addEventListener("click", function() {
        document.getElementById("btnFour").style.backgroundColor = "red";
    } )

    qFour()

})}

function qFour() {

    nextBtn.addEventListener("click", function qFour() {
    reset()    

    var questionFour = document.querySelector("h2");
    questionFour.innerText = questions[3]

    var choiceOne = document.getElementById("btnOne");
    choiceOne.innerText = answers[12]
    
    choiceOne.addEventListener("click", function() {
        document.getElementById("btnOne").style.backgroundColor = "red";
    } )

    var choiceTwo = document.getElementById("btnTwo");
    choiceTwo.innerText = answers[13]
    
    choiceTwo.addEventListener("click", function() {
        document.getElementById("btnTwo").style.backgroundColor = "red";
    } )

    var choiceThree = document.getElementById("btnThree");
    choiceThree.innerText = answers[14]
    
    choiceThree.addEventListener("click", function() {
        document.getElementById("btnThree").style.backgroundColor = "red";
    } )

    var choiceFour = document.getElementById("btnFour");
    choiceFour.innerText = answers[15]
    
    choiceFour.addEventListener("click", function() {
        document.getElementById("btnFour").style.backgroundColor = "green";
    } )

    var nextBtn = document.getElementById("next").style.display = "none";

    endGame()

    })}

    function endGame() {

    endBtn.addEventListener("click", function endGame() {
     reset()   

    questionFour = document.querySelector("h2").innerText = "Thanks for Playing!"

    choiceOne = document.getElementById("btnOne").style.display = "none";

    choiceTwo = document.getElementById("btnTwo").style.display = "none";

    choiceThree = document.getElementById("btnThree").style.display = "none";

    choiceFour = document.getElementById("btnFour").style.display = "none";

    endBtn = document.getElementById("end").style.display = "none";

    initials = prompt("Please enter your initials");
    document.getElementById("initial").innerText = initials;

    document.getElementById("scoreboard").innerText = savedScores;
    savedScores.push(score)
    localStorage.setItem("savedScores",JSON.stringify(savedScores));(initials);
    
    })}
