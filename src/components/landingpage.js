import React from 'react';
import { Cell, Grid, Button, Navigation } from 'react-mdl';
import { BrowserRouter as Router, BrowserRouter, Link } from "react-router-dom";
import './landingpage.css';
import Player from './player';
import * as firebase from 'firebase';


class LandingPage extends React.Component{

    constructor(props){
        super(props);
        this.state = {
            teamName: '',
            player1: '',
            player2: '',
            player3: '',
            player4: '',
            player5: ''
        };
        this.handleTermChange = this.handleTermChange.bind(this);
        this.writeUserData = this.writeUserData.bind(this);
        this.clearPage = this.clearPage.bind(this);

    }

    clearPage(){
        document.getElementById("landing-header-main").style.display = 'none';
        document.getElementById("thanks-message").style.display = 'block';
        document.getElementById("view-teams-thanks-button").style.display = 'block';
    }

    handleTermChange(event){
        console.log("term change");
        this.setState({ 
            [event.target.name]: event.target.value
         });
    }

    writeUserData() {
        if(this.state.player1&&this.state.player2&&this.state.player3&&this.state.player4&&this.state.teamName){
        firebase.database().ref('teams/' + this.state.teamName).set({
          player1: this.state.player1,
          player2: this.state.player2,
          player3: this.state.player3,
          player4: this.state.player4,
          player5: this.state.player5
        });
        this.clearPage();
    }
    else{
        console.log('not enough data')
    }
      }

    

    render(){
        return(
            <div>
                
            <div id='landing-header-main'>
            
                    <Grid id="site-title">
                        {/* <Cell col={4}></Cell> */}
                        <Cell col={12}>
                            <div className="site-title-block">
                                The Carroll County Classic
                                <p>Summer 2020</p>
                            </div>
                        </Cell>
                        
                        {/* <Cell col={2}></Cell> */}
                    </Grid>
                    
                    
                        <Grid>
                            <Cell col={6} id='player-grid'>
                            
                            <div id="team-name" >
                                <Player name="teamName" label="Team" onTermChange={this.handleTermChange}/>
                            </div>
                            <Player name="player1" label="Player 1" onTermChange={this.handleTermChange}/>
                            <Player name="player2" label="Player 2" onTermChange={this.handleTermChange}/>
                            <Player name="player3" label="Player 3" onTermChange={this.handleTermChange}/>
                            <Player name="player4" label="Player 4" onTermChange={this.handleTermChange}/>
                            <Player name="player5" label="Player 5" extraLabel="(Optional)" onTermChange={this.handleTermChange}/>
                            <div className='button-block'>
                                
                                <Button primary id="submitButton" className="mdl-color--indigo" onClick={this.writeUserData} raised colored>Sign Up</Button>
                                
                                <Link to="/teams">
                                    <Button>Teams</Button>
                                </Link>
                                
                            </div> 
                            </Cell>
                            
                            <Cell col={6}></Cell>
                        </Grid>
                        
                        
                    
                </div>
                <p id="thanks-message">Thanks!</p>
                <div>
                <div className='button-block-thanks'>
                    <a href='/teams'>
                        <Button primary id="view-teams-thanks-button" raised colored>View Teams</Button>
                    </a>
                </div>
                </div>
            </div>

        )
    }
}

export default LandingPage;