import React from 'react';
import './teammateName.css';
import * as firebase from 'firebase';

class TeammateName extends React.Component{

    constructor(props){
        super(props);

        this.state={
            teammateName: ''
        }

        this.gotData = this.gotData.bind(this);
        this.showPlayerName = this.showPlayerName.bind(this);
        this.readData = this.readData.bind(this);
    }

    gotData(data){
        var playerName = data.val();
         this.setState({
             teammateName: playerName
         })
    }

    errData(err){
        console.log('error');
        console.log(err);
    }

    showPlayerName(){
        return(
            <p>
                {this.state.teammateName}
            </p>
        )
    }

    readData(){
        var ref = firebase.database().ref(`teams/${this.props.team}/${this.props.player}`);
        ref.on('value', this.gotData, this.errData);
    }

    componentWillMount(){
        {this.readData()};
    }

    render(){
        return(
            <div class='player-name-block'>
               {this.showPlayerName()}
            </div>
        )
    }
}

export default TeammateName;