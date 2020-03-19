import React from 'react';
import './teams.css';
import TeamName from './teamName'
import * as firebase from 'firebase';


class Teams extends React.Component{

    constructor(props){
        super(props);

        this.state = {
            teamNames: [],
            playerNames: ['player1','player2','player3','player4','player5']
        }

        this.readUserData = this.readUserData.bind(this);
        this.gotData = this.gotData.bind(this);
        this.errData = this.errData.bind(this);
        this.displayPlayer = this.displayPlayer.bind(this);
        this.iterateThroughTeam = this.iterateThroughTeam.bind(this);
    }
   
    gotData(data){
        console.log(data);
        var teams = data.val();
        var teamKeys = Object.keys(teams);
        console.log(data.val());
        this.setState({
            teamNames: teamKeys
        })      
    }

    errData(err){
        console.log('error');
        console.log(err);
    }

    gotPlayerData(data){
        console.log('player data');
        console.log(data.val());
        var players = data.val();
        var playerKeys = Object.keys(players)
        console.log(playerKeys);
    }

    iterateThroughTeam(){
        console.log('iterating');
        for(var i=0; i<this.state.teamNames.length; i++){
            console.log(this.state.teamNames[i]);
            var teamNameKey = this.state.teamNames[i];
            for(var j=0; j<this.state.playerNames.length; j++){
                var playerNameKey = this.state.playerNames[j];
                var ref = firebase.database().ref(`teams/${teamNameKey}/${playerNameKey}`)
                ref.on('value', this.displayPlayer)
            }
            // var ref = firebase.database().ref(`teams/${teamNameKey}`)
            // ref.on('value', this.gotPlayerData)
            
         }
    }

    displayPlayer(data){
        console.log(data.val())
    }

    //Read Data from Firebase
    readUserData(){
        console.log('reading user data');
        var ref = firebase.database().ref('teams');
        ref.on('value', this.gotData, this.errData);
    }

    componentWillMount(){
        {this.readUserData()};
    }
    
    render(){
        return(
            <div className='teams-body'>
                <h1>Teams</h1>
            <div className='teams-body-inner'>
                {
                    this.state.teamNames.map(teamName => {
                        return <TeamName team={teamName}/>
                    })
                }
                
            </div>
            </div>
        )
    }
}

export default Teams;