console.log("Hello");

async function test() {
  const promise = Promise.resolve(213);
  console.log(await promise);
}

test();

// async 키워드로 test란 이름의 비동기 함수만듬
// 내부에서 await 키워드로 무언가 기다리는 내용을 완성함
