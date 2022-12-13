//정수 제곱근 판별
function solution(n) {
  let sqrt = Math.sqrt(n);
  let answer;
  if (sqrt % 1 !== 0) {
    answer = -1;
  } else {
    answer = Math.pow(sqrt + 1, 2);
  }

  return answer;
}
