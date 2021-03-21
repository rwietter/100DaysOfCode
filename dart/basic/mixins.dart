class Person {
  late String firstName;
  late String lastName;
}

class Performer {}

mixin Musical {
  bool canPlayPiano = false;
  bool canCompose = false;
  bool canConduct = false;

  void entertainMe() {
    if (canPlayPiano) {
      print('Playing piano');
    } else if (canConduct) {
      print('Waving hands');
    } else {
      print('Humming to self');
    }
  }
}

class Musician extends Performer with Musical {}

class Maestro extends Person with Musical {
  late bool canConduct;

  Maestro(String firstName) {
    canConduct = true;
    this.firstName = firstName;
  }

  String getFirstName() {
    return this.firstName;
  }
}

void main() {
  Maestro maestro = Maestro('Carlos');
  print(maestro.getFirstName());
}