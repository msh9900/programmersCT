//3진법 뒤집기
function solution(n) {
  let str = "";
  var answer = n.toString(3);
  for (let i = 0; i < answer.length; i++) {
    str += answer[answer.length - i - 1];
  }

  return Number.parseInt(str, 3);
}
console.log(solution(45));
// 다른사람의 좋은 코드

const solution = (n) => {
  return parseInt([...n.toString(3)].reverse().join(""), 3);
};
