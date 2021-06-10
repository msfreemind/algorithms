const paintFill = (screen, point, newColor) => {
  if (screen[point[0]][point[1]] === newColor) return;
  return paintFiller(screen, point, newColor, screen[point[0]][point[1]]);
};

const paintFiller = (screen, point, newColor, origColor) => {
  if (point[0] < 0 || point[0] >= screen.length || point[1] < 0 || point[1] >= screen[0].length) return;

  const [row, col] = point;

  if (screen[row][col] === origColor) {
    screen[row][col] = newColor;
    paintFiller(screen, [row - 1, col], newColor, origColor);
    paintFiller(screen, [row + 1, col], newColor, origColor);
    paintFiller(screen, [row, col - 1], newColor, origColor);
    paintFiller(screen, [row, col + 1], newColor, origColor);
  }  

  return screen;
};