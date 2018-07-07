/**
 * Given an array of words, print all anagrams together.
 *
 * For example, if the given array is ['cat', 'dog', 'tac', 'god', 'act'],
 * then the output would be [['cat', 'tac', 'act'], ['god','dog']]
 */

// BRUTE FORCE
//  Make groups by length
//  For each word
//  Iterate by each letter
//  Check if the next word have the letter
//  if yes, tag it with counter
//  if not, continue to next word
//  when finish with all the letters for the word, get all the words with the number of tags the same as the length

// OPTIMIZATION 1
//  Iterate array to make groups by length                              W
//  For each word                                                       W
//  Iterate by each letter                                              L
//  Check if the next word have the letter
//  if yes, continue to next word
//  if not, remove it from array and save it in another
//  Next round, use the new array with the 'remaining' words

let list = ['cat', 'dog', 'base', 'tac', 'god', 'act', 'besa', 'fly', 'caca'];
let anagrams = [];
let remaining = [];
let groupedWords = {};

list.forEach(function(word) {                                                   // W
    try {
        groupedWords[word.length].push(word);
    } catch {
        groupedWords[word.length] = [word];
    }
});

for(key in groupedWords){
    let words = groupedWords[key];
    for(let w = 0; w < words.length; w += 1) {
        let word = words[w];
        for(let l = 0; l < word.length; l += 1) {
            for(let n = w+1; n < words.length; n += 1) {
                if (! words[n].includes(word[l])) {
                    remaining.push(words.splice(n, 1)[0]);
                }
            }
        }
        anagrams.push(words);
        words = remaining;
        remaining = [];
    }
}
console.log('anagrams ', anagrams);
