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
    // need to handle all the cards and flip them all on a click which probably needs useRef 
    return (
        <div className="card_wrapper" >
            <div className="card" onMouseMove={handle_hover} onMouseLeave={handle_leave} onClick={(e) => { handleClick(e, title) }} >
                <div className="face">
                    <img className="card_image" src={image} alt="" />
                    <div className="title_container">
                        <h1 className="pokemon_name">{title}</h1>
                    </div>
                </div>

                <div className="face">
                    <img className="card_image_back" src="image.jpg" alt="" />
                </div>
            </div>

        </div>


    )







}