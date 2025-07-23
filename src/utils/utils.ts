export const generateNumberArray = (count: number): number[] => {
  return Array.from({ length: count }, (_, i) => i + 1);
};
