const wordList = new Set();

async function setWordList(wordList) {
    await fetch("./data/dictionary.json").then(a => a.json()).then(result => Object.keys(result).forEach(word => wordList.add(word)))

    console.log(wordList.size) // note that this is only about 86k and needs to be around 171k for the current English dictionary size...
// will need to get a better word list at some point!
}

setWordList(wordList)