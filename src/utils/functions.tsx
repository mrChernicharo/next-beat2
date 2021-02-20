export const toCamelCase = word => {};

export const toNormalCase = (camelCaseWord: string) => {
  const result = camelCaseWord.replace(/([A-Z])/g, ' $1');
  const final = result
    .split(' ')
    .map(w => w.toLowerCase())
    .join(' ');
  console.log(final);
  return final;
};

export const toNormalTitleCase = (camelCaseWord: string) => {
  const result = camelCaseWord.replace(/([A-Z])/g, ' $1');
  const final = result
    .split(' ')
    .map((w, i) => {
      return i === 0 ? w[0].toUpperCase() + w.slice(1) : w.toLowerCase();
    })
    .join(' ');
  console.log(final);
  return final;
};
