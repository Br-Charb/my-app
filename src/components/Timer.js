import React, { useState, useEffect, useRef } from "react";

export const Timer = ( {PauseTime} ) => {
    const [time, setTime] = useState(0);
    const intervalRef = useRef(null);

    const hours = Math.floor(time/3600);
    const minutes = Math.floor((time-hours*60)/60);
    const seconds = time-(minutes*60 + hours*3600);

    useEffect(() => {
        if (intervalRef.current) {
            clearInterval(intervalRef.current);
        }

        intervalRef.current = setInterval(() => {
            setTime((time) => time + 1);
        }, 1000);

    }, []);

    useEffect (() => {
        if (PauseTime) {
            clearInterval(intervalRef.current);
            intervalRef.current = null;
        }
    }, [PauseTime]);

    return (
        <div className="Timer">
            {`${hours}`.padStart(2, "0")}:{`${minutes}`.padStart(2, "0")}:{`${seconds}`.padStart(2, "0")}
        </div>
    )
}