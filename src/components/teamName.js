import React from 'react';
import TeammateName from './teammateName';
import './teamName.css'
import * as firebase from 'firebase';


class TeamName extends React.Component{

    constructor(props){
        super(props);

        this.state = {
            playerNames: []
        }

        this.readUserData = this.readUserData.bind(this);
        this.gotData = this.gotData.bind(this);
        this.errData = this.errData.bind(this);
    }

    gotData(data){
        var players = data.val();
        var playerKeys = Object.keys(players);
        this.setState({
            playerNames: playerKeys
        })     
    }

    errData(err){
        console.log('error');
        console.log(err);
    }

    readUserData(){
        var ref = firebase.database().ref(`teams/${this.props.team}`);
        ref.on('value', this.gotData, this.errData);
    }

    componentWillMount(){
        {this.readUserData()};
    }

    render(){
        return(
            <div className="team-block">
                <p className='team-name'>{this.props.team}</p>
                {this.state.playerNames.map(playerName => {
                    return <TeammateName  key={playerName} team={this.props.team} player={playerName}/>
                })}
            </div>

        )
    }
}

export default TeamName;