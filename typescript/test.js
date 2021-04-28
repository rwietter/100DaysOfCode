const positiveValue = (value, cb) => {
  if(typeof value !== 'number') {
    return cb({ error: 'TypeError', message: 'value is not a number' });
  }
  const result = Math.abs(value);
  return cb({ error: '', message: result })
};

positiveValue(-102.5, ({ error, message }) => {
  if(error) return console.log(`${error}: ${message}`);

  console.log(message)
})
