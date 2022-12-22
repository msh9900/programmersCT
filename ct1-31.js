//이상한 문자 만들기
function solution(s) {
  var str = s.split(" ");
  var answer = [];
  for (let i = 0; i < str.length; i++) {
    answer.push(
      str[i]
        .split("")
        .map((cur, j) => (j % 2 ? cur.toLowerCase() : cur.toUpperCase()))
        .join("")
    );
  }
  return answer.join(" ");
}

console.log(solution("TrY HeLlO WoRlD"));
