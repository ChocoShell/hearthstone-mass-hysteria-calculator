import React from 'react';

class Results extends React.Component {

  render() {
    const {attack, healthBefore, healthAfter, survival, isEnemy, clearChance, remainingDamage} = this.props.stats;
    return (
      <div>
        <table className="table">
          <thead className="thead-dark">
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
                  <tr className={isEnemy[index] ? "table-danger" : "table-success"}>
                    <td>{m}</td>
                    <td>{attack[index]}</td>
                    <td>{healthBefore[index]}</td>
                    <td>{healthAfter[index].toFixed(2)}</td>
                    <td>{`${(100*survival[index]).toFixed(2)}%`}</td>
                  </tr>
                );
              })
            }
          </tbody>
        </table>
        <h5>
          {`Chance to Clear Enemy's Board: ${(100*clearChance).toFixed(2)}%`}
        </h5>
        <h5>
          {`Expected Remaining Enemy Damage: ${remainingDamage.toFixed(2)}`}
        </h5>
      </div>
    );
  }
}

export default Results;
