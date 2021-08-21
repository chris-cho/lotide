const countLetters = (word) => {
  const count = {};
  word.split('').forEach(char => {
    count[char] = count[char] ? (count[char] + 1) : 1;
  });
  return count;
}

console.log(countLetters('LHL'));