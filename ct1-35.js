function solution(sizes) {
  const width = [];
  const height = [];

  for (let i = 0; i < sizes.length; i++) {
    const max = Math.max(sizes[i][0], sizes[i][1]);
    const min = Math.min(sizes[i][0], sizes[i][1]);
    width.push(max);
    height.push(min);
  }

  return Math.max(...width) * Math.max(...height);
}
//다른사람의 좋은 풀이
1;
2;
3;
4;
5;
function solution(sizes) {
  const [hor, ver] = sizes.reduce(
    ([h, v], [a, b]) => [
      Math.max(h, Math.max(a, b)),
      Math.max(v, Math.min(a, b)),
    ],
    [0, 0]
  );
  return hor * ver;
}
