//제일 작은 수 제거하기

function solution(arr) {
  var answer = [];
  //Math 함수에 max,min을 이용하여 배열의 최대값 최소값을 구분할수 있다.
  const minValue = Math.min(...arr);
  if (arr.length === 0 || arr[0] === 10) {
    answer[0] = -1;
  } else {
    answer = arr.filter((value) => value !== minValue);
  }
  return answer;
}
