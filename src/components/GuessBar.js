import React, {useState} from 'react';

export const GuessBar = ({ checkResponse, todaysFighter, possibleFighters }) => {

    const [inputValue, setInputValue] = useState('');
    const [fighter, setFighter] = useState(null);

    const returnFighterInfo = ((fighterName) => {
        return possibleFighters.find(possibleFighters => possibleFighters.Fighter.toLowerCase() === fighterName.toLowerCase());
    })
    
    return (
        <input type="text"
            className="Guess-prompt" 
            placeholder="Guess"
            value={inputValue}
            onChange={(e) => {
                console.log(inputValue);
                setInputValue(e.target.value);
            }
            }
            onKeyDown={(e) => {
                if (e.key === "Enter"){
                    let fighter = returnFighterInfo(inputValue);
                    if (fighter !== undefined) {
                        checkResponse(fighter);
                        setInputValue('');
                        fighter = null;
                    }
                }
            }}
        />
    );
}