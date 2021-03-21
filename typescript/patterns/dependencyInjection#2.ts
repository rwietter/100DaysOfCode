interface User {
  id: string;
  name: string;
}

interface IDatabase {
  fetch(): string;
  findByUser(id: string): User;
}

class MySQL implements IDatabase {
  findByUser(id: string): User {
    return { id, name: 'abc' }
  }
  
  fetch(): string {
    return 'MySQL'
  }
}

class Postgres implements IDatabase {
  findByUser(id: string): User {
    return { id, name: "abc" };
  }

  fetch(): string {
    return "Postgres";
  }
}

class App {
  private database: IDatabase;

  constructor(database: IDatabase) {
    this.database = database;
  }

  public fetch() {
    return this.database.fetch()
  }

  public findUser() {
    return this.database.findByUser('123');
  }
}

const app = new App(new Postgres())
app.fetch()
