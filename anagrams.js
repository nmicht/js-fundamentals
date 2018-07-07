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

function thirdApproach(list) {
    let map = {};

    list.forEach(function(word){
        // Get the groups of anagrams with the same size
        let lists = map[word.length];
        let inserted = false;

        if (lists === undefined) {
            map[word.length] = [[word]];
        } else {
            // For each group of anagrams validate with the first element
            for(anagram of lists){
                if (isAnagram(anagram[0],word)) {
                    anagram.push(word);
                    inserted = true;
                    break;
                }
            }
            if(!inserted) {
                map[word.length].push([word]);
            }
        }

    })

    function isAnagram(word1, word2) {
        if (word1.length != word2.length) {
            return false;
        }

        let cont = 0;
        for(letter of word1){
            if (word2.includes(letter)){
                cont++;
            }
        }
        if (cont == word1.length){
            return true;
        }

        return false;
    }

    function printAnagrams(map) {
        let anagrams = [];

        for(key in map){
            for(array of map[key]){
                anagrams.push(array);
            }
        }

        return anagrams;
    }

    console.log('anagrams', printAnagrams(map));
}

thirdApproach(list);
