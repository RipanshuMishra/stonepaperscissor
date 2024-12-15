let userscore= 0;
let compscore= 0;

const choices = document.querySelectorAll(".choice");
const msg = document.querySelector("#msg");
const userScorepara = document.querySelector("#user-score");
const compScorepara = document.querySelector("#comp-score");


const genCompChoice = () =>{
    const options=["rock","paper","scissors"];
    const randindx = Math.floor(Math.random()*3);
    return options [randindx];

}
const drawgame = ()=>{
    msg.innerText= "Game is Draw";
    msg.style.backgroundColor = "#081b31";
}

const showWinner = (userwin, userchoice, compChoice)=>{
    if(userwin){
        userscore++;
        userScorepara.innerText = userscore;
        msg.innerText=`You win! Your ${userchoice} beats ${compChoice}.`;
        msg.style.backgroundColor = "green";
    }else{
        compscore++;
        compScorepara.innerText = compscore;
        msg.innerText = `You lose ${compChoice} beats your ${userchoice}.`;
        msg.style.backgroundColor = "red";
    }
}

const playgame = (userchoice) =>{
    console.log("user choice =", userchoice);
    const compChoice= genCompChoice();
    console.log("comp choice =", compChoice);

    if(userchoice===compChoice){
        drawgame();
    }else{
        let userwin = true;
        if(userchoice === "rock"){
            userwin = compChoice === "paper" ? false : true;
        }else if(userchoice ==="paper"){
            userwin = compChoice ==="scissors" ? false : true;
        }else{
            userwin=compChoice === "rock"? false : true;
        }
        showWinner(userwin,userchoice,compChoice);

        }
    }
choices.forEach((choice)=>{
    choice.addEventListener("click",() => {
        const userchoice = choice.getAttribute("id");
        playgame(userchoice);
    });
});
