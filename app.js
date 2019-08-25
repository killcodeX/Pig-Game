var scores, roundscore, activePlayer, gamePlaying;
Init();

// Functions
function nextPlayer()
{
    activePlayer === 0 ? activePlayer = 1 : activePlayer = 0;
    roundscore = 0;
        
    document.getElementById('current-0').textContent = '0';
    document.getElementById('current-1').textContent = '0';
        
    document.querySelector('.player-0-panel').classList.toggle('active');
    document.querySelector('.player-1-panel').classList.toggle('active');
        
    document.querySelector('.dice').style.display = 'none';
}

function Init()
{
    scores = [0 , 0];
    roundscore = 0;
    activePlayer = 0;
    gamePlaying = true;
    
    document.querySelector(".dice").style.display = 'None';

    document.getElementById('score-0').textContent = '0';
    document.getElementById('score-1').textContent = '0';
    document.getElementById('current-0').textContent = '0';
    document.getElementById('current-1').textContent = '0';
    document.getElementById('name-0').textContent = 'Player 1';
    document.getElementById('name-1').textContent = 'Player 2';
    document.querySelector('.player-0-panel').classList.remove('winner');
    document.querySelector('.player-1-panel').classList.remove('winner');
    document.querySelector('.player-0-panel').classList.remove('active');
    document.querySelector('.player-1-panel').classList.remove('active');
    document.querySelector('.player-0-panel').classList.add('active');
}
//
document.querySelector('.btn-roll').addEventListener('click', function() {
    if(gamePlaying)
        {
            //1.Random number
            var dice = Math.floor(Math.random() * 6) + 1;
    
            //2.Display the result
            var diceDOM = document.querySelector('.dice');
            diceDOM.style.display = 'block';
            diceDOM.src = 'media/dice-' + dice + '.png';
    
            //3.update the round score IF the rolled number was NOT a 1
            if (dice !== 1) {
                //add score
                roundscore += dice;
                document.querySelector('#current-' + activePlayer).textContent = roundscore;
            }
            else {
                //Next Player
                nextPlayer();
            }  
        }
    
});

document.querySelector('.btn-hold').addEventListener('click', function(){
    if (gamePlaying)
        {
           //Add CURRENT to GLOBAL score
            scores[activePlayer] += roundscore;
    
            //Update the UI
            document.querySelector('#score-' + activePlayer).textContent = scores[activePlayer];
    
            //check if player won the game
            if (scores[activePlayer] >= 20)
                {
                    document.querySelector('#name-' + activePlayer).textContent = 'Winner!';
                    document.querySelector('.dice').style.display = 'none';
                    document.querySelector('.player-' + activePlayer + '-panel').classList.add('winner');
                    document.querySelector('.player-' + activePlayer + '-panel').classList.remove('active');
                    gamePlaying = false;
            }
            else {
                    //next player
                    nextPlayer(); 
            } 
        }
    
});

//Creating Intializer
document.querySelector('.btn-new').addEventListener('click', Init);
