


function rpsGame(yourChoice) {
    console.log(yourChoice);
    var humanChoice, botChoice;
    humanChoice = yourChoice.id;

    botChoice = numbertoChoice(randToRpsint());
    console.log('computer choice:', botChoice);

    results = decideWinner(humanChoice, botChoice);
    console.log(results);

    message = finalMessage(results);
    console.log(message)

    rpsFrontEnd(yourChoice.id, botChoice, message);
}
function randToRpsint(){
    return Math.floor(Math.random() * 3);
}
function numbertoChoice(number){
    return ['rock', 'paper', 'scissors'][number];
}
function decideWinner(yourChoice, computerChoice){
    var rpsDatabase = {
        'rock': {"scissors": 1, "rock": 0.5, "paper": 0},
        'paper': {'rock': 1, 'paper': 0.5, 'scissors': 0},
        'scissors': {'paper': 1, 'scissors': 0.5, 'rock': 0}
    };

    var yourScore = rpsDatabase[yourChoice][computerChoice];
    var computerScore = rpsDatabase[computerChoice][yourChoice];

    return [yourScore, computerScore];
}

function finalMessage([yourScore, computerScore]){
    if(yourScore === 0){
        return{'message': 'you lost!', "color": "red"};
    }
    else if(yourScore ===0.5){
        return{'message': 'you tied!', 'color': "yellow"};
    }
    else{
        return{'message': 'you won!', 'color': 'green'};
    }
}

function rpsFrontEnd(humanImageChoice, botImagechoice, finalMessage){
    var imageDatabase = {
        "rock": document.getElementById('rock').src,
        "paper": document.getElementById('paper').src,
        "scissors": document.getElementById('scissors').src
    }

    //let remove all the images
    document.getElementById("rock").remove();
    document.getElementById("paper").remove();
    document.getElementById("scissors").remove();

    var humanDiv = document.createElement("div");
    var botDiv = document.createElement("div");
    var messageDiv = document.createElement("div");

    humanDiv.innerHTML = "<img src='" + imageDatabase[humanImageChoice] + "' height=150 width=150 style='box-shadow: 0px 10px 50px rgba(37, 50, 233, 1);' >"
    messageDiv.innerHTML = "<h1 style='color:" + finalMessage['color'] + "; font-size: 60px; padding: 30px; '>" + finalMessage['message'] + "</h1>"
    botDiv.innerHTML = "<img src='" + imageDatabase[botImagechoice] + "' height=150 width=150 style='box-shadow: 0px 10px 50px rgba(243, 38, 24, 1);' >"

    document.getElementById("flexbox-rps-div").appendChild(humanDiv);
    document.getElementById("flexbox-rps-div").appendChild(messageDiv);
    document.getElementById("flexbox-rps-div").appendChild(botDiv);
}
