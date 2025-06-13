import React from 'react';

export const Fighter = ({ fighter, todaysFighter }) => {
    const {
      Fighter: name, 
      Nationality: flag, 
      Weight: weightClass, 
      Age: age, 
      Height: height, 
      Record: record, 
      PeakRank: rank, 
      LastFight: lastFight
    } = fighter;

    const ageInYears = Math.floor((Date.now() - (new Date(age)))/31622400000);

    const compareFighter = ((curFighterStat, todaysFighterStat) => {
      if (curFighterStat.toLowerCase() === todaysFighterStat.toLowerCase()) return "Answer-correct";
      if (curFighterStat.toLowerCase() !== todaysFighterStat.toLowerCase()) return "Answer-wrong";
    })

    const checkForWin = ((curFighter, correctFighter) => {
      return curFighter === correctFighter;
    })

    return (
      <div className="Response-body-rows">
        {checkForWin(fighter, todaysFighter) ?
          (
          <>
            <div className="R1-response Answer-correct">
            <img src={`/images/fighterImages/${name.split(" ").join("")}.png`} className="Fighter-image" alt={name} />
            <p className="Fighter-name-text"> {name} </p>
            </div>
            <p className={`R2-response Nationality-weight-box ${"Answer-correct"}`}><img src={`/images/flags/${flag}.png`} className="Flag-image" alt={`${flag} Flag`} /></p>
            <p className={`R2-response Nationality-weight-box ${"Answer-correct"}`}>{weightClass}</p>
            <p className="R2-response Age-height-record-peakrank-box Answer-correct">{ageInYears}</p>
            <p className="R2-response Age-height-record-peakrank-box Answer-correct">{`${height}\"`}</p>
            <p className="R2-response Age-height-record-peakrank-box Answer-correct">{record}</p>
            <p className="R2-response Age-height-record-peakrank-box Answer-correct">{rank}</p>
            <p className="R2-response Last-fight-box Answer-correct">{lastFight}</p>
          </>
          )
        :
          (
            <>
              <div className={`R1-response ${compareFighter(name, todaysFighter.Fighter)}`}>
              <img src={`/images/fighterImages/${name.split(" ").join("")}.png`} className="Fighter-image" alt={name} />
              <p className="Fighter-name-text"> {name} </p>

              </div>
              <div className={`R2-response Nationality-weight-box ${compareFighter(flag, todaysFighter.Nationality)}`}>
                <p><img src={`/images/flags/${flag}.png`} className="Flag-image" alt={`${flag} Flag`} /></p>
              </div>
              <div className={`R2-response Nationality-weight-box ${compareFighter(weightClass, todaysFighter.Weight)}`}>
                {/* <img className="Up-arrow" src="/images/general/UpArrow.png" /> */}
                <p>{weightClass}  </p>
                <img className="Down-arrow" src="/images/general/DownArrow.png" />
              </div>
              <p className={`R2-response Age-height-record-peakrank-box ${compareFighter(age, todaysFighter.Age)}`}>{ageInYears}</p>
              <p className={`R2-response Age-height-record-peakrank-box ${compareFighter(age, todaysFighter.Age)}`}>{`${height}\"`}</p>
              <p className={`R2-response Age-height-record-peakrank-box ${compareFighter(age, todaysFighter.Age)}`}>{record}</p>
              <p className={`R2-response Age-height-record-peakrank-box ${compareFighter(age, todaysFighter.Age)}`}>{rank}</p>
              <div className={`R2-response Last-fight-box ${compareFighter(age, todaysFighter.Age)}`}>
                <img className="Up-arrow" src="/images/general/UpArrow.png" />
                <p>{lastFight}</p>
              </div>
          </>
          )
        }
      </div>
    );
}