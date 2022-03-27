function lowerCamelCase(string) {
  const word = string.toLowerCase().split(' ');
  for (let i = 1; i < word.length; i += 1) {
    word[i] = word[i].charAt(0).toUpperCase() + word[i].slice(1);
  }
  return word.join('');
}
module.exprots = lowerCamelCase;
