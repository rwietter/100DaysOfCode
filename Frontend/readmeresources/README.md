# Front-end resources

### Features

**DarkMode**: _com o hook dark mode é possível alternar entre os estados dark(escuro) e light(branco), também, salva o theme(tema) atual selecionado no localStorage do navegador, assim, ao atualizar a página ou sair e retornar mais tarde o tema será carregado de acordo com a escolha anterior. Além disso, o hook verifica o esquema de cores do sistema para aplicar o modo dark ou light de acordo com o esquema de cores definido no sistema operacional._

A propriedade mathMedia permite verificar o user agent do dispositivo, onde consta o tema do dispositivo escolhido pelo usuário.

A consulta de media de colors retorna uma das opções:

- **no-preference**: _o usuário não optou por nenhum tema (false)._
- **light**: _o usuário optou por utilizar o tema claro com texto escuro._
- **dark**: _o usuário optou por utilizar o tema escuro com texto claro._

```javascript
window.matchMedia && window.matchMedia("(prefers-color-scheme: dark)").matches
```

[DarkMode](https://css-tricks.com/a-dark-mode-toggle-with-react-and-themeprovider/)

---
