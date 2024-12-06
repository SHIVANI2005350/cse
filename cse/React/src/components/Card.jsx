import React from 'react';
import "./Card.css"
function Card(props){
    return (
        <div className="card">Card
        <h2>{props.name}</h2>
        <img src={props.img} alt="My Image"></img>
        <h2>{props.roll}</h2>
        <Card/>
        <Card/>
        <Card/>
        </div>
    )
}
export default Card