let rock = document.querySelector(".rock");
let paper = document.querySelector(".paper");
let scissors = document.querySelector(".scissors");
let playerChoice = document.querySelector(".player-choice");
let computerChoice = document.querySelector(".computer-choice");
let result = document.querySelector(".result");
let playerScore = document.querySelector(".player-score");
let computerScore = document.querySelector(".computer-score");
let finalResult = document.querySelector(".final-result");
let playerScoreValue = 0;
let computerScoreValue = 0;
let computerListChoice = ["🪨","📄","✂️"];



function playGame (playerPick){

    if(playerScoreValue === 5 || computerScoreValue === 5){
        return;
    }

    playerChoice.textContent = `Player: ${playerPick}`;
    let computerRandm = Math.floor(Math.random() * 3);
    let computerPick = computerListChoice[computerRandm];
    computerChoice.textContent = `Computer: ${computerPick}`; 

    if (playerPick === computerPick){
        result.textContent = `Result: Player = Computer`;
    }
        
    else if (
        (playerPick === "🪨" && computerPick === "✂️")||
        (playerPick === "📄" && computerPick === "🪨")||
        (playerPick === "✂️" && computerPick === "📄")
    ){
        result.textContent = "Result: You Win 🎉";
        playerScoreValue +=1;

        playerScore.textContent = `Player Score: ${playerScoreValue}`;
    }

    else{
        result.textContent = "Result: Computer Win 😈";
        computerScoreValue +=1;

        computerScore.textContent = `Computer Score: ${computerScoreValue}`;
    }

    if(playerScoreValue === 5 || computerScoreValue === 5){
        let finshP = document.createElement("p");
        finshP.textContent = "Game Finshed";
        finshP.className = 'finsh-p';
        document.body.append(finshP);

        let finshBtn = document.createElement("button");
        finshBtn.textContent = "Restart"
        finshBtn.className = 'finsh-btn';
        document.body.append(finshBtn);

        finshBtn.onclick = () =>{
        playerScoreValue = 0;
        computerScoreValue = 0;

        playerScore.textContent = `Player Score: 0`;
        computerScore.textContent = `Computer Score: 0`;

        playerChoice.textContent = "";
        computerChoice.textContent = "";
        result.textContent ="";
        finalResult.textContent = "";
        finshP.textContent = "";

        finshBtn.remove();
        
    }
    }
    
};

    rock.onclick = () => playGame("🪨");
    paper.onclick = () => playGame("📄");
    scissors.onclick = () => playGame("✂️");




