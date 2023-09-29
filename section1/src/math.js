function add(a, b) {
  return a + b;
}

function sub(a, b) {
  return a - b;
}

// cjs(common js) 모듈에서 불러오는 방식
// module.exports = {
//   add,
//   sub,
// };

//esm(es module system) 방식 중 default 방식
export default function multiply(a, b) {
  return a * b;
}

// esm방식;
export { add, sub };
