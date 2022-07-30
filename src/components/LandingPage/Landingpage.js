import React from 'react'
import { Cell, Grid, Button, Navigation } from 'react-mdl'
import { BrowserRouter as Router, BrowserRouter, Link } from 'react-router-dom'
import './Landingpage.css'
import Player from '../Player/Player'
import * as firebase from 'firebase'

class LandingPage extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      teamName: '',
      player1: '',
      player2: '',
      player3: '',
      player4: '',
      player5: '',
      player6: '',
      player7: '',
      player8: '',
      player9: '',
      player10: '',
    }
    this.handleTermChange = this.handleTermChange.bind(this)
    this.writeUserData = this.writeUserData.bind(this)
    this.clearPage = this.clearPage.bind(this)
  }

  clearPage() {
    document.getElementById('landing-header-main').style.display = 'none'
    document.getElementById('thanks-message').style.display = 'block'
    document.getElementById('view-teams-thanks-button').style.display = 'block'
  }

  handleTermChange(event) {
    this.setState({
      [event.target.name]: event.target.value,
    })
  }

  writeUserData() {
    if (
      this.state.player1 &&
      this.state.player2 &&
      this.state.player3 &&
      this.state.player4 &&
      this.state.player5 &&
      this.state.player6 &&
      this.state.player7 &&
      this.state.teamName
    ) {
      firebase
        .database()
        .ref('teams/' + this.state.teamName)
        .set({
          player1: this.state.player1,
          player2: this.state.player2,
          player3: this.state.player3,
          player4: this.state.player4,
          player5: this.state.player5,
          player6: this.state.player6,
          player7: this.state.player7,
          player8: this.state.player8,
          player9: this.state.player9,
          player10: this.state.player10,
        })
      this.clearPage()
    } else {
      document.getElementById('error-block').style.display = 'block'
    }
  }

  render() {
    return (
      <div id="main-landing-page-body">
        <div id="landing-header-main">
          <Grid id="site-title">
            {/* <Cell col={4}></Cell> */}
            <Cell col={12}>
              <div className="site-title-block">
                <h1>The Carroll County Classic IV</h1>
                <h3>Dedicated to Aiden Krueger</h3>
                <p>September 10th 2022</p>
                <p>$50 Per Player (This includes T-shirt)</p>
                <p>All proceeds go to The Krueger Hat Trick foundation (KHT)</p>
                <p>
                  For more information please visit{' '}
                  <a href="https://www.thekht.org/" target="_blank">
                    thekht.org
                  </a>
                </p>
                <img
                  src="https://i.imgur.com/j4X0dQS.png"
                  width="200"
                  height="200"
                  id="kht-logo"
                />
                {/* <p id="shirt-purchase">* If you would like to purchase a shirt, please click <a style={{color: 'blue'}} href="https://www.thekht.org/cccsoccer" target="_blank">here</a> *</p> */}
                <br />
              </div>
              <div className="link-block">
                <Link to="/info">
                  <Button
                    style={{ color: 'white' }}
                    className="mdl-color--indigo"
                    id="view-info-button"
                    raised
                  >
                    View Rules
                  </Button>
                </Link>
                <Link to="/teams">
                  <Button
                    style={{ color: 'white' }}
                    className="mdl-color--indigo"
                    id="view-teams-button"
                    raised
                  >
                    View Teams
                  </Button>
                </Link>
              </div>
            </Cell>

            {/* <Cell col={3}></Cell> */}
            <Cell col={12} id="player-grid">
              <h2>Sign Up</h2>
              <div id="team-name">
                <Player
                  name="teamName"
                  label="Team"
                  onTermChange={this.handleTermChange}
                />
              </div>
              <div id="player-name">
                <Player
                  name="player1"
                  label="Player 1"
                  onTermChange={this.handleTermChange}
                />
                <Player
                  name="player2"
                  label="Player 2"
                  onTermChange={this.handleTermChange}
                />
                <Player
                  name="player3"
                  label="Player 3"
                  onTermChange={this.handleTermChange}
                />
                <Player
                  name="player4"
                  label="Player 4"
                  onTermChange={this.handleTermChange}
                />
                <Player
                  name="player5"
                  label="Player 5"
                  onTermChange={this.handleTermChange}
                />
                <Player
                  name="player6"
                  label="Player 6"
                  onTermChange={this.handleTermChange}
                />
                <Player
                  name="player7"
                  label="Player 7"
                  onTermChange={this.handleTermChange}
                />
                <Player
                  name="player8"
                  label="Player 8"
                  extraLabel=" (Optional)"
                  onTermChange={this.handleTermChange}
                />
                <Player
                  name="player9"
                  label="Player 9"
                  extraLabel=" (Optional)"
                  onTermChange={this.handleTermChange}
                />
                <Player
                  name="player10"
                  label="Player 10"
                  extraLabel=" (Optional)"
                  onTermChange={this.handleTermChange}
                />
              </div>
              <div id="error-block" style={{ display: 'none' }}>
                <p>Not enough info entered</p>
              </div>
              <div id="button-block">
                <Button
                  primary
                  id="submitButton"
                  className="mdl-color--indigo"
                  onClick={this.writeUserData}
                  raised
                  colored
                >
                  Sign Up
                </Button>
              </div>
            </Cell>
            {/* <Cell col={3}></Cell> */}

            {/* <Cell col={6}></Cell> */}
          </Grid>
        </div>
        <p id="thanks-message">Thanks!</p>
        <div>
          <div className="button-block-thanks">
            <Link to="/teams">
              <Button id="view-teams-thanks-button">View Teams</Button>
            </Link>
          </div>
        </div>
      </div>
    )
  }
}

export default LandingPage
