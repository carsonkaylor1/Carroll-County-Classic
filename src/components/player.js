import React from 'react'
import { Cell, Grid, Textfield} from 'react-mdl';

class Player extends React.Component{

    render(){
        return(
            <Grid className='player-grid'>
                    <Cell col={4}>
                        {this.props.label} Name{this.props.extraLabel}:
                    </Cell>
                    <Cell col={4}>
                        <Textfield 
                            name={this.props.name}
                            onChange={this.props.onTermChange}
                            label={this.props.label}
                            // style={{width: '200px'}}
                        />
                    </Cell>
            </Grid>
        )
    }
}

export default Player;