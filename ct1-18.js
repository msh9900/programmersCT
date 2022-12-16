// 음양 더하기

function solution(absolutes, signs) {
  let answer = 0;
  absolutes.map((val, idx) => {
    signs[idx] === true ? (answer += val) : (answer -= val);
  });
  return answer;
}
