import '../../styles/Card.css'

function Card(props) {
    return (
        <div className="card-layout">
            {props.imagePath != null && (
                <img src={props.imagePath} alt='증명사진'/>
            )}
            {props.title != null && (
                <p>{props.title}</p>
            )}
            {props.content != null && (
                props.content.map((line, index) => {
                    return <p key={index}>{line}</p>
                })
            )}
        </div>
    );
}

export default Card;