type Todo = {
  title: string;
  decription: string;
  complet: boolean;
}

/* Utilities */

/** Readonly: não permite editar o objeto */
const todo: Readonly<Todo> = {
  title: 'Vikings',
  decription: 'History series',
  complet: false
}
// todo.complet = false | Cannot assign to 'complet' because it is a read-only property.ts(2540)
console.log(todo);

/* Gerar um novo Todo sem sideeffects */

/* Partial: torna as propriedades de Todo opcionais, mas apenas para o paramêtro */
function updateTodo(todo: Todo, fields: Partial<Todo>) {
  const { complet, title } = { ...fields }
  return {
    ...todo,
    title,
    complet
  }
}
const newTodo = updateTodo(todo, { complet: true })
console.log(newTodo);

/** Pick: pega as propriedades de um tipo/objeto */
type TodoPick = Pick<Todo, 'title' | 'decription'>

const todoPick: TodoPick = {
  title: 'Star Trek',
  decription: 'scientific serie'
}

console.log(todoPick);


/** Omit: pega as propriedades de um tipo/objeto */
type TodoOmit = Omit<Todo, 'title' | 'decription'>

const todoOmit: TodoOmit = {
  complet: false
}

console.log(todoOmit);
