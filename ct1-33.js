//sort()함수는 각 문자의 유니코드 포인트 값에 따라 정렬 따라서 10은 2보다 작은값을 취급한다!!!! 주의해서 사용!!!!!
//예산
function solution(d, budget) {
  d.sort((a, b) => a - b);
  let count = 0;

  for (let i = 0; i < d.length; i++) {
    if (d[i] > budget) break;

    budget -= d[i];
    count += 1;
  }
  return count;
}
//다른사람의 좋은 코드

function solution(d, budget) {
  d.sort((a, b) => a - b);

  while (d.reduce((a, b) => a + b, 0) > budget) d.pop();

  return d.length;
}
