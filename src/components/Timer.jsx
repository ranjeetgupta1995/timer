import React, { useEffect, useRef, useState } from 'react';
import './timer.css'

const fixString = (num) => {
    return num <= 9 ? `0${num}` : num;
}

const formateTime = (timeInSecs) => {
    const secs = timeInSecs % 60;
    const mins = Math.floor(timeInSecs/60) % 60;
    const hrs = Math.floor(timeInSecs/3600);

    return `${fixString(hrs)}:${fixString(mins)}:${fixString(secs)}`;
}

const Timer = () => {
    const [time, setTime] = useState(0);
    const timeRef = useRef(null);

    useEffect(() => {
        const cleanup = () => {
            stopTimer();
        }
        return cleanup;
    }, [])

    const startTimer = () => {
        timeRef.current = setInterval(() => {
            setTime((prevTime) => prevTime + 1)
            console.log(time)
        }, 10)
        
    }

    const stopTimer = () => {
        clearInterval(timeRef.current);
        timeRef.current = null;
    }

    const resetTimer = () => {
        setTime(0);
        clearInterval(timeRef.current);
    }

    return (
        <>
        <div className='container'>
            <div className='time-container'>
                <h1 className='timer'>{formateTime(time)}</h1>
            </div>
            <div className='btn-container'>
                <button onClick={startTimer}>Start Timer</button>
                <button onClick={stopTimer}>Stop Timer</button>
                <button onClick={resetTimer}>Reset Timer</button>
            </div>
        </div>
        </>
    )
}

export default Timer;