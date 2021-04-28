void main() {
  int num1 = 10;
  const int num2 = 12;

  // Erro: um valor do tipo 'double' não pode ser atribuído a uma variável do tipo 'int'.
  int doubleValue = num1 / num2;

  int intValue = num1 * num2; // Bom
}