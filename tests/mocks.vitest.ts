import { beforeEach, vi } from "vitest";

import * as h from "@test.helpers";

/**
 * Mock the locale obtained from Intl.DateTimeFormat().resolvedOptions().
 *
 * @remarks
 * This mock specifically targets the locale value, ensuring it returns the desired value. It is applied globally
 * before each test within the entire test suite, guaranteeing that the default (DEFAULT_LOCALE) is never returned
 * for robust testing.
 *
 * @see {@link ../src/Currencyify.ts DEFAULT_LOCALE}
 */
beforeEach(() => {
  const IntlMock = {
    DateTimeFormat: vi.fn(() => ({
      resolvedOptions: vi.fn(() => ({
        locale: h.locale(),
      })),
    })),
  };
  vi.stubGlobal("Intl", IntlMock);
});
