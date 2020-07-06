import React from 'react';
import './info.css';
import {Button } from 'react-mdl';
import { BrowserRouter as Router, BrowserRouter, Link } from "react-router-dom";

class Info extends React.Component{
    constructor(props){
        super(props)
    }

    render(){
        return(
            <div id='info-body'>
                <h1>CC Classic Info</h1>
                <div id='general-info'>
                    <h4>General Info</h4>
                    <div id='general-info-list'>
                    <ul>
                        <li>Please sign up your team before the start of the game</li>
                        <li>If you do not have a team, no sweat! Come anyways and you will be put on a team</li>
                    </ul>
                    </div>
                </div>

                <div id='rules-body'>
                    <h4>Rules</h4>
                    <h6>*Rules Subject to Change</h6>
                    <div id='rules-list'>
                    <ul>
                        <li>Games will be 5v5 (One of these players will be goalie)</li>
                        <li>Teams can have up to 7 players</li>
                        <li>10 minute games with 5 minute sudden death OT. At the end of OT if score is still tied, winner will be determined by PKs</li>
                    </ul>
                    </div>
                </div>
                <div className='back-to-sign-up'>
                    <Link to="/" style={{color: 'white'}}>
                        <Button style={{color: 'white'}}>Back to Sign-up</Button>
                    </Link>
                </div>
            </div>
        )
    }
}

export default Info;