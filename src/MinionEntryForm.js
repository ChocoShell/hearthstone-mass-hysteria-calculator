import React from 'react';
import Minion from './Minion';
import './MinionEntryForm.css';

class MinionEntryForm extends React.Component {
  state = {
    Friendly1: {
      attack: 0,
      health: 0,
      position: 0
    },
    Friendly2: {
      attack: 0,
      health: 0,
      position: 0
    },
    Friendly3: {
      attack: 0,
      health: 0,
      position: 0
    },
    Friendly4: {
      attack: 0,
      health: 0,
      position: 0
    },
    Friendly5: {
      attack: 0,
      health: 0,
      position: 0
    },
    Friendly6: {
      attack: 0,
      health: 0,
      position: 0
    },
    Friendly7: {
      attack: 0,
      health: 0,
      position: 0
    },
    Enemy1: {
      attack: 0,
      health: 0,
      position: 1
    },
    Enemy2: {
      attack: 0,
      health: 0,
      position: 1
    },
    Enemy3: {
      attack: 0,
      health: 0,
      position: 1
    },
    Enemy4: {
      attack: 0,
      health: 0,
      position: 1
    },
    Enemy5: {
      attack: 0,
      health: 0,
      position: 1
    },
    Enemy6: {
      attack: 0,
      health: 0,
      position: 1
    },
    Enemy7: {
      attack: 0,
      health: 0,
      position: 1
    },
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
          <div className="d-inline-flex">
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
          <div className="d-inline-flex">
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
        { !!(this.props.enemyMinions + this.props.friendlyMinions) &&
          <button className="btn btn-primary" type="submit">Calculate</button>
        }

      </form>
    );
  }
}

export default MinionEntryForm;
