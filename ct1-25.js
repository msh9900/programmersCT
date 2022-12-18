function solution(s) {
  // every()메소드는 배열 안의 모든 요소가 주어진 판별함수를 통과하는지에 따라 boolean값을 도출한다
  let answer;
  s.length === 4 || s.length === 6
    ? (answer = s.split("").every((c) => !isNaN(c)))
    : (answer = false);
  return answer;
}
