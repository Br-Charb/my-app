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
        <div className="Response-rows Response-body-rows">
          <div className='R1-response Answer-wrong'>
            <img src='/images/khabib-nurmagomedov.png' className="Fighter-image" alt="khabib-nurmagomedov" />
            <p className="Fighter-name-text"> Khabib Nurmagomedov</p>
          </div>
          <p className="R2-response Nationality-weight-lastfight-box Answer-correct"><img src='/images/flag_of_russia.png' className="Flag-image" alt="Russian Flag" /></p>
          <p className="R2-response Nationality-weight-lastfight-box Answer-wrong">Light weight</p>
          <p className="R2-response Age-height-wingspan-peakrank-box Answer-close">36</p>
          <p className="R2-response Age-height-wingspan-peakrank-box Answer-close">5' 10"</p>
          <p className="R2-response Age-height-wingspan-peakrank-box Answer-close">70"</p>
          <p className="R2-response Age-height-wingspan-peakrank-box Answer-wrong">Champ</p>
          <p className="R2-response Nationality-weight-lastfight-box Answer-wrong">UFC 254</p>
        </div>
        <div className="Response-rows Response-body-rows">
          <div  className='R1-response Answer-wrong'>
            <img src='/images/charles-oliveira.png' className="Fighter-image" alt="charles-oliveira" />
            <p className="Fighter-name-text">Charles Oliveira</p>
          </div>
          <p className="R2-response Nationality-weight-lastfight-box Answer-wrong"><img src='/images/flag_of_brazil.png' className="Flag-image" alt="Brazillian Flag" /></p>
          <p className="R2-response Nationality-weight-lastfight-box Answer-wrong">Light weight</p>
          <p className="R2-response Age-height-wingspan-peakrank-box Answer-close">35</p>
          <p className="R2-response Age-height-wingspan-peakrank-box Answer-close">5' 10"</p>
          <p className="R2-response Age-height-wingspan-peakrank-box Answer-close">74"</p>
          <p className="R2-response Age-height-wingspan-peakrank-box Answer-wrong">Champ</p>
          <p className="R2-response Nationality-weight-lastfight-box Answer-wrong">UFC 309</p>
        </div>
        <div className="Response-rows Response-body-rows">
          <div  className='R1-response Answer-correct'>
            <img src='/images/zabit-magomedsharipov.png' className="Fighter-image" alt="zabit-magomedsharipov" />
            <p className="Fighter-name-text"> Zabit Magomedsharipov</p>
          </div>
          <p className="R2-response Nationality-weight-lastfight-box Answer-correct"><img src='/images/flag_of_russia.png' className="Flag-image" alt="Russian Flag" /></p>
          <p className="R2-response Nationality-weight-lastfight-box Answer-correct">Feather Weight</p>
          <p className="R2-response Age-height-wingspan-peakrank-box Answer-correct">34</p>
          <p className="R2-response Age-height-wingspan-peakrank-box Answer-correct">6' 1"</p>
          <p className="R2-response Age-height-wingspan-peakrank-box Answer-correct">73"</p>
          <p className="R2-response Age-height-wingspan-peakrank-box Answer-correct">#3</p>
          <p className="R2-response Nationality-weight-lastfight-box Answer-correct">Zabit vs Kattar</p>
        </div>
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
