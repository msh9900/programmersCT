//서울에서 김서방 찾기

function solution(seoul) {
  for (let i = 0; i < seoul.length; i++) {
    if (seoul[i] === "Kim") {
      return `김서방은 ${i}에 있다`;
    }
  }
}

//다른 사람의 좋은 코드
function findKim(seoul) {
  //indexOf함수를 이용하여 "Kim"이 들어있는 요소 인덱스를 파악
  let idx = seoul.indexOf("Kim");
  return "김서방은 " + idx + "에 있다";
}
