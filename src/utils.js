export function Minion (attack, health, position, id) {
  this.attack = attack;
  this.health = health;
  this.position = position;
};

export const fight = (minionOne, minionTwo) => {
  minionOne.health = minionOne.health - minionTwo.attack;
  minionTwo.health = minionTwo.health - minionOne.attack;
};

const shuffle = array => {
  let currentIndex = array.length, temporaryValue, randomIndex;

  // While there remain elements to shuffle...
  while (0 !== currentIndex) {

    // Pick a remaining element...
    randomIndex = Math.floor(Math.random() * currentIndex);
    currentIndex -= 1;

    // And swap it with the current element.
    temporaryValue = array[currentIndex];
    array[currentIndex] = array[randomIndex];
    array[randomIndex] = temporaryValue;
  }

  return array;
};

// a remake of the sample function that prevents sample(x)=sample(1:x) when length(x)=1
export const mysample = (x) => {
  if (x.length > 1) {
    return shuffle(x);
  } else {
    return x
  }
};

// Create list from 0 to n-1
export const range = n => {
  return Array.from(Array(n).keys());
};
