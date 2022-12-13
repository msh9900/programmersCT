function solution(n) {
  return String(n)
    .split("")
    .reverse()
    .map((data) => Number(data));
}
console.log(solution(12345));
