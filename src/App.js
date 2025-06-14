import React, { useState, useEffect } from 'react';
import './App.css';
import { Title } from './components/Title';
import { Fighter } from './components/Fighter';
import { UnattemptedGuess } from './components/UnattemptedGuess';
import { GuessBar } from './components/GuessBar';

function App() {

  const [guessed, setGuessed] = useState(0);
  const [todaysFighter, setTodaysFighter] = useState(null);
  const [allFighters, setAllFighters] = useState(null);
  const [fightersGuessed, setFightersGuessed] = useState([]);

  useEffect (() => {
    fetch('/data/FighterInfo.json')
    .then(response => response.json())
    .then(data => {
      setAllFighters(data);
      const todaysFighterIndex = Math.floor(Math.random() * 242);
      const selectFighter = data[todaysFighterIndex];
      setTodaysFighter(selectFighter)
    })
  }, [])

  const updateGuessedFighters = ((fighter) => {
    setFightersGuessed([...fightersGuessed, fighter]);
    setGuessed(guessed+1);
    console.log(todaysFighter);
  })

  return (
    <div className="App">
      <Title />
      <div>
        <GuessBar checkResponse={updateGuessedFighters} todaysFighter={todaysFighter} possibleFighters={allFighters}/>
      </div>
      <div className="Response-rows-heading Headings">
        <p className="R1-heading">Name</p>
        <p className="R2-heading">Nationality</p>
        <p className="R2-heading">Weight</p>
        <p className="R2-heading">Age</p>
        <p className="R2-heading">Height</p>
        <p className="R2-heading">Wins</p>
        <p className="R2-heading">Peak Rank</p>
        <p className="R2-heading">Last Fight</p>
      </div>
      <div>
        <hr className='Divider-line'/>
      </div>
      <div className='Guess-rows'>
      {guessed <= 0 ? 
          (<UnattemptedGuess guessNum='1'/> )
          :
          (<Fighter fighter={fightersGuessed[0]} todaysFighter={todaysFighter} />)
      }
      {guessed <= 1 ? 
          (<UnattemptedGuess guessNum='2'/> )
          :
          (<Fighter fighter={fightersGuessed[1]} todaysFighter={todaysFighter} />)
      }
      {guessed <= 2 ? 
          (<UnattemptedGuess guessNum='3'/> )
          :
          (<Fighter fighter={fightersGuessed[2]} todaysFighter={todaysFighter} />)
      }
      {guessed <= 3 ? 
          (<UnattemptedGuess guessNum='4'/> )
          :
          (<Fighter fighter={fightersGuessed[3]} todaysFighter={todaysFighter} />)
      }
      {guessed <= 4 ? 
          (<UnattemptedGuess guessNum='5'/> )
          :
          (<Fighter fighter={fightersGuessed[4]} todaysFighter={todaysFighter} />)
      }
      {guessed <= 5 ? 
          (<UnattemptedGuess guessNum='6'/> )
          :
          (<Fighter fighter={fightersGuessed[5]} todaysFighter={todaysFighter} />)
      }
      {guessed <= 6 ? 
          (<UnattemptedGuess guessNum='7'/> )
          :
          (<Fighter fighter={fightersGuessed[6]} todaysFighter={todaysFighter} />)
      }
      {guessed <= 7 ? 
          (<UnattemptedGuess guessNum='8'/> )
          :
          (<Fighter fighter={fightersGuessed[7]} todaysFighter={todaysFighter} />)
      }
      </div>
    </div>
  );
}

export default App;
