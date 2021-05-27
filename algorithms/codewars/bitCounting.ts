const countBits = (num: number = 123) => {
  const binary = num.toString(2);
  
  if (!binary) return;

  return binary.match(/[{1, }]/g)?.length
}
countBits(342)
