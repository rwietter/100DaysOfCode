void main() {
  void checkNull() {
    var myNull = null;
    final name = ['value', 'cars'];
    print(name);
    name.remove('value');
    print(name);
    if (myNull == null) {
      print(myNull);
    }
  }
  checkNull();

  void checkZero(){
    var zero = 0;
    if (zero == 0) {
      print(zero);
    }
  }
  checkZero();
}