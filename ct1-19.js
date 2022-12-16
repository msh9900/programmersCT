//없는 숫자 더하기

function solution(numbers) {
  let answer = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9];
  diff = answer.filter((item) => !numbers.includes(item));
  diff = diff.reduce(function (sum, item) {
    return sum + item;
  });
  return diff;
}
