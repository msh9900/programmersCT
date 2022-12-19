//부족한 금액 계산하기
function solution(price, money, count) {
  let a = 0;
  for (let i = 0; i < count; i++) {
    a += price * i;
  }
  console.log(a);
  if (a - money < 0) {
    answer = 0;
    return answer;
  }
  answer = a - money;
  return answer;
}

console.log(solution(3, 20, 4));
