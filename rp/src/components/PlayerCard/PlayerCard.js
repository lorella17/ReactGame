import React from "react";
import "./PlayersCard.css";

const PlayerCard = props => (
    <div className="card">
        <div className="img-container">
            <img alt={props.name} src={props.image} />
        </div>
        <div className="content">
            <ul>
                <li>
                    <strong>Name:</strong> {props.name}
                </li>
                <li>
                    <strong>Position:</strong> {props.position}
                </li>
                <li>
                    <strong>Team:</strong> {props.team}
                </li>
            </ul>
        </div>

        <span onClick={() => props.removePlayer(props.id, props.clicked)} className="remove">
            x
        </span>
    </div>
);

export default PlayerCard;
