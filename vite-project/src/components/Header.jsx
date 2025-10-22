import "./../styles/Header.css"


export function Header({ highestScore, crntScore }) {

    return <>
        <h1 className="game_title">Memory Game</h1>
        <h3 className="score">Highest Score : <span className="score_number">{highestScore}</span> </h3>
        <h3 className="score">Current Score : <span className="score_number">{crntScore}</span> </h3>

    </>






}