import "./../styles/Game.css"
import { useState } from "react"
import { useEffect } from "react"
import { fetchData } from "./../services/API"
import { Header } from "./Header"
import { Footer } from "./Footer"
import { Card } from "./Card"
import { shuffle } from "./../services/shuffle.js"



export function Game() {

    const [crntScore, setCrntScore] = useState(0);
    const [active, setActive] = useState(true);
    const [highestScore, setHighestScore] = useState(0);
    const [data, setData] = useState(null);
    const [connectionTrial, setConnectionTrial] = useState(0);
    const [clickedSet, setClickedSet] = useState(new Set());

    useEffect(() => {
        fetchData().then((data) => {
            setData(data);
        }).catch(() => {
            if (connectionTrial < 10) {
                console.log(connectionTrial);
                setConnectionTrial(connectionTrial + 1);
            }
        })

    }, [connectionTrial])

    let shuffeledData = [];
    if (data != null) {
        shuffeledData = Array.from(data);
        shuffle(shuffeledData);
    }

    let handleClick = (e, name) => {
        if (clickedSet.has(name)) {
            setActive(false);
            setHighestScore(Math.max(highestScore, crntScore));
            setClickedSet(new Set());
        }
        else {
            setCrntScore(crntScore + 1);
            let new_set = new Set(clickedSet);
            new_set.add(name);
            setClickedSet(new_set);
        }
    }
    if (!active) {
        return <>
            <div className="modal">
                <h1 className="score">you scored :{crntScore}</h1>
                <button className="button" onClick={() => { setActive(true); setCrntScore(0); }}>Restart</button>
            </div>
        </>
    }

    if (data == null && connectionTrial < 10) {
        return <>
            <h1 className="loading">Loading...</h1>
            <footer> <Footer></Footer>  </footer>
        </>
    }
    else if (data == null) {
        return <h1 className="sorry">Sorry we Couldn't fetch the Cards, please try again later.</h1>
    }
    else {
        return <>
            <header> <Header crntScore={crntScore} highestScore={highestScore}></Header> </header>

            <div className="deck">
                <Card title={shuffeledData[0].name} image={shuffeledData[0].image} handleClick={handleClick} ></Card>
                <Card title={shuffeledData[1].name} image={shuffeledData[1].image} handleClick={handleClick} ></Card>
                <Card title={shuffeledData[2].name} image={shuffeledData[2].image} handleClick={handleClick} ></Card>
                <Card title={shuffeledData[3].name} image={shuffeledData[3].image} handleClick={handleClick} ></Card>
                <Card title={shuffeledData[4].name} image={shuffeledData[4].image} handleClick={handleClick}></Card>
            </div>

            <footer> <Footer></Footer>  </footer>
        </>
    }

}