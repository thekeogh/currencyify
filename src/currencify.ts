import { DEFAULT_CURRENCY, DEFAULT_LOCALE } from "@constants";
import { Amount, Currency, Locale } from "@types";

export class Currencyify {
  /**
   * The initial amount to be formatted.
   */
  private amount: Amount;

  /**
   * The ISO 4217 currency code used for formatting.
   */
  private currency: Currency;

  /**
   * The BCP 47 language tag (e.g. en-GB) representing the actively used locale.
   */
  private locale: Locale;

  /**
   * Creates an instance of the Currencyify class.
   *
   * @param amount - The initial amount that serves as the basis for all currency formatting.
   * @param currency - An optional ISO 4217 currency code (default is USD).
   * @param locale - An optional BCP 47 language tag (defaults to the user's locale).
   *
   * @remarks
   * In this constructor, we perform initial validation checks on the 'amount' to ensure data integrity and avoid
   * redundant checks elsewhere in the class.
   */
  public constructor(amount: Amount, currency?: Currency, locale?: Locale) {
    if (amount === null || amount === undefined || amount === "") {
      throw Error("An amount must be provided to create a Currencyify instance.");
    }
    if (typeof amount !== "string" && typeof amount !== "number") {
      throw new Error("Please provide the amount as a string or a number.");
    }
    this.amount = amount;
    this.currency = currency || DEFAULT_CURRENCY;
    this.locale = locale || (Intl.DateTimeFormat().resolvedOptions().locale as Locale) || DEFAULT_LOCALE;
  }

  /*
   * ------------------------------------------------------------------------------------------
   * Getters and Setters
   * ------------------------------------------------------------------------------------------
   * The below includes getter and setter methods for interacting with the properties of the
   * Currencyify class.
   * ------------------------------------------------------------------------------------------
   */

  /**
   * Retrieves the dollar and cents portion of the given amount.
   *
   * @example
   * For 20.50, it returns 20.50. For 40, it returns 40.00.
   */
  public value(): string {
    return this.float.toFixed(2).toString();
  }

  /**
   * Retrieves the dollar portion of the given amount.
   *
   * @example
   * For 20.50, it returns 20. For 40, it returns 40.
   */
  public dollars(): number {
    return parseInt(this.value().split(".")[0] || "0");
  }

  /**
   * Retrieves the cents portion of the given amount.
   *
   * @example
   * For 20.50, it returns 50. For 40, it returns 0.
   *
   * @remarks
   * If no cents are present in the total, it returns 0.
   */
  public cents(): number {
    return parseInt(this.value().split(".").at(-1) || "00");
  }

  /*
   * ------------------------------------------------------------------------------------------
   * Private methods
   * ------------------------------------------------------------------------------------------
   * The following section exclusively contains private methods, which are restricted to
   * internal use within the Currencyify class.
   * ------------------------------------------------------------------------------------------
   */

  /**
   * Parse the amount to a float.
   */
  private get float(): number {
    return typeof this.amount === "string" ? parseFloat(this.amount.replace(/[^a-zA-Z0-9.]+/g, "")) : this.amount;
  }
}
