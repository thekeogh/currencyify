import { beforeEach, describe, expect, it } from "vitest";

import { Currencyify } from "@src/currencify";

import * as h from "@test.helpers";

/**
 * Declare a variable that can hold an instance of Currencyify.
 */
let currencify: Currencyify;

/**
 * Constructor
 *
 * @function
 * @see {@link Currencyify#constructor}
 */
describe("Constructor", () => {
  it("Throws an error when no amount is provided", () => {
    // @ts-ignore
    expect(() => new h.Currencyify()).toThrowError("An amount must be provided to create a Currencyify instance.");
    // @ts-ignore
    expect(() => new h.Currencyify(null)).toThrowError("An amount must be provided to create a Currencyify instance.");
    // @ts-ignore
    expect(() => new h.Currencyify("")).toThrowError("An amount must be provided to create a Currencyify instance.");
    // @ts-ignore
    expect(() => new h.Currencyify(undefined, h.currency())).toThrowError("An amount must be provided to create a Currencyify instance.");
    // @ts-ignore
    expect(() => new h.Currencyify(undefined, h.currency(), h.locale())).toThrowError("An amount must be provided to create a Currencyify instance.");
    // @ts-ignore
    expect(() => new h.Currencyify(undefined, undefined, h.locale())).toThrowError("An amount must be provided to create a Currencyify instance.");
  });
  it("Throws an error when the amount is not a string or number", () => {
    // @ts-ignore
    expect(() => new h.Currencyify({})).toThrowError("Please provide the amount as a string or a number.");
    // @ts-ignore
    expect(() => new h.Currencyify(true)).toThrowError("Please provide the amount as a string or a number.");
    // @ts-ignore
    expect(() => new h.Currencyify(false)).toThrowError("Please provide the amount as a string or a number.");
    // @ts-ignore
    expect(() => new h.Currencyify([])).toThrowError("Please provide the amount as a string or a number.");
  });
  it("Does not throw an error if the amount is zero", () => {
    currencify = h.currencyify(0);
    expect(currencify).toBeTruthy();
    expect(currencify["amount"]).toBe(0);
  });
});

/**
 * Value
 *
 * @function
 * @see {@link Currencyify#value}
 */
describe("Value", () => {
  it(`Returns 3394.00 for '${h.amounts.strSymbolZeros}'`, () => {
    expect(h.currencyify(h.amounts.strSymbolZeros).value()).toBe("3394.00");
  });
  it(`Returns 12.30 for '${h.amounts.strSymbolSingle}'`, () => {
    expect(h.currencyify(h.amounts.strSymbolSingle).value()).toBe("12.30");
  });
  it(`Returns 5930.91 for '${h.amounts.strSymbolDouble}'`, () => {
    expect(h.currencyify(h.amounts.strSymbolDouble).value()).toBe("5930.91");
  });
  it(`Returns 215.00 for '${h.amounts.strInteger}'`, () => {
    expect(h.currencyify(h.amounts.strInteger).value()).toBe("215.00");
  });
  it(`Returns 100.00 for '${h.amounts.strIntegerRound}'`, () => {
    expect(h.currencyify(h.amounts.strIntegerRound).value()).toBe("100.00");
  });
  it(`Returns 46029.00 for '${h.amounts.strDecimalZero}'`, () => {
    expect(h.currencyify(h.amounts.strDecimalZero).value()).toBe("46029.00");
  });
  it(`Returns 535.00 for '${h.amounts.strDecimalZeros}'`, () => {
    expect(h.currencyify(h.amounts.strDecimalZeros).value()).toBe("535.00");
  });
  it(`Returns 90.50 for '${h.amounts.strDecimalSingle}'`, () => {
    expect(h.currencyify(h.amounts.strDecimalSingle).value()).toBe("90.50");
  });
  it(`Returns 3287.41 for '${h.amounts.strDecimalDouble}'`, () => {
    expect(h.currencyify(h.amounts.strDecimalDouble).value()).toBe("3287.41");
  });
  it(`Returns 42329.00 for ${h.amounts.numInteger}`, () => {
    expect(h.currencyify(h.amounts.numInteger).value()).toBe("42329.00");
  });
  it(`Returns 40000.00 for ${h.amounts.numIntegerRound}`, () => {
    expect(h.currencyify(h.amounts.numIntegerRound).value()).toBe("40000.00");
  });
  it(`Returns 296.00 for ${h.amounts.numDecimalZero}`, () => {
    expect(h.currencyify(h.amounts.numDecimalZero).value()).toBe("296.00");
  });
  it(`Returns 8679.00 for ${h.amounts.numDecimalZeros}`, () => {
    expect(h.currencyify(h.amounts.numDecimalZeros).value()).toBe("8679.00");
  });
  it(`Returns 38.20 for ${h.amounts.numDecimalSingle}`, () => {
    expect(h.currencyify(h.amounts.numDecimalSingle).value()).toBe("38.20");
  });
  it(`Returns 2680.68 for ${h.amounts.numDecimalDouble}`, () => {
    expect(h.currencyify(h.amounts.numDecimalDouble).value()).toBe("2680.68");
  });
});

/**
 * Dollars
 *
 * @function
 * @see {@link Currencyify#dollars}
 */
describe("Dollars", () => {
  it(`Returns 3394 for '${h.amounts.strSymbolZeros}'`, () => {
    expect(h.currencyify(h.amounts.strSymbolZeros).dollars()).toBe(3394);
  });
  it(`Returns 12 for '${h.amounts.strSymbolSingle}'`, () => {
    expect(h.currencyify(h.amounts.strSymbolSingle).dollars()).toBe(12);
  });
  it(`Returns 5930 for '${h.amounts.strSymbolDouble}'`, () => {
    expect(h.currencyify(h.amounts.strSymbolDouble).dollars()).toBe(5930);
  });
  it(`Returns 215 for '${h.amounts.strInteger}'`, () => {
    expect(h.currencyify(h.amounts.strInteger).dollars()).toBe(215);
  });
  it(`Returns 100 for '${h.amounts.strIntegerRound}'`, () => {
    expect(h.currencyify(h.amounts.strIntegerRound).dollars()).toBe(100);
  });
  it(`Returns 46029 for '${h.amounts.strDecimalZero}'`, () => {
    expect(h.currencyify(h.amounts.strDecimalZero).dollars()).toBe(46029);
  });
  it(`Returns 535 for '${h.amounts.strDecimalZeros}'`, () => {
    expect(h.currencyify(h.amounts.strDecimalZeros).dollars()).toBe(535);
  });
  it(`Returns 90 for '${h.amounts.strDecimalSingle}'`, () => {
    expect(h.currencyify(h.amounts.strDecimalSingle).dollars()).toBe(90);
  });
  it(`Returns 3287 for '${h.amounts.strDecimalDouble}'`, () => {
    expect(h.currencyify(h.amounts.strDecimalDouble).dollars()).toBe(3287);
  });
  it(`Returns 42329 for ${h.amounts.numInteger}`, () => {
    expect(h.currencyify(h.amounts.numInteger).dollars()).toBe(42329);
  });
  it(`Returns 40000 for ${h.amounts.numIntegerRound}`, () => {
    expect(h.currencyify(h.amounts.numIntegerRound).dollars()).toBe(40000);
  });
  it(`Returns 296 for ${h.amounts.numDecimalZero}`, () => {
    expect(h.currencyify(h.amounts.numDecimalZero).dollars()).toBe(296);
  });
  it(`Returns 8679 for ${h.amounts.numDecimalZeros}`, () => {
    expect(h.currencyify(h.amounts.numDecimalZeros).dollars()).toBe(8679);
  });
  it(`Returns 38 for ${h.amounts.numDecimalSingle}`, () => {
    expect(h.currencyify(h.amounts.numDecimalSingle).dollars()).toBe(38);
  });
  it(`Returns 2680 for ${h.amounts.numDecimalDouble}`, () => {
    expect(h.currencyify(h.amounts.numDecimalDouble).dollars()).toBe(2680);
  });
});

/**
 * Cents
 *
 * @function
 * @see {@link Currencyify#cents}
 */
describe("Cents", () => {
  it(`Returns 0 for '${h.amounts.strSymbolZeros}'`, () => {
    expect(h.currencyify(h.amounts.strSymbolZeros).cents()).toBe(0);
  });
  it(`Returns 30 for '${h.amounts.strSymbolSingle}'`, () => {
    expect(h.currencyify(h.amounts.strSymbolSingle).cents()).toBe(30);
  });
  it(`Returns 91 for '${h.amounts.strSymbolDouble}'`, () => {
    expect(h.currencyify(h.amounts.strSymbolDouble).cents()).toBe(91);
  });
  it(`Returns 0 for '${h.amounts.strInteger}'`, () => {
    expect(h.currencyify(h.amounts.strInteger).cents()).toBe(0);
  });
  it(`Returns 0 for '${h.amounts.strIntegerRound}'`, () => {
    expect(h.currencyify(h.amounts.strIntegerRound).cents()).toBe(0);
  });
  it(`Returns 0 for '${h.amounts.strDecimalZero}'`, () => {
    expect(h.currencyify(h.amounts.strDecimalZero).cents()).toBe(0);
  });
  it(`Returns 0 for '${h.amounts.strDecimalZeros}'`, () => {
    expect(h.currencyify(h.amounts.strDecimalZeros).cents()).toBe(0);
  });
  it(`Returns 50 for '${h.amounts.strDecimalSingle}'`, () => {
    expect(h.currencyify(h.amounts.strDecimalSingle).cents()).toBe(50);
  });
  it(`Returns 41 for '${h.amounts.strDecimalDouble}'`, () => {
    expect(h.currencyify(h.amounts.strDecimalDouble).cents()).toBe(41);
  });
  it(`Returns 0 for ${h.amounts.numInteger}`, () => {
    expect(h.currencyify(h.amounts.numInteger).cents()).toBe(0);
  });
  it(`Returns 0 for ${h.amounts.numIntegerRound}`, () => {
    expect(h.currencyify(h.amounts.numIntegerRound).cents()).toBe(0);
  });
  it(`Returns 0 for ${h.amounts.numDecimalZero}`, () => {
    expect(h.currencyify(h.amounts.numDecimalZero).cents()).toBe(0);
  });
  it(`Returns 0 for ${h.amounts.numDecimalZeros}`, () => {
    expect(h.currencyify(h.amounts.numDecimalZeros).cents()).toBe(0);
  });
  it(`Returns 20 for ${h.amounts.numDecimalSingle}`, () => {
    expect(h.currencyify(h.amounts.numDecimalSingle).cents()).toBe(20);
  });
  it(`Returns 68 for ${h.amounts.numDecimalDouble}`, () => {
    expect(h.currencyify(h.amounts.numDecimalDouble).cents()).toBe(68);
  });
});
