import { Currencyify } from "@src/currencify";

import { Amount, Currency, Locale } from "@types";

/**
 * Re-export type declarations
 *
 * @remarks
 * This module re-exports all type declarations from the "@types" module, allowing easy access to essential types.
 */
export * from "@types";

/**
 * Factory function for creating a Currencyify instance.
 *
 * @param amount - The initial amount that serves as the basis for all currency formatting.
 * @param currency - An optional ISO 4217 currency code (default is USD).
 * @param locale - An optional BCP 47 language tag (defaults to the user's locale).
 *
 * @remarks
 * This function serves as a convenient way to create a new Currencyify instance without the need for explicit
 * instantiation.
 */
export const currencyify = (amount: Amount, currency?: Currency, locale?: Locale) => {
  return new Currencyify(amount, currency, locale);
};
