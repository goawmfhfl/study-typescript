function 펑션(값: any) {
  console.log(값);
}

펑션("문자열");
펑션(100);

// any라고 했을 때 문제없이 잘 돌아간다
// any는 가급적 사용하지 말자

function 유니온(값: string | number) {
  if (typeof 값 === "string") {
    // string과 관련된 메서드를 사용할 수 있다
    값.concat();
  }
  if (typeof 값 === "number") {
    // number와 관련된 메서드를 사용할 수 있다
    값.toString();
  }

  throw new TypeError("타입은 문자열과 숫자만 가능합니다.");
}

유니온("문자엹");
유니온(123);
// 유니온(true);

// 두개의 값을 커버할 수 있게 사용하는 것이 바로 유니온이다.
// 유니온을 사용하면 타입가드를 사용할 수 있다
// 타입의 범위를 좁혀서 사용할 수 있는것을 의미한다.

interface Develop {
  name: string;
  skill: string;
}

interface Person {
  name: string;
  age: number;
}

// 2개의 인터페이스를 정의하고 이 인터페이스들을 유니온 타입으로 지정했다
// 이때 인터섹션과 유니온 타입은 차이를 가지고있다.
function foo(someone: Develop | Person) {
  // 유니온 타입을 사용할 경우
  // 두 인터페이스의 공통적인 속성만을 참조하여 사용할 수 있다
  someone.name;
  // someone.age 에러
  // someone.skill 에러
}

// 대신 유니온 타입을 사용할 경우 Develop과 Person의 둘 중 하나의 인터페이스를 따를 경우
// 문제가 일어나지 않는다
foo({ name: "jaeyoung", skill: "javascript" });
foo({ name: "jaeyoung", age: 123 });

function bar(someone: Develop & Person) {
  // 인터섹션 타입을 사용할 경우
  // 내부에서는 모든 타입의 값을 참조해서 사용할 수 있다
  someone.skill;
  someone.age;
  someone.name;
}

// 대신 인터섹션 타입을 사용할 경우 Develop, Person에 정의된 인터페이스 속성을 맞추어야한다
bar({ name: "jaeyoung", skill: "javascript,react", age: 123 });

// 이넘은 특정값들의 집합이다
// 이넘은 문자형 이넘과 숫자형 이넘이 존재한다.

enum 넘버 {
  First,
  Second,
  Third,
}

const 테스트1 = 넘버.First; // 0
const 테스트2 = 넘버.Second; // 1
const 테스트3 = 넘버.Third; // 2

// 신기한 것은 입력을 하면 인덱싱이 되어 고유의 숫자값이 할당이 된다는 것이다

enum 초기화넘버 {
  First = 10,
  Second = 20,
  Third = 30,
  Forth,
}

const 초기1 = 초기화넘버.First; // 10
const 초기2 = 초기화넘버.Second; // 20
const 초기3 = 초기화넘버.Third; // 30
const 초기4 = 초기화넘버.Forth; // 31

enum 문자 {
  안녕 = "안녕",
  잘자 = "잘자",
  배고파 = "배고파",
}

function 인사(값: 문자) {
  if (값 === "안녕") {
    console.log("안녕");
  }
}

인사(문자.안녕);
인사("안녕");
인사(문자.잘자);
인사("잘자");
인사(문자.배고파);
인사("배고파");

// 함수의 매개변수 값에 enum을 할당하면 전달받는 값을 한정지을 수 있다.
// 매개변수에 특정 값만 들어올 수 있게 지정을 할 수 있다.
