//두 정수 사이의 합

function solution(a, b) {
  var answer = 0;
  let max = a;
  let min = b;
  if (a < b) {
    max = b;
    min = a;
  }
  for (min; min <= max; min++) {
    answer += min;
  }
  return answer;
}
//다른 사람의 좋은 풀이!!!
function adder(a, b, s = 0) {
  // Math함수 안에 min max를 이용하여 매개 변수 중 큰값 작은값을 구분한다.!
  for (var i = Math.min(a, b); i <= Math.max(a, b); i++) s += i;
  return s;
}
