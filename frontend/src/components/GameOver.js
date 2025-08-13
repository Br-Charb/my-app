import React from "react";

export const GameOver = (({ fighter, silhoutteViewable, openDiv, guesses, winner}) => {

    const silhoutteCheck = ((silhoutteViewable) => {
        return silhoutteViewable ? "" : "Silhoutte";
    })

    const showName = ((silhoutteViewable, fighter) => {
        return silhoutteViewable ? fighter.Fighter : "Unknown";
    })

    return (
        <div className={`Popup-transition ${openDiv ? 'open' : ''}`}>
            <div className={`Popup-box`}>
                <div className="Popup-image-div">
                    <img src={`/images/fighterImages/${fighter.Fighter.split(" ").join("")}.png`} className={`Popup-image ${silhoutteCheck(silhoutteViewable)}`} alt={fighter.Fighter} /> 
                </div>
                <div className="Popup-info-boxes">
                    <div className="Popup-name">
                        <p className="Popup-name-upper">Todays Fighter...</p>
                        <p className="Popup-name-lower">{showName(silhoutteViewable, fighter)}</p>
                    </div>
                    {silhoutteViewable && 
                        <div className="Popup-info open">
                            <div className="Popup-stat-left">
                                <div className="Popup-stat-stack">
                                    <div className="Popup-stat">
                                        <div className="Popup-stat-heading">Nationality</div>                                    <div><img src={`/images/flags/${fighter.Nationality.split(" ").join("")}.png`} className="Popup-flag" alt={`${fighter.Nationality} Flag`} /></div>
                                    </div>
                                    <PopupStat title={"Age"} stat={Math.floor((Date.now() - (new Date(fighter.Age)))/31622400000)}/>
                                    <PopupStat title={"Weight"} stat={fighter.Weight}/>
                                </div>
                                <div className="Popup-stat-stack">
                                    <PopupStat title={"Peak Rank"} stat={fighter.PeakRank}/>
                                    <PopupStat title={"Height"} stat={fighter.Height + '"'}/>
                                    <PopupStat title={"Wins"} stat={fighter.Record.split("-")[0]}/>
                                </div>
                            </div>
                            <div className="Popup-stat-right">
                                <div className="Popup-stat">
                                    <div className="Popup-stat-heading-right">Last Card</div>
                                    <p className="Popup-stat-text Popup-right-height">{fighter.LastFight}</p>
                                </div>
                            </div>
                        </div>
                    }
                </div>
            </div>
            {silhoutteViewable &&
                <div className="Popup-bottom">
                    <div className="Popup-bottom-text">Streak: {"blank"}</div>
                    <div className="Popup-bottom-text">Game <u>{winner ? "Won" : "Lost"}</u></div>
                    <div className="Popup-bottom-text">Guesses: {guesses}</div>
                </div>
            }
        </div>
    )
})

const PopupStat = ({title, stat}) => (
    <div className="Popup-stat">
        <div className="Popup-stat-heading">{title}</div>
        <p className="Popup-stat-text">{stat}</p>
    </div>
)