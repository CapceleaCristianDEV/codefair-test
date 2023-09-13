export const numberToArray = (count: number) => {
  return Array.from({ length: count }, (_, number) => {
    return number + 1;
  });
};
