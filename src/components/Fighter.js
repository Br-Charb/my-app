import React from 'react';

export const Fighter = ({ fighter }) => {
    const {
      name, 
      flag, 
      weightClass, 
      age, height, 
      wingspan, 
      rank, 
      lastFight
    } = fighter;
    return (
      <div className="Response-rows Response-body-rows">
        <div className='R1-response Answer-wrong'>
          <img src={`/images/${(name.toLowerCase()).split(" ").join("-")}.png`} className="Fighter-image" alt={name} />
          <p className="Fighter-name-text"> {name} </p>
        </div>
        <p className="R2-response Nationality-weight-lastfight-box Answer-correct"><img src={`/images/flag-of-${flag}.png`} className="Flag-image" alt="Russian Flag" /></p>
        <p className="R2-response Nationality-weight-lastfight-box Answer-wrong">{weightClass}</p>
        <p className="R2-response Age-height-wingspan-peakrank-box Answer-close">{age}</p>
        <p className="R2-response Age-height-wingspan-peakrank-box Answer-close">{height}</p>
        <p className="R2-response Age-height-wingspan-peakrank-box Answer-close">{wingspan}</p>
        <p className="R2-response Age-height-wingspan-peakrank-box Answer-wrong">{rank}</p>
        <p className="R2-response Nationality-weight-lastfight-box Answer-wrong">{lastFight}</p>
      </div>
    );
}