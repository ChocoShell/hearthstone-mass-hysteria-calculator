import React from 'react';

class Results extends React.Component {

  render() {
    const {attack, healthBefore, healthAfter, survival, clearChance, remainingDamage} = this.props.stats;
    return (
      <div>
        <table className="table">
          <thead>
            <tr>
              <th scope="col">Minion</th>
              <th scope="col">Attack</th>
              <th scope="col">Health Before</th>
              <th scope="col">Avg. Health After</th>
              <th scope="col">Surival Chance</th>
            </tr>
          </thead>
          <tbody>
            {
              this.props.minions.map((m, index) => {
                return (
                  <tr>
                    <td>{m}</td>
                    <td>{attack[index]}</td>
                    <td>{healthBefore[index]}</td>
                    <td>{healthAfter[index].toFixed(2)}</td>
                    <td>{survival[index].toFixed(2)}</td>
                  </tr>
                );
              })
            }
          </tbody>
        </table>
        <div>
          {`Chance to Clear Enemy's Board: ${100*clearChance.toFixed(4)}%`}
        </div>
        <div>
          {`Expected Remaining Enemy Damage: ${remainingDamage.toFixed(2)}`}
        </div>
      </div>
    );
  }
}

export default Results;
