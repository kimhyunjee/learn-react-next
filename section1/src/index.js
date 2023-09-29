//1번 방법
// const moduleDate = require("./math");

//2번 방법: 구조분해할당
// const { add, sub } = require("./math");

// ems 방법 -> 확장자까지 써줘야함 주의
import { add, sub } from "./math.js";
import multiply from "./math.js"; //default 로 가져왔을 때
// 위 두개 합치기 import mul { add, sub } from "./math.js";
import randomColor from "randomcolor";

// console.log(moduleDate.add(1, 2)); //3
// console.log(moduleDate.sub(1, 2)); //-1

// 2번 방법
// console.log(add(1, 2)); //3
// console.log(sub(1, 2)); //-1
// console.log(multiply(10, 20)); //200

//rancomColor() 함수가 color 객체 반환
const color = randomColor();
console.log(color);
