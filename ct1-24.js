//약수의 개수와 덧셈
function solution(left, right) {
  let answer = 0;
  let result = 0;
  for (left; left <= right; left++) {
    for (let i = 1; i <= left; i++) {
      if (left % i === 0) {
        answer += 1;
      }
    }
    if (answer % 2 === 0) {
      result += left;
      answer = 0;
    } else {
      result -= left;
      answer = 0;
    }
  }
  return result;
}
//다른사람의 좋은 풀이
