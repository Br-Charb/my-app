import React, {useState} from 'react';

export const GuessBar = (({ checkResponse, possibleFighters, disableinput }) => {

    const [inputValue, setInputValue] = useState('');
    const [fighter, setFighter] = useState(null);
    const [isOpen, setIsOpen] = useState(false);
    const [fightersGuessed, setFightersGuessed] = useState([]);

    const returnFighterInfo = ((fighterName) => {
        return possibleFighters.find(possibleFighters => possibleFighters.Fighter.toLowerCase() === fighterName.toLowerCase());
    })

    const checkNameSimilarity = ((text, fighter) => {
        const firstName = (fighter.Fighter.toLowerCase()).startsWith(text);
        const lastName = (fighter.Fighter.toLowerCase()).split(" ").slice(-1)[0].startsWith(text);
        const emptySearch = text !== "";
        return (firstName || lastName) && emptySearch && !(fightersGuessed.includes(fighter));
    })

    const submitFighter = ((fighter) => {
        console.log(fighter);
        setFightersGuessed([...fightersGuessed, fighter]);
        checkResponse(fighter);
        setInputValue('');
    })
    
    return (
        <>
            {disableinput ? 
                (
                    <>
                        <input type='text' className='Guess-prompt' placeholder='Game Over' disabled/>
                    </>
                )
                :
                (
                    <div>
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
                                possibleFighters.filter(item => checkNameSimilarity(inputValue.toLowerCase(), item)).map((item) => (
                                <div className='Individual-guess' onClick={() => submitFighter(item)}>
                                    {item.Fighter}
                                </div>
                            ))}
                        </div>}
                    </div>
                )
            }
        </>
    );
})