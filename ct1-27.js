//행렬의 덧셈
function solution(arr1, arr2) {
  let answer = [];

  for (let i = 0; i < arr1.length; i++) {
    let row = [];
    for (let j = 0; j < arr1[0].length; j++) {
      row.push(arr1[i][j] + arr2[i][j]);
    }
    answer.push(row);
  }

  return answer;
}

function solution(A, B) {
  return A.map((a, i) => a.map((b, j) => b + B[i][j]));
}
