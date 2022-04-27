function consoleLogText(text) {
  text.split("");
  return text;
}
consoleLogText("string");
// 만약 블록문 안에서 text에다가 어떤 로직을 더했다고해보자
// 하지만 전달한 인수가 만약 number일 경우에는 로직을 분리해주어야 한다.

function consoleLogNumber(text) {
  return text;
}
consoleLogText(123);

// 위와같이 타입이 다르다는 이유로 기능상 큰 차이가 없는 것 같은 함수를 2개 만들어 사용하는것은 비효율적이다.
// 코드의 재사용성을 높이기 위해서 유니온 타입을 사용하여 아래와같이 해결할 수 있다.

function consoleLogTypeString(text: string | number) {
  if (typeof text === "string") {
    text.split("");
  }
  if (typeof text === "number") {
    text.toString();
  }
  return text;
}
// const stringType = consoleLogTypeString("string");
// stringType.split("");
// const numberType = consoleLogTypeString(123);
// stringType.toLocaleString();

// 잘 동작할 거라는 예측과 다르게 반환된 string타입에다가 함수를 적용시키려고 했지만 에러가 발생한다
// 'string | number' 형식에 'split' 속성이 없습니다.
//  'number' 형식에 'split' 속성이 없습니다.ts(2339)

// 이런 문제를 해결하기 위해서 제네릭 타입을 사용한다

function genericType<T>(text: T): T {
  return text;
}
const stringGeneric = genericType<string>("string");
stringGeneric.split("");
const numberGeneric = genericType<number>(123);
numberGeneric.toString();

// 제네릭을 사용할 경우 함수 호출 시점에 타입을 지정할 수 있다
// 함수 호출시에 지정한 타입은 매개변수의 타입이 되고 반환값이 타입이 된다.
// 함수 호출시에 타입을 지정함으로써 genericType 함수는 타입을 유동적으로 변경할 수 있다.

// 타입을 변경해주자.
// 인터페이스도 적용이 가능하다.

interface Products<T> {
  value: T;
  selected: boolean;
}

// string과 boolean을 product의 매개변수로 할당한다
// Products<T:string, B:boolean>과 같은 느낌이다.
// 이렇게 전달받은 값은
// value:string, selected:boolean 의 값으로 할당이 된다.

const emails: Products<string>[] = [
  { value: "naver.com", selected: true },
  { value: "gmail.com", selected: false },
  { value: "hanmail.net", selected: false },
];

// 여기까지 이해가 정말 잘 되었다.

const numberOfProducts: Products<number>[] = [
  { value: 1, selected: true },
  { value: 2, selected: false },
  { value: 3, selected: false },
];

function createDropdownItem<T>(item: Products<T>) {
  const option = document.createElement("option");
  option.value = item.value.toString();
  option.innerText = item.value.toString();
  option.selected = item.selected;
  return option;
}

// NOTE: 이메일 드롭 다운 아이템 추가

// 제네릭을 사용해서 item의 타입을 정의해 주자
emails.forEach((email) => {
  const item = createDropdownItem<string>(email);
  const selectTag = document.querySelector("#email-dropdown");
  selectTag.appendChild(item);
});

numberOfProducts.forEach((email) => {
  const item = createDropdownItem<number>(email);
  const selectTag = document.querySelector("#email-dropdown");
  selectTag.appendChild(item);
});
