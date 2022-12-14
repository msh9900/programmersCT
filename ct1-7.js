//  문자열 내 p와 y 개수
function solution(s) {
  var answer = true;
  let y = 0;
  let p = 0;
  s.toLowerCase()
    .split("")
    .map((value) => {
      if (value === "p") {
        p++;
      }
      if (value === "y") {
        y++;
      }
    });
  if (y === p) {
    answer = true;
  } else {
    answer = false;
  }

  return answer;
}
// 다른 사람 좋은 풀이

function numPY(s) {
  //함수를 완성하세요
  return (
    s.toUpperCase().split("P").length === s.toUpperCase().split("Y").length
  );
}
