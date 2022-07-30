import React from 'react'
import { Cell, Grid, Textfield } from 'react-mdl'

class Player extends React.Component {
  render() {
    if (this.props.label == 'Team') {
      return (
        <Grid className="player-grid">
          <Cell col={4}>
            {this.props.label} Name{this.props.extraLabel}:
          </Cell>
          <Cell col={4}>
            <Textfield
              name={this.props.name}
              onChange={this.props.onTermChange}
              label={this.props.label}
            />
          </Cell>
        </Grid>
      )
    } else {
      return (
        <Grid className="player-grid">
          <Cell col={4}>
            {this.props.label} Name + shirt size{this.props.extraLabel}:
          </Cell>
          <Cell col={4}>
            <Textfield
              name={this.props.name}
              onChange={this.props.onTermChange}
              label={this.props.label + ' + shirt size'}
            />
          </Cell>
        </Grid>
      )
    }
  }
}

export default Player
