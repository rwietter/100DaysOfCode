```html
<div class="flow">
  <div>Item 1</div>
  <div>Item 2</div>
  <div style="--flow-space: 5rem">Item 3</div>
  <div>Item 4</div>
</div>
```

```css
.flow > * + * {
  margin-top: var(--flow-space, 1em);
}
```

[Flow-css-utility](https://piccalil.li/quick-tip/flow-css-utility/)
