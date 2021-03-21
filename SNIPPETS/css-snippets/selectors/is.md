> remove as margens de todos os cabeçalhos com uma classe .tight

```css
element:is(h1,h2).tight {
  margin: 0;
}
```

> remove as margens de todos os cabeçalhos h1 e h2 dentro do element
> 
```css
element:is(h1,h2) {
  margin: 0;
}
```
