import 'dart:core';


Object? fn(List numbers) {
  var sum = numbers.fold(10, (acc, next) {
    if(acc != null) {
      acc = next + acc;
    }
    return acc;
  });
  return sum;
}

void main() {
  List<int> numbers = [1,2,3,4,5];
  var result = fn(numbers);
  print(result);
}