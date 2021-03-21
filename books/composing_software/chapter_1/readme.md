## Function Composition

**Function compositionis the process of applying a function to the output of another function. In algebra, given two functions, *f* and *g***

```javascript
(f◦g)(x) = f(g(x))

const g = n => n + 1;
const f = n => n * 2;

const doStuff = (x) => f(g(x));

doStuff(20);

```

```javascript
const g = n => n+1;
const f = n => n*2;

const doStuff = (x) => {
  return new Promise((resolve, _reject) => resolve(x));
};

const res = async () => {
  return await doStuff(29)
  .then(g)
  .then(f);
}

res().then(console.log)
```

> “*f* composed with *g* equals *f* of *g* of *x*”

---

### Pipe

pipe() creates a pipeline of functions, passing the output of one function to the input of another. When you use pipe() (and its twin,compose()) You don’t need intermediary variables. Writing functions without mention of the arguments is called “point-free style”.

```javascript
const pipe = (...fns) => x => fns.reduce((y, f) => f(y), x);
```

```javascript
const g = (n) => n + 1;
const f = (n) => n * 2;

// if param pass is (f°g), then (g°f). Howerwise, ReduceRight to  (f°g)
const pipe = (...fns) => (x) => fns.reduceRight((y, f) => f(y), x);

const lambda = pipe(f, g);
const result = lambda(29);
```