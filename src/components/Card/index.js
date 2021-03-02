import React from "react";
import ReactDOM from "react-dom";
import './style.css';

const Card=(props) => {
    return (
        <div className="Card" name={props.info.names}>
            <div className="imgContain">
                <img src={props.info.imgUrl} alt={props.info.names} height = "300px" width="400px"></img>{/* These images seem to have been linked to the correct directory but it isn't being shown*/}
            </div>
            <div className="text">
                <h1>{props.info.title}</h1>
                <p>{props.info.paragh}</p>
            </div>
        </div>
    )
}

export default Card