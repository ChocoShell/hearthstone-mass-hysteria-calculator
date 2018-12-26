import { fight, mysample, range } from './utils';

// Mass Hysteria Function with Minion Objects
export const massHysteriaObjects = minions => {
  const order = mysample(range(minions.length));

  const finalBoardState = order.reduce( (boardState, i) => {
    const attackerIndex = order[i];
    const attacker = boardState[attackerIndex];

    if (attacker.health > 0) {
      // Maybe add an ID to Minion object?
      let attackees = mysample(range(boardState.length).filter(j => j !== attackerIndex)).map(x => minions[x]);
      // Filter out dead ones
      attackees = attackees.filter(minion => minion.health > 0);
      if (attackees.length > 0) {
        const attackee = attackees[0];
        fight(attacker, attackee);
      }
    }
    return boardState;
  }, minions);
  return finalBoardState;
};

const testMassHysteriaObjects = (boardState, trials) => {

};
