import React from 'react';

class MinionCountForm extends React.Component {
  state = {
    allyCount: '',
    enemyCount: ''
  }
  handleSubmit = e => {
    e.preventDefault();
    this.props.handleSubmit(this.state.allyCount, this.state.enemyCount);
  }

  handleAllyChange = event => {
    event.preventDefault();
    let value = event.target.value;
    this.setState({allyCount: value});
  }

  handleEnemyChange = event => {
    event.preventDefault();
    const value = event.target.value;
    this.setState({enemyCount: value});
  }

  render() {
    return (
      <form onSubmit={this.handleSubmit}>
        <div className="form-group d-flex flex-column">
          <label htmlFor="ally">Ally Minions on Board:</label>
          <input
            onChange={this.handleAllyChange}
            type="text"
            className="form-control mb-2"
            id="ally"
            placeholder="Ranges from 0 to 7"
          />
          <label htmlFor="enemy">Enemy Minions on Board:</label>
          <input
            onChange={this.handleEnemyChange}
            type="text"
            className="form-control mb-2"
            id="enemy"
            placeholder="Ranges from 0 to 7"
          />
          <label htmlFor="enemy">Trials to Run:</label>
          <input
            onChange={this.props.handleTrialChange}
            type="text"
            className="form-control mb-2"
            id="enemy"
            placeholder="Max 1,000,000"
            value={this.props.trials}
          />
          <small id="trialsHelpInline" className="text-muted">
            Ranges from 1 to 1,000,000
          </small>
        </div>
        <div className="form-inline">
          <button onClick={this.handleSubmit} className="btn btn-secondary">Submit</button>
        </div>
      </form>
    );
  }
}

export default MinionCountForm;
