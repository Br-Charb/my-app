import React from 'react';

export const Fighter = ({ fighter }) => {
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
    return (
      <div className="Response-body-rows">
        <div className='R1-response Answer-wrong'>
          <img src={`/images/fighterImages/${name.split(" ").join("")}.png`} className="Fighter-image" alt={name} />
          <p className="Fighter-name-text"> {name} </p>
        </div>
        <p className="R2-response Nationality-weight-box Answer-correct"><img src={`/images/flags/${flag}.png`} className="Flag-image" alt={`${flag} Flag`} /></p>
        <p className="R2-response Nationality-weight-box Answer-wrong">{weightClass}</p>
        <p className="R2-response Age-height-record-peakrank-box Answer-close">{age}</p>
        <p className="R2-response Age-height-record-peakrank-box Answer-close">{`${height}\"`}</p>
        <p className="R2-response Age-height-record-peakrank-box Answer-close">{record}</p>
        <p className="R2-response Age-height-record-peakrank-box Answer-wrong">{rank}</p>
        <p className="R2-response Last-fight-box Answer-wrong">{lastFight}</p>
      </div>
    );
}