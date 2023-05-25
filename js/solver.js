const wordlist = new Set();

fetch("./data/dictionary.json").then(a => a.json()).then(result => Object.keys(result).forEach(word => wordlist.add(word)))

console.log(wordlist.size)