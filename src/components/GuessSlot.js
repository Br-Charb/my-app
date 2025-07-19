import React from 'react';
import { Fighter } from './Fighter';
import { UnattemptedGuess } from './UnattemptedGuess';

export const GuessSlot = ({ fighterSelected, todaysFighter, guessNumber, currGuessNumber}) => {
    return (
        <>
            {currGuessNumber < guessNumber ? 
                (<UnattemptedGuess guessNum={guessNumber}/> )
                :
                (<Fighter fighter={fighterSelected} todaysFighter={todaysFighter} />)
            }
        </>
    );
}
