import React, { useState } from 'react';
import './App.css';
import { Title } from './components/Title';
import { Fighter } from './components/Fighter';
import { UnattemptedGuess } from './components/UnattemptedGuess';
import { GuessBar } from './components/GuessBar';

function App() {

  const [guessed, setGuessed] = useState(0)

  return (
    <div className="App">
      <Title />
      <div>
        <GuessBar checkResponse={() => setGuessed(guessed+1)}/>
      </div>
      <div className="Response-rows-heading Headings">
        <p className="R1-heading">Name</p>
        <p className="R2-heading">Nationality</p>
        <p className="R2-heading">Weight</p>
        <p className="R2-heading">Age</p>
        <p className="R2-heading">Height</p>
        <p className="R2-heading">record</p>
        <p className="R2-heading">Peak Rank</p>
        <p className="R2-heading">Last Fight</p>
      </div>
      <div>
        <hr className='Divider-line'/>
      </div>
      <div className='Guess-rows'>
        {/* <Fighter 
          fighter={{
            name: "Charles Oliveira",
            flag: "Brazil",
            weightClass: "light weight", 
            age: "35", 
            height: "5' 10\"",
            record: "74\"", 
            rank: "Champ", 
            lastFight: "UFC 309"}} 
        />
        <Fighter 
          fighter={{
            name: "Zabit Magomedsharipov",
            flag: "Russia",
            weightClass: "feather weight", 
            age: "34", 
            height: "6' 1\"",
            record: "73\"", 
            rank: "#3", 
            lastFight: "Zabit vs Kattar"}} 
        /> */}
        {guessed <= 0 ? 
          (<UnattemptedGuess guessNum='1'/> )
          :
          (<Fighter 
            fighter={{
              name: "Khabib Nurmagomedov",
              flag: "Russia",
              weightClass: "light weight", 
              age: "36", 
              height: "5' 10\"",
              record: "70\"", 
              rank: "Champ", 
              lastFight: "UFC Fight Night: Shevchenko vs. Pena"}} 
          />)
      }
      {guessed <= 1 ? 
          (<UnattemptedGuess guessNum='2'/> )
          :
          (<Fighter 
            fighter={{
              name: "Jack Della Maddalena",
              flag: "Russia",
              weightClass: "bantam weight (womens)", 
              age: "36", 
              height: "5' 10\"",
              record: "70\"", 
              rank: "Champ", 
              lastFight: "UFC 254"}} 
          />)
      }
      {guessed <= 2 ? 
          (<UnattemptedGuess guessNum='3'/> )
          :
          (<Fighter 
            fighter={{
              name: "kimbo slice",
              flag: "Russia",
              weightClass: "light weight", 
              age: "36", 
              height: "5' 10\"",
              record: "70\"", 
              rank: "Champ", 
              lastFight: "UFC Fight Night: Ortega vs. The Korean Zombie"}} 
          />)
      }
      {guessed <= 3 ? 
          (<UnattemptedGuess guessNum='4'/> )
          :
          (<Fighter 
            fighter={{
              name: "Randy Couture",
              flag: "Usa",
              weightClass: "light weight", 
              age: "36", 
              height: "5' 10\"",
              record: "70\"", 
              rank: "Champ", 
              lastFight: "UFC 254"}} 
          />)
      }
      {guessed <= 4 ? 
          (<UnattemptedGuess guessNum='5'/> )
          :
          (<Fighter 
            fighter={{
              name: "Beneil Dariush",
              flag: "Iran",
              weightClass: "light weight", 
              age: "36", 
              height: "5' 10\"",
              record: "70\"", 
              rank: "Champ", 
              lastFight: "UFC 254"}} 
          />)
      }
      {guessed <= 5 ? 
          (<UnattemptedGuess guessNum='6'/> )
          :
          (<Fighter 
            fighter={{
              name: "Tom Aspinall",
              flag: "Switzerland",
              weightClass: "light weight", 
              age: "36", 
              height: "5' 10\"",
              record: "70\"", 
              rank: "Champ", 
              lastFight: "UFC 254: Nurmagomedov vs. Gaethje"}} 
          />)
      }
      </div>
    </div>
  );
}

export default App;
