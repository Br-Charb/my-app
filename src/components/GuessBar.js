import React, { useState, useEffect, useRef, useMemo } from 'react';

const checkNameSimilarity = ((text, fighter, fightersGuessed) => {
        const firstName = (fighter.Fighter.toLowerCase()).startsWith(text);
        const lastName = (fighter.Fighter.toLowerCase()).split(" ").slice(-1)[0].startsWith(text);
        const emptySearch = text !== "";
        return (firstName || lastName) && emptySearch && !(fightersGuessed.includes(fighter));
    })

export const GuessBar = (({ checkResponse, possibleFighters, disableinput }) => {

    const [inputValue, setInputValue] = useState('');
    const [fightersGuessed, setFightersGuessed] = useState([]);
    const [inputFocused, setInputFocused] = useState(false);
    const [dropdownHeight, setDropdownHeight] = useState(0);

    const guessOptionsRef = useRef(null);


    const returnFighterInfo = ((fighterName) => {
        return possibleFighters.find(possibleFighters => possibleFighters.Fighter.toLowerCase() === fighterName.toLowerCase());
    })

    const submitFighter = ((fighter) => {
        console.log(fighter);
        setFightersGuessed([...fightersGuessed, fighter]);
        checkResponse(fighter);
        setInputValue('');
    })

    const fightersDisplayed = useMemo(() => 
        Array.isArray(possibleFighters) 
            ? possibleFighters.filter(item => 
            checkNameSimilarity(inputValue.toLowerCase(), item, fightersGuessed)
        )
        : [], [inputValue, possibleFighters, fightersGuessed]);

    const isOpen = inputFocused && fightersDisplayed.length > 0;

    useEffect(() => {
        if (guessOptionsRef.current) {
            const targetHeight = isOpen ? Math.min((fightersDisplayed.length*50), 247) : 0;
            setDropdownHeight(targetHeight);
        }
    }, [isOpen, fightersDisplayed]);
    
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
                            <input 
                                type="text"
                                className="Guess-prompt" 
                                placeholder="Guess"
                                value={inputValue}

                                onFocus={() => setInputFocused(true)}
                                onBlur={() => setTimeout(() => setInputFocused(false), 100)}

                                onChange={(e) => {
                                    setInputValue(e.target.value);
                                }
                                }
                                onKeyDown={(e) => {
                                    if (e.key === "Enter"){
                                        let fighter = returnFighterInfo(inputValue);
                                        if (fighter !== undefined) {
                                            submitFighter(fighter);
                                        }
                                    }
                                }}
                            />
                        </div>
                        {<div ref={guessOptionsRef} className="No-scrollbar" style={{
                            height: `${dropdownHeight}px`,
                            transition: `height 0.6s ease`,
                            overflow: 'hidden',
                            overflowY: 'auto',
                        }}>
                            <div className={`Guess-options No-scrollbar`}>
                                {fightersDisplayed.map((item) => (
                                    <div className='Individual-guess' onClick={() => submitFighter(item)} key={item.Fighter}>
                                        {item.Fighter}
                                    </div>
                                ))}
                            </div>
                        </div>}
                    </div>
                )
            }
        </>
    );
})