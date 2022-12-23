//시저 암호
function solution(s, n) {
  let arr = s
    .split("")
    .map((val) => {
      return String.fromCharCode(val.charCodeAt(0) + n);
    })
    .join("");
  console.log(arr);
  var answer = "";
  return answer;
}
solution("AB", 1);
