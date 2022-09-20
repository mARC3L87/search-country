export const getLanguage = <T>(object: any): T => {
  let value;
  for (const key in object) {
    value = object[key];
  }
  return value;
};

export const getNativeName = (object: any) => {
  let value;
  for (let key in object) {
    const getNestedName = Object.entries(object).map((commonName: any) => {
      for (let nested in commonName[1]) {
      }
      return commonName[1].common;
    });
    value = getNestedName;
  }
  return value?.[0];
};
export const getCurrency = (object: any) => {
  let value;
  for (let key in object) {
    const getNestedCurrency = Object.entries(object).map((currency: any) => {
      for (let nested in currency[1]) {
      }
      return currency[1].name;
    });
    value = getNestedCurrency;
  }
  return value?.[0];
};
