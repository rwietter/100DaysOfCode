> controla se o scroll de um elemento será encadeado ou não, ou seja, se vc estiver dentro de um elemento com scroll e rolar até o final dele, então, por padrão, o próximo elemento pai com scroll começa a rolar

> Para desabilitar o scroll do pai, basta incluir `overscroll-behavior: contain` no body ou no elemento.

```css
body {
  overscroll-behavior: contain
}
```
