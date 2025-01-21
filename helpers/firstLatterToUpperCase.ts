export const firstLatterToUpperCase = (string: string | null | undefined) => {
  if (!string) return null;
  return string.slice(0, 1).toUpperCase() + string.slice(1).toLowerCase();
};
