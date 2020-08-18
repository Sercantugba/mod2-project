import React, { Component } from 'react';
class SearchBar extends Component {
    constructor(props){
        super(props)
        this.state={
            playerData:[],
            playerName:'Player Name'
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
        const playerInfo=this.state.playerData.filter(player=> player.first_name == this.state.playerName);
        console.log('playerInfo',playerInfo);
        // console.log(playerInfo[0].first_name);
        
        const displayInfo=playerInfo.map((player,i)=>{
            return( <div key={i}>
                <p>{player.first_name}</p>
                <p>{player.team.city}</p>
            </div>)
        })
        return (
            <div>
                <h1>Rest in Peace</h1>
                <h2>"The Black Mamba"</h2>
                <h3>1978-2020</h3>
                <img src="https://assets.change.org/photos/1/ga/gh/ORgAghaqrCpZIAy-800x450-noPad.jpg?1580402387"/>
                
                {/* {playerInfo.map((player,i)=><p key={i}>{player.first_name}</p>)} */}
                <div className='Search-bar'>
                <input type='text' value={this.state.playerName} onChange={e=>this.setState({playerName : e.target.value})}/>
                {displayInfo}
                </div>
            </div>
        );
    }
}
export default SearchBar;