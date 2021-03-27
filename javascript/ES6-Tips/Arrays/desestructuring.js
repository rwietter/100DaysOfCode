// ! Ignorando valores
function f() {
  return [1, 2, 3];
}

const [a, , b] = f();
console.log(a); // 1
console.log(b); // 3

const ignore = ([, , ] = f());
console.log(ignore);

// ? Atribuir o resto do valor pra uma variável com ..rest
const [c, ...rc] = [1, 2, 3];
console.log(c); // 1
console.log(rc); // [2, 3]
