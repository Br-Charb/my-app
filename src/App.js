import './App.css';
import { Title } from './components/Title'
import { Fighter } from './components/Fighter';
import { UnattemptedGuess } from './components/UnattemptedGuess';
import { GuessBar } from './components/GuessBar';

function App() {
  return (
    <div className="App">
      <Title />
      <div>
        <GuessBar />
      </div>
      <div className="Response-rows Headings">
        <p className="R1-heading">Name</p>
        <p className="R2-heading">Nationality</p>
        <p className="R2-heading">Weight</p>
        <p className="R2-heading">Age</p>
        <p className="R2-heading">Height</p>
        <p className="R2-heading">Wingspan</p>
        <p className="R2-heading">Peak Rank</p>
        <p className="R2-heading">Last Fight</p>
      </div>
      <div>
        <hr className='Divider-line'/>
      </div>
      <div className='Attempted-rows'>
        <Fighter 
          fighter={{
            name: "Khabib Nurmagomedov",
            flag: "Russia",
            weightClass: "light weight", 
            age: "36", 
            height: "5' 10\"",
            wingspan: "70\"", 
            rank: "Champ", 
            lastFight: "UFC 254"}} 
        />
        <Fighter 
          fighter={{
            name: "Charles Oliveira",
            flag: "Brazil",
            weightClass: "light weight", 
            age: "35", 
            height: "5' 10\"",
            wingspan: "74\"", 
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
            wingspan: "73\"", 
            rank: "#3", 
            lastFight: "Zabit vs Kattar"}} 
        />
      </div>
      <div className='Unattempted-rows'>
        <UnattemptedGuess guessNum='4'/>
        <UnattemptedGuess guessNum='5'/>
        <UnattemptedGuess guessNum='6'/>
      </div>
    </div>
  );
}

export default App;
