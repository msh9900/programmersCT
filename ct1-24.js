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
function solution(left, right) {
  // 제곱근이 정수라면 약수는 홀수
  var answer = 0;
  //Number.isInteger() 주어진 값이 정수인지 판별하는 함수.
  //Math.sqrt() 제곱근 만듬.
  for (let i = left; i <= right; i++) {
    if (Number.isInteger(Math.sqrt(i))) {
      answer -= i;
    } else {
      answer += i;
    }
  }
  return answer;
}
