//수박수박수박수박수?
function solution(n) {
  let answer = "수박";
  if (n % 2 === 0) {
    answer = answer.repeat(n / 2);
  } else {
    answer = answer.repeat(n / 2) + "수";
  }
  return answer;
}
