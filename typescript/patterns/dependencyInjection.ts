/* Criar uma instância de classe dentro de outra é uma dependência, isso gera forte acoplamento e baixa coesão,
isso pode ser evitado desacoplano um objeto da sua criação */

/* Esse princípio apenas desacopla o uso da classe inferior, mas não a sua instanciação, ainda é necessário
  instância a interface em algum lugar, porém isso evita que você troque a interface por uma diferente.*/

// Código fortemente acoplado
class ClientDependency {
  EnviaEmail(email: string, title: string, message: string) {
    const xpto = new XPTOEmailService();
    xpto.SendEmail(email, title, message);
  }
}

// Dependency injection: ainda há um grau de dependência
class ClientAbstractDependency {

  _xpto: XPTOEmailService | undefined;

  Client(xpto: XPTOEmailService) {
    this._xpto = xpto
  }

  EnviaEmail(email: string, title: string, message: string) {
    this._xpto.SendEmail(email, title, message);
  }
}

// Dependency injection: a interface força todos os métodos a usarem o mesmo serviço
interface IEmailService {
  SendServiceEmail: (email: string, title: string, message: string) => {}
}

class MyXPTOEmailService {
  SendEmail(email: string, title: string, message: string) {
    const xpto: IEmailService = new XPTOEmailService();
    xpto.SendServiceEmail(email, title, message)
  }
}

class ClientDependecyInjection {
  _emailService: IEmailService | undefined;

  ClientDependecyInjection(emailService: IEmailService) {
    this._emailService = emailService;
  }

  SendEmail(email: string, title: string, message: string) {
    this._emailService?.SendServiceEmail(email, title, message);
  }
}

const client = new ClientDependecyInjection();
client.SendEmail(
  'This is a email',
  'Email',
  'Email'
)
