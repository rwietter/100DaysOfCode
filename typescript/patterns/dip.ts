
/* ----------- high-level ----------- */
interface IParser {
  getParsedNumber(value: number): string;
}

/* ----------- low-level ----------- */
class ParseSomething implements IParser {
  value = 0;

  getParsedNumber(value: number): string {
    return value.toString();
  }

  getParsedString(value: string): number {
    return parseInt(value);
  }

  getParsedFloat(value: string): number {
    return parseFloat(value);
  }
}

/* ----------- high-level ----------- */
class User {
  name: string = "";
  id: string = "";

  parser: IParser;

  constructor(parser: IParser) {
    this.parser = parser;
  }

  saveUser(id: number, name: string) {
    this.id = this.parser.getParsedNumber(id);
    this.name = name;
  }
}

const parser = new ParseSomething();
const user = new User(parser);
user.saveUser(1234, 'álcool gel');
