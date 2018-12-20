import React from 'react';
import Minion from './Minion';
import {baseFriendlyMinion, baseEnemyMinion} from './constants'

class MinionEntryForm extends React.Component {
  state = {
    Friendly1: baseFriendlyMinion,
    Friendly2: baseFriendlyMinion,
    Friendly3: baseFriendlyMinion,
    Friendly4: baseFriendlyMinion,
    Friendly5: baseFriendlyMinion,
    Friendly6: baseFriendlyMinion,
    Friendly7: baseFriendlyMinion,
    Enemy1: baseEnemyMinion,
    Enemy2: baseEnemyMinion,
    Enemy3: baseEnemyMinion,
    Enemy4: baseEnemyMinion,
    Enemy5: baseEnemyMinion,
    Enemy6: baseEnemyMinion,
    Enemy7: baseEnemyMinion,
  };

  handleSubmit = event => {
    event.preventDefault();
    this.props.handleSubmit(this.state)
  }

  handleChange = (event, field, id) => {
    event.preventDefault();
    let value = parseInt(event.target.value);
    if (isNaN(value)) {
      value = 0;
    }
    this.setState({[id]: {
      ...this.state[id],
      [field]: value
    }})
  }

  render() {
    return (
      <form onSubmit={this.handleSubmit}>
        <div>
          <div className="d-flex align-content-center flex-wrap">
            { 
              (Array.from(Array(this.props.enemyMinions).keys())).map( i => {
                return (
                  <Minion
                    name={`Enemy ${i+1}`}
                    key={`Enemy${i+1}`}
                    attack={this.state[`Enemy${i+1}`][0]}
                    health={this.state[`Enemy${i+1}`][1]}
                    handleChange={(e, field) => this.handleChange(e, field, `Enemy${i+1}`)}
                  />
                )
              })
            }
          </div>
          <br />
          <div className="d-flex align-content-center flex-wrap">
            { 
              (Array.from(Array(this.props.friendlyMinions).keys())).map( i => {
                return (
                  <Minion
                    name={`Friendly ${i+1}`}
                    key={`Friendly${i+1}`}
                    attack={this.state[`Friendly${i+1}`][0]}
                    health={this.state[`Friendly${i+1}`][1]}
                    handleChange={(e, field) => this.handleChange(e, field, `Friendly${i+1}`)}
                  />
                )
              })
            }
          </div>
        </div>
        <div className="d-flex justify-content-center">
          { !!(this.props.enemyMinions + this.props.friendlyMinions) &&
            <button className="btn btn-primary" type="submit">Calculate</button>
          }
        </div>
      </form>
    );
  }
}

export default MinionEntryForm;
