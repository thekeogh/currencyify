import { faker } from "@faker-js/faker";

import { Amount, Currency, Locale } from "@types";

import { Currencyify } from "@currencyify";

/**
 * Directly exported items
 */
export { faker, Currencyify };

/**
 * Generate a random ISO 4217 currency code.
 *
 * @remarks
 * While we typically use specific currency codes in our tests, there are scenarios where we may opt for a random
 * currency code.
 */
export const currency = () => faker.finance.currencyCode() as Currency;

/**
 * Define some some amounts for test cases.
 *
 * @remarks
 * Currencyify accommodates a wide range of input formats for amounts. We've included a variety of examples below to
 * ensure comprehensive coverage of test scenarios.
 */
export const amounts = {
  strSymbolZeros: "$3394.00",
  strSymbolSingle: "£12.3",
  strSymbolDouble: "€5930.91",
  strInteger: "215",
  strIntegerRound: "100",
  strDecimalZero: "46029.0",
  strDecimalZeros: "535.00",
  strDecimalSingle: "90.5",
  strDecimalDouble: "3287.41",
  numInteger: 42329,
  numIntegerRound: 40000,
  numDecimalZero: 296.0,
  // prettier-ignore
  numDecimalZeros: 8679.00,
  numDecimalSingle: 38.2,
  numDecimalDouble: 2680.68,
};

/**
 * Generate a random GCP 47 language tag.
 *
 * @remarks
 * While we typically use specific language tags in our tests, there are scenarios where we may opt for a random
 * language tag.
 */
export const locale = () => faker.helpers.arrayElement<Locale>(["en-GB", "de-DE", "th-TH", "es-MX", "de-AT", "zh-CN", "fr-FR", "en-AU"]);

/**
 * Create an instance of Currencyify for use in tests.
 *
 * @param amount - An optional amount. (default to simple integer).
 * @param currency - An optional ISO 4217 currency code (default is DEFAULT_CURRENCY).
 * @param locale - An optional BCP 47 language tag (default is DEFAULT_LOCALE).
 */
export const currencyify = (amount: Amount = amounts.numInteger, currency?: Currency, locale?: Locale) => {
  return new Currencyify(amount, currency, locale);
};
