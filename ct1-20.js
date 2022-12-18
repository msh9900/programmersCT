//가운데 글자 가져오기
function solution(s) {
  var answer = "";
  if (s.length % 2 === 0) {
    answer = s[parseInt(s.length / 2 - 1)] + s[parseInt(s.length / 2)];
  } else {
    answer = s[parseInt(s.length / 2)];
  }
  return answer;
}

//다른 사람의 풀이

2;
3;
4;
function solution(s) {
  return s.substr(Math.ceil(s.length / 2) - 1, s.length % 2 === 0 ? 2 : 1);
}
