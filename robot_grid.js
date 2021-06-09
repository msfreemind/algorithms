const robotOnGrid = (grid, path=[[0,0]]) => {
  if (grid[0][0]) return [0, 0];

  const lastX = path[path.length - 1][0];
  const lastY = path[path.length - 1][1];
  const right = grid[lastX + 1] ? grid[lastX + 1][lastY] : undefined;
  const down = grid[lastX][lastY + 1];

  if (right === undefined && down === undefined) return;

  if (right) return path.concat([[lastX + 1, lastY]]);
  if (down) return path.concat([[lastX, lastY + 1]]);

  if (right === undefined) return robotOnGrid(grid, path.concat([[lastX, lastY + 1]])); 
  if (down === undefined) return robotOnGrid(grid, path.concat([[lastX + 1, lastY]]));

  console.log(robotOnGrid(grid, path.concat([[lastX + 1, lastY]])), robotOnGrid(grid, path.concat([[lastX, lastY + 1]])));
};