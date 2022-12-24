//[1차] 비밀지도
function solution(n, arr1, arr2) {
  var answer = [];
  let str = "";
  for (let i = 0; i < n; i++) {
    one = arr1[i].toString(2).padStart(n, "0");
    two = arr2[i].toString(2).padStart(n, "0");
    for (let j = 0; j < n; j++) {
      if (one[j] === "0" && two[j] === "0") {
        str += " ";
      } else {
        str += "#";
      }
    }
    answer.push(str);
    str = "";
  }
  console.log(answer);
  return answer;
}
//다른사람의 좋은 풀이

//정규식을 이용해 집어넣으면 엄청나게 편하네....
var solution = (n, a, b) =>
  a.map((a, i) =>
    (a | b[i]).toString(2).padStart(n, 0).replace(/0/g, " ").replace(/1/g, "#")
  );
