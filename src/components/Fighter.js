import React from 'react';
import { StatBox } from './StatBox';

export const Fighter = ({ fighter, todaysFighter }) => {
    const {
      Fighter: name, 
      Nationality: flag, 
      Weight: weightClass, 
      Age: age, 
      Height: height, 
      Record: record, 
      PeakRank: rank, 
      LastFight: lastFight,
      LastFightDate: lastFightDate
    } = fighter;

    const {
      Fighter: correctName, 
      Nationality: correctFlag, 
      Weight: correctWeightClass, 
      Age: correctAge, 
      Height: correctHeight, 
      Record: correctRecord, 
      PeakRank: correctRank, 
      LastFight: correctLastFight,
      LastFightDate: correctLastFightDate
    } = todaysFighter;

    const weightClassToNumber = {
      "straw weight": 1,
      "fly weight": 2,
      "fly weight": 2,
      "bantam weight": 3,
      "feather weight": 4,
      "light weight": 5,
      "welter weight": 6,
      "middle weight": 7,
      "light heavy weight": 8,
      "heavy weight": 9
    }

    const ageInYears = ((age) => Math.floor((Date.now() - (new Date(age)))/31622400000));
    
    const translateWins = ((record) => record.split("-")[0]);

    const translateRank = ((rank) => {
      if (rank.toLowerCase() === "champ") return 17
      else if (rank.toLowerCase() == "interim champ") return 16
      else if (rank.toLowerCase() === "unranked") return 0
      else return 16-Number(rank.slice(1));
    });

    const translateHeight = ((height) => Number(height.split("' ")[0])*12 + Number(height.split("' ")[1]));

    const checkCorrectGuess = ((currFighter, correctFighter) => {
      return currFighter === correctFighter;
    });

    return (
      <div className="Response-body-rows">
          <>
            <StatBox text={name} value={name} correctValue={correctName} type={"name"} />

            <StatBox text={flag} value={flag} correctValue={correctFlag} type={"nationality"} />

            <StatBox text={weightClass} value={weightClassToNumber[weightClass]} correctValue={weightClassToNumber[correctWeightClass]} type={"weightClass"} />

            <StatBox text={ageInYears(age)} value={ageInYears(age)} correctValue={ageInYears(correctAge)} type={"age"} />

            <StatBox text={`${height}\"`} value={translateHeight(height)} correctValue={translateHeight(correctHeight)} type={"height"} />

            <StatBox text={translateWins(record)} value={translateWins(record)} correctValue={translateWins(correctRecord)} type={"wins"} />

            <StatBox text={rank} value={translateRank(rank)} correctValue={translateRank(correctRank)} type={"rank"} />

            <StatBox text={lastFight} value={new Date(lastFightDate)} correctValue={new Date(correctLastFightDate)} type={"lastFight"} />
          </>
        {/* {checkCorrectGuess(fighter, todaysFighter) ?
          (
          <>
            <StatBox text={name} value={name} correctValue={correctName} type={"name"} />

            <StatBox text={flag} value={flag} correctValue={correctFlag} type={"nationality"} />

            <StatBox text={weightClass} value={weightClassToNumber[weightClass]} correctValue={weightClassToNumber[correctWeightClass]} type={"weightClass"} />

            <StatBox text={ageInYears(age)} value={ageInYears(age)} correctValue={ageInYears(correctAge)} type={"age"} />

            <StatBox text={`${height}\"`} value={translateHeight(height)} correctValue={translateHeight(correctHeight)} type={"height"} />

            <StatBox text={translateWins(record)} value={translateWins(record)} correctValue={translateWins(correctRecord)} type={"wins"} />

            <StatBox text={rank} value={translateRank(rank)} correctValue={translateRank(correctRank)} type={"rank"} />

            <StatBox text={lastFight} value={(new Date(lastFightDate)).getTime()} correctValue={(new Date(correctLastFightDate)).getTime()} type={"lastFight"} />
          </>
          )
        :
          (
            <>
              <StatBox text={name} value={name} correctValue={correctName} type={"name"} />

              <StatBox text={flag} value={flag} correctValue={correctFlag} type={"nationality"} />

              <StatBox text={weightClass} value={weightClassToNumber[weightClass]} correctValue={weightClassToNumber[correctWeightClass]} type={"weightClass"} />

              <StatBox text={ageInYears(age)} value={ageInYears(age)} correctValue={ageInYears(correctAge)} type={"age"} />

              <StatBox text={`${height}\"`} value={translateHeight(height)} correctValue={translateHeight(correctHeight)} type={"height"} />

              <StatBox text={translateWins(record)} value={translateWins(record)} correctValue={translateWins(correctRecord)} type={"wins"} />

              <StatBox text={rank} value={translateRank(rank)} correctValue={translateRank(correctRank)} type={"rank"} />

              <StatBox text={lastFight} value={new Date(lastFightDate)} correctValue={new Date(correctLastFightDate)} type={"lastFight"} />
          </>
          )
        } */}
      </div>
    );
}