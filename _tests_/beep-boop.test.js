import { TestScheduler } from 'jest';
import { beepBoop } from './../src/beep-boop.js'

describe('beepBoop', () => {
  test('it should return an error if argument is undefined or not a number', () => {
    expect (beepBoop("")).toEqual("error, please enter a number")
  });

  test('it should return an array with length equal to the argument passed + 1', () => {
    expect (beepBoop(3).length).toEqual(4)
  });

  test("the returned array should have all numbers containing a 3 replaced with 'won't you be my neighbor?'", () => {
    expect (beepBoop(31)[31]).toEqual(" Won't you be my neighbor?")
  });

 test("the returned array should have all numbers containing a 2 replaced with 'boop'", () => {
    expect (beepBoop(22)[21]).toEqual(" Boop!")
  });

  test("the returned array should have all numbers containing a 1 replaced with 'Beep!'", () => {
    expect (beepBoop(11)[1]).toEqual(" Beep!")
  });
});
