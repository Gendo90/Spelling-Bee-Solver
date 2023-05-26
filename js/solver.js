const wordList = new Set();

async function setWordList(wordList) {
    await fetch("./data/dictionary.json").then(a => a.json()).then(result => Object.keys(result).forEach(word => wordList.add(word)))

    console.log(wordList.size) // note that this is only about 86k and needs to be around 171k for the current English dictionary size...
// will need to get a better word list at some point!
}

setWordList(wordList)

// words must be longer than 3 letters -> add this filtering to the initial wordList download
// words must contain only letters in set
// words must contain the center letter in diagram
function filterWords(allLetters, centerLetter, wordList) {
    let hashAllLetters = Array.from(new Set(allLetters))
    hashAllLetters.sort()
    hashAllLetters = hashAllLetters.join("")

    filteredList = Array.from(wordList).filter(a => a.length > 3).filter(word => {
        let hashWord = Array.from(new Set(word))
        hashWord.sort()
        hashWord = hashWord.join("")
        // console.log(hashWord)
        let result =
            hashWord.split().every(letter => hashAllLetters.includes(letter)) && hashWord.includes(centerLetter)

        return result
    })

    return filteredList
}


// needs to run after the word list is loaded, currently running too early
// console.log(filterWords(["H", "O", "B", "R", "I", "T", "N"], "N", wordList))

// example for 5/25/23
// Letters -> ["H", "O", "B", "R", "I", "T", "N"], center letter is "N"

// function call: console.log(filterWords(["H", "O", "B", "R", "I", "T", "N"], "N", wordList))

// result =
// [
//     "INION",
//     "ROIN",
//     "ORION",
//     "ONION",
//     "INHIBITOR",
//     "RHINO",
//     "INRO",
//     "HORNITO",
//     "TRON",
//     "INTROIT",
//     "ROINT",
//     "INTORTION",
//     "TORN",
//     "RONIN",
//     "TORTION",
//     "RONT",
//     "ROON",
//     "TRITON",
//     "IRON",
//     "INTORT",
//     "NOON",
//     "ORNITHON"
// ]

// Words that worked -> IRON, NOON, ONION, RHINO, TORN, TRITON
// Might need a better word list, or different forms of the words expounded

// connect with frontend
function solveUserPuzzle() {
    // get text input from hive
    allLetters = Array.from(document.querySelectorAll("text")).map(a => a.textContent.toUpperCase())
    centerLetter = allLetters[0]

    results = filterWords(allLetters, centerLetter, wordList)

    results_holder = document.querySelector("#results")

    while(results_holder.children.length > 0) {
        results_holder.removeChild(results_holder.firstElementChild);
    }

    results.forEach(word => {
        const currElem = document.createElement("p");
        currElem.textContent = word;
        results_holder.appendChild(currElem);
    })

}
