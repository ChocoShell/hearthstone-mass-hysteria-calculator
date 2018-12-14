import React from 'react';

class MinionCountForm extends React.Component {
  state = {
    friendlyCount: '',
    enemyCount: ''
  }
  handleSubmit = e => {
    e.preventDefault();
    this.props.handleSubmit(this.state.friendlyCount, this.state.enemyCount);
  }

  handleFriendlyChange = event => {
    event.preventDefault();
    let value = event.target.value;
    this.setState({friendlyCount: value});
  }

  handleEnemyChange = event => {
    event.preventDefault();
    const value = event.target.value;
    this.setState({enemyCount: value});
  }

  render() {
    return (
      <form onSubmit={this.handleSubmit}>
        <div className="form-group col-sm-4">
          <div className="form-group row">
            <label htmlFor="friendly" className="col-sm-4 col-form-label"># of Friendly Minions:</label>
            <input
              onChange={this.handleFriendlyChange}
              type="text"
              className="form-control col-sm-4"
              id="friendly"
              placeholder="Max 7"
            />
          </div>
          <div className="form-group row">
            <label htmlFor="enemy" className="col-sm-4 col-form-label"># of Enemy Minions:</label>
            <input
              onChange={this.handleEnemyChange}
              type="text"
              className="form-control col-sm-4"
              id="enemy"
              placeholder="Max 7"
            />
          </div>
          <div className="form-group row">
            <label htmlFor="enemy" className="col-sm-4 col-form-label"># of Trials:</label>
            <input
              onChange={this.props.handleTrialChange}
              type="text"
              className="form-control col-sm-4"
              id="enemy"
              placeholder="Max 1,000,000"
              value={this.props.trials}
            />
          </div>
        </div>
        <input type="submit" value="Submit" />
      </form>
    );
  }
}

export default MinionCountForm;
