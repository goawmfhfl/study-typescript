interface Fruits {
  name: string;
  price: number;
}

// 변수에 인터페이스 활용하기

var 과일: Fruits = {
  name: "apple",
  price: 1300,
};

// 함수에 인터페이스 활용하기

function getFruits(fruits: Fruits) {
  console.log(fruits);
}

const apple = {
  name: "사과",
  price: 1250,
};

getFruits(apple);

// 함수의 전체적인 모습까지 인터페이스로 정의를 내릴 수 있다는게 포인트이다.
// 라이브러리, 협업을 할 떄 사용한다.

interface SumFunction {
  (a: number, b: number): number;
}

let sum: SumFunction = function (a: number, b: number): number {
  return a + b;
};

// 인덱싱

interface StringArray {
  [index: number]: string;
}

var array: StringArray = ["1", "2", "3"];
// array[0] = "array";

// 딕셔너리 패턴
interface StringRegexDictionary {
  [key: string]: RegExp;
  //   속성에는 문자열 값에는 정규식이 나와야함
}

var obj: StringRegexDictionary = {
  //   sth: /abc/,
  cssFile: /.css$/,
  jsFile: /\.js$/,
};

Object.keys(obj).forEach((value) => {});
