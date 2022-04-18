function testFunctionType(id: number, date: object, objectValue: object) {
  const idTest = id + 1;
  const curDate = date;
  const objectValueTest = objectValue;

  return {
    id: idTest,
    Date: curDate,
    object: objectValueTest,
  };
}
testFunctionType(123, new Date(), {});

function testAnotherTest(id: number, name: string, info: object): object {
  return { id, name, info };
}

testAnotherTest(1, "1", { id: "jaeyoung" });
