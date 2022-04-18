// 변수에 인터페이스를 할당하는 방법

interface User {
  age: number;
  name: string;
}

const jaeyoung: User = {
  age: 30,
  name: "jaeyoung",
};

// 함수에 인터페이스를 할당하는 방법

const bongmin: User = {
  age: 30,
  name: "123",
};

function getUser(user: User) {
  console.log(user);
}
getUser(bongmin);

// 함수의 스펙(구조)에 인터페이스를 활용
interface SumFunction {
  (a: number, b: number): number;
}

const sum: SumFunction = function (a, b) {
  return a + b;
};

// sum("1", 2);

// 인덱성
interface StringArray {
  [index: number]: string;
}

let arr: StringArray = ["a", "b", "c"];
arr[0];

interface StringRegexDictionary {
  [key: string]: RegExp;
}

let obj: StringRegexDictionary = {
  cssFile: /\.css$/,
  jsFile: /\.js$/,
};

// [key: string] : sth
// sth: /abc/ : RegExp

// obj.cssFile = /\icss/;
// obj.jsFile = "abc";

// Object.keys(obj).forEach((value) => {});

// 인터페이스 확장
interface Person {
  name: string;
  age: number;
}

interface Developer extends Person {
  language: string;
}

const jaeyoungConst: Developer = {
  language: "javaScript",
  name: "jaeyoung",
  age: 30,
};
