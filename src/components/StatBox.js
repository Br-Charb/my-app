import React from "react";

export const StatBox = (({text, value, correctValue, type}) => {

    const compareFighter = ((currFighterStat, todaysFighterStat) => {
        if (currFighterStat === todaysFighterStat) return "Answer-correct";
        else if (["weightclass", "age", "height", "wins", "rank"].includes(type.toLowerCase()) && Math.abs(value-correctValue) <= 3) return "Answer-close";
        else if (type === "lastFight" && Math.abs(value-correctValue) <= 7905600000) return "Answer-close";
        if (currFighterStat !== todaysFighterStat) return "Answer-wrong";
    })

    const getStyle = {
        "nationality": "Nationality-weight-box",
        "weightClass": "Nationality-weight-box",
        "age": "Age-height-record-box",
        "height": "Age-height-record-box",
        "wins": "Age-height-record-box",
        "rank": "Peakrank-box",
        "lastFight": "Last-fight-box"
    }
    
    const showArrow = (["weightClass", "age", "height", "wins", "rank", "lastFight"].includes(type)) && (value !== correctValue);

    const arrowDirection = value - correctValue > 0 ? true : false;
    return(
        <>
            {type !== "name" ?
                ( 
                <div className={`R2-response ${getStyle[type]} ${compareFighter(value, correctValue)}`}>
                    {showArrow && !(arrowDirection) && <img className="Up-arrow" src="/images/general/UpArrow.png" />}
                    {type !== "nationality" && <p>{text}</p>}
                    {type === "nationality" && <p><img src={`/images/flags/${text}.png`} className="Flag-image" alt={`${text} Flag`} /></p>}
                    {showArrow && (arrowDirection) && <img className="Down-arrow" src="/images/general/DownArrow.png" />}
                </div>
                )
                :
                (
                <div className={`R1-response ${compareFighter(value, correctValue)}`}>
                    <img src={`/images/fighterImages/${value.split(" ").join("")}.png`} className="Fighter-image" alt={value} />
                    <p className="Fighter-name-text"> {value} </p>
                </div>
                )
            }
        </>
    )

})