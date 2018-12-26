import testMassHysteria, {massHysteria, massHysteriaObjects, Minion} from "./massHysteria";

describe("testMassHysteria", () => {
  it("clears board with enemy minions", () => {
    const minionOne = new Minion(1,3);
    const minionTwo = new Minion(2,3);

    const stats = massHysteriaObjects([
      minionOne,
      minionTwo,
    ]);
    expect(stats).toEqual(
      expect.arrayContaining([
        {attack: 1, health: -1},
        {attack: 2, health: 1},
      ])
    );
  })

  it("doesn't clears board with enemy minions", () => {
    const actual = testMassHysteria([2,3,1,2,3,1], 10000);

    expect(actual.healthAfter).toEqual(expect.arrayContaining([-1, -1]));
    expect(actual.survival).toEqual(expect.arrayContaining([0, 0]));
    expect(actual.clearChance).toBe(1);
    expect(actual.remainingDamage).toBe(0);
  })

  it("should clear", () => {
    const minions = [
      1,1,0,
      3,1,0,
      1,8,0,
      2,2,1,
      3,2,1,
    ]
    const actual = testMassHysteria(minions, 10000);

    expect(actual.healthAfter).toEqual(expect.arrayContaining([-1, -1]));
    expect(actual.survival).toEqual(expect.arrayContaining([0, 0]));
    expect(actual.clearChance).toBe(1);
    expect(actual.remainingDamage).toBe(0);
  })
})