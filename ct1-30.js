//같은 숫자는 싫어

function solution(arr) {
  var answer = [];
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] !== arr[i + 1]) answer.push(arr[i]);
  }
  return answer;
}
// 다른사람의 좋은 코드
function solution(arr) {
  return arr.filter((val, index) => val != arr[index + 1]);
}
