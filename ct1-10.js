//하샤드 수
function solution(x) {
  let answer;
  let a = String(x)
    .split("")
    .reduce((acc, cur) => {
      return Number(acc) + Number(cur);
    });
  Number(x) % a === 0 ? (answer = true) : (answer = false);

  return answer;
}
