/**
 * @param nums | input number
 * @returns array of strings
 */
let numsToString = (nums: number): string[] => [...nums.toString()];

/**
 * @param acc | previousValue
 * @param num | currentValue
 * @returns sum of numbers
 */
let reduceAndSum = (acc: number, num: string) => acc + parseInt(num);

/**
 * @param n | input value
 * @returns 
 */
let digital_root = (n: number) => {
  const sum = numsToString(n).reduce(reduceAndSum, 0);
  return !(sum > 9) ? sum : digital_root(sum);
}

digital_root(16) // 7
digital_root(456) // 6
digital_root(942) // 6
digital_root(132189) // 6
digital_root(493193) // 2

/**
    16  -->  1 + 6 = 7
   456  -->  4 + 5 + 6 = 15  -->  1 + 5 = 6
   942  -->  9 + 4 + 2 = 15  -->  1 + 5 = 6
132189  -->  1 + 3 + 2 + 1 + 8 + 9 = 24  -->  2 + 4 = 6
493193  -->  4 + 9 + 3 + 1 + 9 + 3 = 29  -->  2 + 9 = 11  -->  1 + 1 = 2
*/
