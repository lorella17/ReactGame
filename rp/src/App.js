import React, { Component } from 'react';
import PlayerCard from "./components/PlayerCard";
import Wrapper from "./components/Wrapper/Wrapper";
import Title from "./components/Title/Title";
import players from "./players.json";
// import logo from './logo.svg';
import "./App.css";

class App extends Component {
    state = {
        players
    };

    removePlayer = id => {
    const players = this.state.players.filter(player => player.id !==id);
    this.setState({ players});

    };

    sortImages = (id, clicked) => {

        const imageOrder = this.state.image;


        if (clicked) {
            console.log("true");
            imageOrder.forEach((img, index) => {
                // console.log(imageOrder[index].clicked);
                imageOrder[index].clicked = false;
                // console.log(imageOrder[index].clicked);
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
                    // console.log(imageOrder[index].clicked);
                }
            });
            return this.setState({image: imageOrder.sort(() => Math.random() - 0.5), counter: this.state.counter + 1})
        }
    };

    render(){
        return (
            <Wrapper>
                <Title>Player List</Title>

                {this.state.players.map(player => (
                    <PlayerCard
                    removePlayer = {this.removePlayer}
                    id ={player.id}
                    key = {player.id}
                    name = {player.name}
                    image = {player.image}
                    position = {player.position}
                    team = {player.team}
                    />
                ))}
            </Wrapper>
        );
    }

}
export default App;
