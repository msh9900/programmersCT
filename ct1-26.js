//부족한 금액 계산하기
function solution(price, money, count) {
  let a = 0;
  for (let i = 1; i <= count; i++) {
    a += price * i;
  }
  if (a - money < 0) {
    answer = 0;
    return answer;
  }
  answer = a - money;
  return answer;
}

console.log(solution(3, 20, 4));

//다른 사람 좋은 코드

function solution(price, money, count) {
  const tmp = (price * count * (count + 1)) / 2 - money;
  return tmp > 0 ? tmp : 0;
}
