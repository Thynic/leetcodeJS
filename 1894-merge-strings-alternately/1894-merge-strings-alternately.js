/**
 * @param {string} word1
 * @param {string} word2
 * @return {string}
 */
var mergeAlternately = function (word1, word2) {
  let concatenated = [];

  let shortest = word1.length > word2.length ? word2 : word1;
  let longest = shortest === word1 ? word2 : word1;

  let j = 0
  for (let i = 0; i < shortest.length * 2; i+=2) {
    concatenated[i] = word1[j];
    concatenated[i + 1] = word2[j];
    j++
  }

  concatenated = concatenated.join("");

  console.log(concatenated)

  if (word2.length !== word1.length) {
    concatenated += longest.slice(shortest.length, longest.length);
  }

  return concatenated;
};