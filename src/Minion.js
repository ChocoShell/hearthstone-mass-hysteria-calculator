import React from 'react';


class Minion extends React.Component {
  handleChange = (event, field) => {
    event.preventDefault();
    this.props.handleChange(event, field);
  }
  render() {
    return (
      <div className="form-group formy">
        <label htmlFor="InputTicker">{this.props.name}:</label>
        <div className="form-group row">
          <label htmlFor={`${this.props.name}_attack`} className="col-sm-4 col-form-label">Attack:</label>
          <input
            onChange={e => this.handleChange(e, "attack")}
            value={this.props.attack}
            name={this.props.name}
            type="text"
            className="form-control col-sm-4"
            id={`${this.props.name}_attack`}
            placeholder=""
          />
        </div>
        <div className="form-group row">
          <label htmlFor={`${this.props.name}_health`} className="col-sm-4 col-form-label">Health:</label>
          <input
            onChange={e => this.handleChange(e, "health")}
            value={this.props.health}
            name={this.props.name}
            type="text"
            className="form-control col-sm-4"
            id={`${this.props.name}_health`}
            placeholder=""
          />
        </div>
      </div>
    );
  }
}

export default Minion;
