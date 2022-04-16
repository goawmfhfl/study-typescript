// 함수에 타입을 정의하는 방식은 2가지가 있다.
// 첫 번째로 파라미터에 타입을 정의하는 방법

function functionType(a: string, b: number) {
  return { a, b };
}
functionType("안녕", 123);

// 함수에 타입 정의하기

function anyFunctionType(a: string, b: string) {
  let testLetVariable = "테스트 let" + a;
  const testConstvariable = 1 + b + 0;

  return { testLetVariable, testConstvariable };
}

// 함수에 반환 타입 정의하기
anyFunctionType("test let Type", "test const Type");
function anotherFunctionType(a: string, b: number): string {
  return a + b;
}

anotherFunctionType("123", 123);

// 불필요한 인자를 넣으면 에러가난다.
function functionTypeRule(a: number, b: number): number {
  return a + b;
}
// 많을 경우
functionTypeRule(10, 20, 30, 40);
// 적을 경우
functionTypeRule(10);

// 옵셔널 파라미터 (함수의 선택적 파라미터)
function optionalType(a: string, b: string, c: number) {
  return { a, b, c };
}
optionalType("string");
optionalType("string", "123");
optionalType("stirng", "string", 123);

// 음 반드시 입력을 안해도 괜찮긴 해 라는 느낌
function optionalTypeTest(a: string, b?: string, c?: number) {
  return { a, b, c };
}
optionalTypeTest("string");
optionalTypeTest("string", "string");
optionalTypeTest("string", "string", 123);
