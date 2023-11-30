﻿import { useEffect, useState } from "react";
import { TextInput } from "react"
import  './gameS.css'

function GameS(props) {
    const [image, setImage] = useState("");
    useEffect(() => {
        props.socket.on("image", (data) => {
            setImage(data.image);
        });
        props.socket.on("updateScore", (data) => {

        });
    }, []);
    return (
        <div className="game-screen-section">
            <div className="section-header">
                <h2 className="section-title">WIKIHOW GAME</h2>
            </div>
            <div className="game-image">
                <img className="game-image" src={image} alt="Game Screen" />
            </div>
            <ul className="player-list">
                {props.players.map((player, index) => (
                    <li key={index} className="player-item">
                        {player.isHost && '👑'} {player.username} - {player.score}
                    </li>
                ))}
            </ul>
        </div>




    );

}
export default GameS;