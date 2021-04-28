/*
    Escreva uma função que receba uma sequência de uma ou mais palavras e retorne a mesma sequência, mas com todas as   palavras de cinco ou mais letras invertidas (como o nome deste kata).

  As strings passadas consistirão apenas em letras e espaços.
  Os espaços serão incluídos apenas quando mais de uma palavra estiver presente.
  Exemplos

  spinWords("Hey fellow warriors") => "Hey wollef sroirraw" 
  spinWords("This is a test") => "This is a test" 
  spinWords("This is another test") => "This is rehtona test"
*/

const length = (str) => str.length;

const reverse = (str) => str.split('').reverse().join('');

const spinWords = (s) => length(s) < 5 ? s : s.split(' ').map(str => length(str) > 4 ? reverse(str) : str).join(' ')

spinWords("Hi") // "Hi"
spinWords("Welcome") // "emocleW"
spinWords("Hey fellow warriors") //  "Hey wollef sroirraw"
spinWords("This is a test") //  "This is a test"
spinWords("This is another test") //  "This is rehtona test"
spinWords("You are almost to the last test") //  "You are tsomla to the last test"
spinWords("Just kidding there is still one more") //  "Just gniddik ereht is llits one more"
spinWords("Seriously this is the last one") //  "ylsuoireS this is the last one"
