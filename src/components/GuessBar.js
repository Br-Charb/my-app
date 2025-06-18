import React, {useState} from 'react';

export const GuessBar = (({ checkResponse, todaysFighter, possibleFighters }) => {

    const [inputValue, setInputValue] = useState('');
    const [fighter, setFighter] = useState(null);
    const [isOpen, setIsOpen] = useState(false);

    const returnFighterInfo = ((fighterName) => {
        return possibleFighters.find(possibleFighters => possibleFighters.Fighter.toLowerCase() === fighterName.toLowerCase());
    })

    const checkNameSimilarity = ((text, fighterName) => {
        const firstName = fighterName.startsWith(text);
        const lastName = fighterName.split(" ").slice(-1)[0].startsWith(text);
        const emptySearch = text !== "";
        return (firstName || lastName) && emptySearch;
    })

    const submitFighter = ((fighter) => {
        console.log(fighter);
        checkResponse(fighter);
        setInputValue('');
    })
    
    return (
        
        <>
            <div>
                <input type="text"
                    className="Guess-prompt" 
                    placeholder="Guess"
                    value={inputValue}

                    onFocus={() => setIsOpen(true)}
                    onBlur={() => setTimeout(() => setIsOpen(false), 100)}

                    onChange={(e) => {
                        console.log(inputValue);
                        setInputValue(e.target.value);
                    }
                    }
                    onKeyDown={(e) => {
                        if (e.key === "Enter"){
                            let fighter = returnFighterInfo(inputValue);
                            if (fighter !== undefined) {
                                submitFighter(fighter);
                                fighter = null;
                            }
                        }
                    }}
                />
            </div>
            {<div className={`Guess-options ${isOpen ? "open" : "close"}`}>
                {Array.isArray(possibleFighters) &&
                    possibleFighters.filter(item => checkNameSimilarity(inputValue.toLowerCase(), item.Fighter.toLowerCase())).map((item) => (
                    <div className='Individual-guess' onClick={() => submitFighter(item)}>
                        {item.Fighter}
                    </div>
                ))}
            </div>}
        </>
    );
})