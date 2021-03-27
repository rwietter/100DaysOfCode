const data = [1, 2, 3, 4];

const multiply = (arr) => arr.map((el) => el * 2);
const sum = (arr) => arr.map((el) => el + 1);

const Functor = {
  covariant: (f) => (g) => (x) => f(g(x)),
  contravariant: (f) => (g) => (x) => g(f(x)),
  promap: (f) => (g) => (h) => Functor.contravariant(f)(g)(Functor.covariant(g)(f)(h)),
};

const promap = Functor.promap(multiply)(sum)(data);
console.log(promap);
