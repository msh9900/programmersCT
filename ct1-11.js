//정수 내림차순으로 배치하기

function solution(n) {
  let answer = Number(String(n).split("").sort().reverse().join(""));

  return answer;
}
