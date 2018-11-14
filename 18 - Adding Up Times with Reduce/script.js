const timeNodes = document.querySelectorAll('[data-time]');
const timeArr = [];
timeNodes.forEach(node => {
  timeArr.push(node.dataset.time.split(':'));
});

const totalTimeArr = timeArr.reduce((acc, cur) => {
  if (parseFloat(acc[1]) + parseFloat(cur[1]) >= 60) {
    return acc = [
      parseFloat(acc[0]) + parseFloat(cur[0]) + 1,
      parseFloat(acc[1]) + parseFloat(cur[1]) - 60
    ];
  } else {
    return acc = [
      parseFloat(acc[0]) + parseFloat(cur[0]),
      parseFloat(acc[1]) + parseFloat(cur[1])
    ];
  }
});

function totalTimeInStr(timeArr) {
  const h = Math.floor(timeArr[0] / 60);
  const m = timeArr[0] % 60;

  return `${h}:${m}:${timeArr[1]}`;
}
console.log(totalTimeInStr(totalTimeArr));

