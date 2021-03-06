import React, { Component } from 'react';
class SearchBar extends Component {
    constructor(props){
        super(props)
        this.state={
            playerData:[],
            playerName:' Find Player'
        }
    }
    componentDidMount(){
        fetch('https://www.balldontlie.io/api/v1/players')
        .then(res=>res.json())
        .then(json=>{
            this.setState({playerData : json.data})
            console.log(this.state.playerData);
        })
    }
    render() {
        const playerInfo=this.state.playerData.filter(player=> player.first_name === this.state.playerName);
        // I have also tried to render lastname at the same time but it did not work
        // const playerLast=this.state.playerData.filter(player=> player.last_name === this.state.playerLastname);
        console.log('playerInfo',playerInfo);
        // to make sure if it gives me data
        // console.log(playerInfo[0].first_name);
        
        const displayInfo=playerInfo.map((player,i)=>{
            return( <div key={i}>
                <p>Player Name: {player.first_name}</p>
                <p>Player Lastname: {player.last_name}</p>
                <p>City: {player.team.city}</p>
                <p>Player Height: {player.height_feet} feet {player.height_inches} inch</p>
                <p></p>
            </div>)
        })
        return (
            <div>
                <h1>Rest in Peace</h1>
                <h2>"The Black Mamba"</h2>
                <h3>1978-2020</h3>
                <img src="https://assets.change.org/photos/1/ga/gh/ORgAghaqrCpZIAy-800x450-noPad.jpg?1580402387" alt=''/>
                
                {/* {playerInfo.map((player,i)=><p key={i}>{player.first_name}</p>)} */}
                <div className='Search-bar'>
                <input type='text' value={this.state.playerName} onChange={e=>this.setState({playerName : e.target.value})}/>
                {displayInfo}
                </div>
                {/* <div>
                <input type='text' value={this.state.playerLastname} onChange={e=>this.setState({playerLastname : e.target.value})}/>
                {displayInfo}
                </div> */}
            </div>
        );
    }
}
export default SearchBar;