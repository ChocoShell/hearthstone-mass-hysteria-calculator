import React from 'react';
import MinionEntryForm from './MinionEntryForm';
import Results from './Results';
import massHysteria from "./massHysteria";


class App extends React.Component {
  state = {
    allyCount: 7 ,
    enemyCount: 7,
    boardMinions: [],
    results: {
      attack: [],
      healthBefore: [],
      healthAfter: [],
      survival: 0,
      isEnemy: 0,
      clearChance: 0,
      remainingDamage: 0
    },
    trials: 100000
  }

  handleCountSubmit = (allies, enemies) => {
    let allyCount = parseInt(allies, 10);
    let enemyCount = parseInt(enemies, 10);
    let trials = this.state.trials;
    let trialCount = trials;
    if (trials > 1000000) {
      trialCount = 1000000;
    } else if (trials < 0) {
      trialCount = 1;
    }
    if (isNaN(allyCount)) {
      allyCount = 0;
    } else if (allyCount > 7) {
      allyCount = 7;
    } else if (allyCount < 0) {
      allyCount = 0;
    }
    if (isNaN(enemyCount)) {
      enemyCount = 0;
    } else if (enemyCount > 7) {
      enemyCount = 7;
    } else if (enemyCount < 0) {
      enemyCount = 0;
    }
    this.setState({
      allyCount,
      enemyCount,
      trials: trialCount
    });
  }

  handleEntrySubmit = (minions) => {
    const result = [];
    const boardMinions = [];
    for (let key in minions) {
      const minion = minions[key];
      console.log(minion);
      if (minion.health > 0) {
        for (let stat of Object.values(minion)) {
          result.push(stat);
        }
        boardMinions.push(key);
      }
    }
    const finalResult = massHysteria(result, this.state.trials);
    console.log(finalResult);
    this.setState({results: finalResult, boardMinions})
  }

  handleTrialChange = event => {
    event.preventDefault();
    let value = parseInt(event.target.value);
    if (!isNaN(value)) {
      this.setState({trials: value});
    }
  }

  render() {
    return (
      <div className="d-flex flex-column">
        <h3>Hearthstone Mass Hysteria Simulator</h3>
        <div className="w-100"><hr/></div>
        <h4>Minion Stats</h4>
        <MinionEntryForm
          friendlyMinions={this.state.allyCount}
          enemyMinions={this.state.enemyCount}
          handleSubmit={this.handleEntrySubmit}
        />
        {
          this.state.boardMinions.length > 0 &&
          (
            <div>
              <h4>Results</h4>
              <Results
                stats={this.state.results}
                trials={this.state.trials}
                minions={this.state.boardMinions}
              />
            </div>
          )
        }
      </div>
    );
  }
}

export default App;
