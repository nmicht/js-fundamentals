/**
 * Given an array of words, print all anagrams together.
 *
 * For example, if the given array is ['cat', 'dog', 'tac', 'god', 'act'],
 * then the output would be [['cat', 'tac', 'act'], ['god','dog']]
 */

let list = ['cat', 'dog', 'base', 'tac', 'god', 'act', 'besa', 'fly', 'caca'];

function firstApproach(list) {
    let anagrams = [];
    let remaining = [];

    let words = list;
    for(let w = 0; w < words.length; w += 1) {
        let word = words[w];
        for(let l = 0; l < word.length; l += 1) {
            for(let n = w+1; n < words.length; n += 1) {
                if (! words[n].includes(word[l]) || word.length != words[n].length) {
                    remaining.push(words.splice(n, 1)[0]);
                }
            }
        }
        anagrams.push(words);
        words = remaining;
        remaining = [];
    }
    console.log('anagrams ', anagrams);
}

function secondApproach(list) {
    list.forEach(function(word) {
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
}
