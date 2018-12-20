import React from 'react';
import './Minion.css';

class Minion extends React.Component {
  handleChange = (event, field) => {
    event.preventDefault();
    this.props.handleChange(event, field);
  }
  render() {
    return (
      <div className="form-group minion-size">
        <label htmlFor="Minion">{this.props.name}:</label>
        <div className="form-inline">
          <label htmlFor={`${this.props.name}_attack`} className="col-sm-4 col-form-label">Attack:</label>
          <input
            onChange={e => this.handleChange(e, "attack")}
            value={this.props.attack}
            name={this.props.name}
            type="text"
            className="form-control col-sm-6"
            id={`${this.props.name}_attack`}
            placeholder=""
          />
        </div>
        <div className="form-inline">
          <label htmlFor={`${this.props.name}_health`} className="col-sm-4 col-form-label">Health:</label>
          <input
            onChange={e => this.handleChange(e, "health")}
            value={this.props.health}
            name={this.props.name}
            type="text"
            className="form-control col-sm-6"
            id={`${this.props.name}_health`}
            placeholder=""
          />
        </div>
      </div>
    );
  }
}

export default Minion;
