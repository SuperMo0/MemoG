import "./../styles/card.css"


function handle_hover(e) {

    // console.log();

    const mX = e.clientX;
    const mY = e.clientY;

    const target = e.currentTarget
    const bound = target.getBoundingClientRect();
    const midX = bound.width / 2;
    const midY = bound.height / 2;

    const xD = (mX - bound.x - midX) / (bound.width / 2);
    const yD = (mY - bound.y - midY) / (bound.height / 2);


    target.style.transform = `rotateY(${xD * 0.05}turn) rotateX(${-yD * 0.05}turn)`;
}

function handle_leave(e) {
    e.currentTarget.style.transform = "";
}

export function Card({ title, image, handleClick }) {


    return (
        <div className="card_wrapper" onClick={() => { handleClick(title) }}>
            <div className="card" onMouseMove={handle_hover} onMouseLeave={handle_leave}>
                <img className="card_image" src={image} alt="" />
                <div className="title_container">
                    <h1 className="pokemon_name">{title}</h1>
                </div>
            </div>
        </div>


    )







}