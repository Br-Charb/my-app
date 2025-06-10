import React, {useState} from 'react';

export const GuessBar = ({ checkResponse }) => {

    const [inputValue, setInputValue] = useState('');

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
                    console.log(inputValue === "khabib nurmagomedov");
                    // inputValue.toLowerCase() === "khabib nurmagomedov"
                    if (1) {
                        setInputValue('');
                        checkResponse();
                    }
                }
            }}
         />
    );
}