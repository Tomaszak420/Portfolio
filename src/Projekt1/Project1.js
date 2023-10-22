import React, { useState, useRef } from 'react';
import './Project1.scss';
import Box from './box.js';

function Project1() {
    const random = Math.floor(Math.random() * 9) + 1;
    const [score, setScore] = useState(0);
    const maxScore = useRef(0);
    const [ngame, setNgame] = useState(false);
    const [squ, setSqu] = useState(createSqu());
    const [randNumber, setRandNumber] = useState(random);
    const czasss = useRef(30);

    function createSqu() {
        let squList = [];
        for (let i = 1; i < 10; i++) {
            squList.push({
                glow: false,
                id: i
            });
        }
        return squList;
    }

    function play() {
        setRandNumber((prev) => (prev === random ? (random === 9 ? random - 1 : random + 1) : random));
        let newState = squ.map((obj) => {
            if (obj.id === randNumber)
                return { ...obj, glow: true };
            else return { ...obj, glow: false };
        });
        setSqu(newState);
    }

    function timer() {
        czasss.current = 30;
        setNgame(true);
        setScore(0);
        play();
        var timerId = setInterval(countdown, 1000);

        function countdown() {
            const start = document.getElementById('starcik');

            if (czasss.current === -1) {
                setNgame(false);
                setSqu(createSqu());
                clearTimeout(timerId);
                start.disabled = false;
                start.style = 'pointer-events:auto !important';
            } else {
                document.getElementById('time').innerHTML = "Czas: <br/>" + czasss.current + "s";
                czasss.current = czasss.current - 1;
                start.disabled = true;
                start.style = 'pointer-events:none !important';
            }
        }
    }

    if (score > maxScore.current) {
        maxScore.current = score;
    }

    function reciveId(idd) {
        squ.map((squr) => {
            if (squr.id === idd && squr.glow === true) {
                return setScore((prev) => prev + 1);
            } else if (squr.id === idd && squr.glow !== true && ngame) {
                return setScore((prev) => (prev === 0 ? 0 : prev - 1));
            }
            return squr;
        });

        setSqu(createSqu());

        if (ngame) {
            play();
        }
    }

    const rend = squ.map((one) => (
        <div className='col-4'>
            <Box key={one.id} glow={one.glow} rec={() => reciveId(one.id)} />
        </div>
    ));

    return (
        <div>
            <div id='ui'>
                <div id="highscore" className='uii'>
                    Highscore:<br />
                    {maxScore.current}
                </div>
                <div id='time' className='uii'>
                    Czas:<br />
                    {czasss.current}s
                </div>
                <div id="score" className='uii'>
                    Score:<br />
                    {score}
                </div>
            </div>
            <div id='game'>
                <div className='container-flex'>
                    <div className='row'>{rend}</div>
                </div>
            </div>
            <button id="starcik" onClick={() => timer()}>
                Nowa Gra
            </button>
        </div>
    );
}

export default Project1;
