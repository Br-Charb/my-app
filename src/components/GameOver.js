import React, { UseEffect, useState } from "react";

export const GameOver = (({ fighter, guesses, silhoutteViewable, openDiv}) => {

    const [open, setOpen] = useState(true);

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
                                    <div className="Popup-stat">
                                        <div className="Popup-stat-heading">Age</div>
                                        <p className="Popup-stat-text">{Math.floor((Date.now() - (new Date(fighter.Age)))/31622400000)}</p>
                                    </div>
                                    <div className="Popup-stat">
                                        <div className="Popup-stat-heading">Weight</div>
                                        <div className="Popup-stat-text">{fighter.Weight}</div>
                                    </div>
                                </div>
                                <div className="Popup-stat-stack">
                                    <div className="Popup-stat">
                                        <div className="Popup-stat-heading">Peak Rank</div>
                                        <p className="Popup-stat-text">{fighter.PeakRank}</p>
                                    </div>
                                    <div className="Popup-stat">
                                        <div className="Popup-stat-heading">Height</div>
                                        <p className="Popup-stat-text">{fighter.Height}"</p>
                                    </div>
                                    <div className="Popup-stat">
                                        <div className="Popup-stat-heading">Wins</div>
                                        <p className="Popup-stat-text">{fighter.Record.split("-")[0]}</p>
                                    </div>
                                </div>
                            </div>
                            <div className="Popup-stat-right">
                                <div className="Popup-stat">
                                    <div className="Popup-stat-heading-right">Last Card</div>
                                    <p className="Popup-stat-text Popup-right-height">{fighter.LastFight}</p>
                                </div>
                            </div>
                        </div> }
                </div>
            </div>
        </div>
    )
})