const form = document.querySelector('#form');

const coins = {
  EUR: 0.85,
  LIB: 0.77,
  BRL: 5.20,
  USD: 0.19
}

const convertCurrency = ({ coinValue: currency, fromValue, toValue }) => {
  const result = form.querySelector('#result');
  const coinConverted = currency / coins[fromValue] * coins[toValue];

  if (!coinConverted) return;
  
  result.classList.add('result');
  result.innerHTML = `Valor convertido de ${fromValue} para ${toValue} é ${coinConverted.toFixed(2)}`
}

const formData = {
  coinValue: 0,
  fromValue: '',
  toValue: ''
}

form.addEventListener('input', (event) => {
  formData[event.target.name] = event.target.value
  convertCurrency(formData);
})
