const state = {
  tasks: [
    {
      id: 1,
      description: "Finish the course",
      done: false
    },
    {
      id: 2,
      description: "Walk the dog",
      done: true
    },
    {
      id: 3,
      description: "Exercise",
      done: false
    },
    {
      id: 4,
      description: "Read a book",
      done: true
    },
    {
      id: 5,
      description: "Write an article",
      done: false
    }
  ],
  nextId: 6,
  tasksFiltered: [],
  activeTab: "all"
};

export default {
  state
};
