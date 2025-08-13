import React from 'react';

export const UnattemptedGuess = ({ guessNum }) => {
    return (
        <div className='Unattempted-guess'>
            <p>Guess {guessNum}</p>
        </div>
    );
}

