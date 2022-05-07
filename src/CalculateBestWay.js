export const CalculateBestWay = (startPoint, finishPoint) => {
  let way = [];
  way.pop();
  way.pop();
  way.pop();
  way.pop();
  way.push(Math.floor(Math.random() * 4));
  way.push(Math.floor(Math.random() * 4));
  way.push(Math.floor(Math.random() * 20) + 4);
  way.push(Math.floor(Math.random() * 60));
  if (way[0] == way[1]) {
    if (way[0] != 0) {
      way[0] -= 1;
    } else {
      way[0] += 1;
    }
  }

  return way;
};
