import './App.css';
import { Title } from './components/Title'
import { Fighter } from './components/Fighter';

function App() {
  return (
    <div className="App">
      <Title />
      {/* <header className="Title-row">
        <img src='/images/octagon_left.png' className="App-logo App-logo-left" alt="octagon_left" />
        <h1 className='App-title'>OCTADLE</h1>
        <img src="/images/octagon_right.png" className="App-logo App-logo-right" alt="octagon_right" />
      </header> */}
      <div>
        <input type="text" className="Guess-prompt" placeholder="Guess"/>
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
            name: "khabib nurmagomedov",
            flag: "russia",
            weightClass: "light weight", 
            age: "36", 
            height: "5' 10\"",
            wingspan: "70\"", 
            rank: "Champ", 
            lastFight: "UFC 254"}} 
        />
        <Fighter 
          fighter={{
            name: "charles oliveira",
            flag: "brazil",
            weightClass: "light weight", 
            age: "35", 
            height: "5' 10\"",
            wingspan: "74\"", 
            rank: "Champ", 
            lastFight: "UFC 309"}} 
        />
        <Fighter 
          fighter={{
            name: "zabit magomedsharipov",
            flag: "russia",
            weightClass: "feather weight", 
            age: "34", 
            height: "6' 1\"",
            wingspan: "73\"", 
            rank: "#3", 
            lastFight: "Zabit vs Kattar"}} 
        />
      </div>
      <div className='Unattempted-rows'>
        <div className='Unattempted-guess'>
          <p>Guess 4</p>
        </div>
        <div className='Unattempted-guess'>
          <p>Guess 5</p>
        </div>
        <div className='Unattempted-guess'>
          <p>Guess 6</p>
        </div>
      </div>
    </div>
  );
}

export default App;
