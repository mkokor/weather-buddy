import * as countries from "i18n-iso-countries";

countries.registerLocale(require("i18n-iso-countries/langs/en.json"));

export const getCountryName = (countryCode) => {
  return countries.getName(countryCode, "en");
};
