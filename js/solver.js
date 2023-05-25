const wordlist = new Set();

fetch("./data/dictionary.json").then(a => a.json()).then(result => Object.keys(result).forEach(word => wordlist.add(word)))
// fetch("./data/dictionary.json").then(a => a.json()).then(result => console.log(Object.keys(result)))//.forEach(word => wordlist.add(word)))

console.log(wordlist.size) // note that this is only about 86k and needs to be around 171k for the current English dictionary size...
// will need to get a better word list at some point!