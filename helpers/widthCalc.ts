export const widthCalc = (
  parentValue: number,
  childValue: number,
  border: boolean = false
) => {
  if (border) return parentValue - childValue * 2 - 4;
  return parentValue - childValue * 2;
};
