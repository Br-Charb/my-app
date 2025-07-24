import React, { useState, useEffect } from 'react';
import './App.css';
import { Title } from './components/Title';
import { Fighter } from './components/Fighter';
import { UnattemptedGuess } from './components/UnattemptedGuess';
import { GuessBar } from './components/GuessBar';
import { GameOver } from './components/GameOver';
import { GuessSlot } from './components/GuessSlot';
import { Timer } from './components/Timer';

function App() {

  const [guessed, setGuessed] = useState(0);
  const [todaysFighter, setTodaysFighter] = useState(null);
  const [allFighters, setAllFighters] = useState(null);
  const [fightersGuessed, setFightersGuessed] = useState([null, null, null, null, null, null, null, null]);
  const [gameComplete, setGameComplete] = useState(false);
  const [showSilhoutte, setShowSilhoutte] = useState(false);

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
    let tempFighters = fightersGuessed;
    tempFighters[guessed] = fighter;
    setFightersGuessed(tempFighters);
    setGuessed(guessed+1);
    console.log(todaysFighter);
    checkGameOver(fighter);
  })

  const checkGameOver = ((currFighter) => {
    if (currFighter === todaysFighter || guessed === 7) {
      setGameComplete(true);
      setShowSilhoutte(true);
    }

  });

  return (
    <div className="App">
      <Title />
      <div className='Input-row'>
        <Timer PauseTime={gameComplete}/>
        <GuessBar checkResponse={updateGuessedFighters} possibleFighters={allFighters} disableinput={gameComplete} />
        <button className='Show-player' onClick={() => setShowSilhoutte(!(showSilhoutte))}>Show Fighter</button>
      </div>
      <div>
        {(todaysFighter !== null) && <GameOver fighter={todaysFighter} guesses={guessed} silhoutteViewable={gameComplete} openDiv={showSilhoutte}/>}
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
        {[...Array(8).keys()].map((num) => (
          <GuessSlot key={num} fighterSelected={fightersGuessed[num]} todaysFighter={todaysFighter} guessNumber={num+1} currGuessNumber={guessed}/>
        ))}
      </div>
      <footer className="Project-footer"> 
        Built by Br-Charb
        <div className="Footer-icons">
          <div>
            <a href="https://github.com/Br-Charb" target="_blank">
              <img src="/images/general/GithubLogo.png" className="Company-logo" alt="Github Logo" />
            </a>
          </div>
          <div>
            <a href="https://www.linkedin.com/in/ben-charb/" target="_blank">
              <img src="/images/general/Linkedinlogo.svg" className="Company-logo" alt="Linkedin Logo" />
            </a>
          </div>
        </div>
      </footer>
    </div>
  );
}

export default App;
