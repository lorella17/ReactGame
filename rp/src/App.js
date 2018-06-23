import React, { Component } from 'react';
import PlayerCard from "./components/PlayerCard";
import Wrapper from "./components/Wrapper/Wrapper";
import Title from "./components/Title/Title";
import players from "./players.json";
// import Header from "./components/Header/header";

// import logo from './logo.svg';
import "./App.css";

class App extends Component {
    state = {
        score: 0,
        topScore: 0,
    };

    removePlayer = id => {
    const players = this.state.players.filter(player => player.id !==id);
    this.setState({ players});

    };


sortImages = (id, clicked) => {
        const imageOrder = players;

        if (clicked) {
            console.log("true");
            imageOrder.forEach((img, index) => {
                imageOrder[index].clicked = false;

            });
            return this.setState({
                image: imageOrder.sort(() => Math.random() - 0.5),
                topScore: this.state.counter,
                counter: 0
            })
        }
        else {
            console.log("false");
            imageOrder.forEach((image, index) => {
                if (id === image.id) {
                    imageOrder[index].clicked = true;

                }
            });
            return this.setState({image: imageOrder.sort(() => Math.random() - 0.5), counter: this.state.counter + 1})
        }
    };

    render(){
        return (

            <Wrapper>

                <nav className="navbar">
                    <ul>
                        <li></li>
                        <li>Click a Player to Begin</li>
                        <li>Score:{this.state.score | this.state.topScore} </li>
                    </ul>
                </nav>


                <Title>Think, Guess & Click!</Title>

                {players.map(player => (
                    <PlayerCard
                    removePlayer = {this.sortImages}
                    id ={player.id}
                    key = {player.id}
                    name = {player.name}
                    image = {player.image}
                    position = {player.position}
                    team = {player.team}
                    clicked = {player.clicked}
                    />
                ))}

            </Wrapper>
        );
    }

}
export default App;
