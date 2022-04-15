// 자바스크립트에는 어떠한 것들이 있었는가?
// string, number, boolean, null, unedfined,Object,Array 등등이 있다.
// 나는 기존에 타입들을 정의를 어떻게 했었는가?

// Number
let letNumber = 1;
let constNumber = 2;

// 별 다른 설정 없이 바로바로 타입을 입력했다.
// 하지만 타입스크립트는 다르다

// Number
let typeLetNumber: Number = 1;
const tpyeConstNumber: Number = 2;

// String
let TypeLetString: String = "LetString";
const TypeConstString: String = "ConstString";

// Boolean
let TypeLetBoolean: Boolean = true;
const TypeConstBoolean: Boolean = false;

// Array 1
let TypeLetArray: Array<Number> = [1, 2, 3, 4, 5];
let TypeLetArray2: Array<String> = ["1,2,3,4,5"];

// Array 2
let LetArrayType: Number[] = [1, 2, 3, 4, 5];
const ConstArrayType: String[] = ["1,2,3,4,5"];
// 튜플튜플
const AnotherCaseType: [Object, String, Boolean] = [{}, "String", true];

// Object1
let LetObjectType: Object = {};
const ConstObjectType: Object = {
  Language: "TypeScript",
  Level: 123,
};

// Object2
let AnotherObjectType: { Laguage: String; Level: Number } = {
  Laguage: "TypeScript",
  Level: 123,
};
