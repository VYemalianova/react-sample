export const generateNumberArray = (count: number): number[] => {
  return Array.from({ length: count }, (_, i) => i + 1);
};

export const buildQueryString = (params: Record<string, string>): string => {
  return new URLSearchParams(params).toString();
};
