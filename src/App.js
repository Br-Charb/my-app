import './App.css';

function App() {
  return (
    <div className="App">
      <header className="Title-row">
        <img src='/images/octagon_left.png' className="App-logo App-logo-left" alt="octagon_left" />
        <h1 className='App-title'>OCTADLE</h1>
        <img src="/images/octagon_right.png" className="App-logo App-logo-right" alt="octagon_right" />
      </header>
      <div>
        <input type="text" className="Guess-prompt" placeholder="Guess"/>
      </div>
      <div className="Responses">
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
        <p className='Divider-line'>---------------------------------------------------------------------------------</p>
      </div>
      <div className="Responses">
        <p className="R1-response">Khabib <br/>Nurmagomedov</p>
        <p className="R2-response"><img src='/images/flag_of_russia.png' className="Flag-image" alt="Russian Flag" /></p>
        <p className="R2-response">Light weight</p>
        <p className="R2-response">36</p>
        <p className="R2-response">5' 10"</p>
        <p className="R2-response">70"</p>
        <p className="R2-response">Champ</p>
        <p className="R2-response">UFC 254</p>
      </div>
      <div className="Responses">
        <p className="R1-response">Charles <br/>Oliveira</p>
        <p className="R2-response"><img src='/images/flag_of_brazil.png' className="Flag-image" alt="Brazillian Flag" /></p>
        <p className="R2-response">Light weight</p>
        <p className="R2-response">35</p>
        <p className="R2-response">5' 10"</p>
        <p className="R2-response">74"</p>
        <p className="R2-response">Champ</p>
        <p className="R2-response">UFC 309</p>
      </div>
      <div className="Responses">
        <p className="R1-response">Zabit<br/>Magomedsharipov</p>
        <p className="R2-response"><img src='/images/flag_of_russia.png' className="Flag-image" alt="Russian Flag" /></p>
        <p className="R2-response">Feather Weight</p>
        <p className="R2-response">34</p>
        <p className="R2-response">6' 1"</p>
        <p className="R2-response">73"</p>
        <p className="R2-response">#3</p>
        <p className="R2-response">Zabit vs Kattar</p>
      </div>
    </div>
  );
}

export default App;
