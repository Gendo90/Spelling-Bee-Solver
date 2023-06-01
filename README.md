# Spelling Bee Solver

This interactive application was created to assist with solving the New York Times' [Spelling Bee word game](https://www.nytimes.com/puzzles/spelling-bee).

Please note that the words returned are from the Webster dictionary, with the source text available [here](./data/dictionary.json) and the project repo for that text available [here](https://github.com/adambom/dictionary). The original source of that dictionary file is available on [Project Gutenberg](https://www.gutenberg.org/ebooks/29765) for free! Some of these words are not counted by the Spelling Bee game but are completely valid words, suggesting they use a different wordlist that we have available here with this dictionary. This is likely due to the source dictionary from Project Gutenberg being from 1913 (with no modern words) - which is why it is offered for free! More information about the dictionary providing the wordlist can be found [here](https://www.gutenberg.org/files/29765/old/29765-ReadMe.txt).

## Available Improvements

The most salient improvement available would be to increase the words included in this application as possible solutions by extending the existing wordlist with different conjugations of the words given - that is, different forms of words (plural, different tenses, adverbs, etc.). If we could get the NYT wordlist that they use for their game, the solutions given by this application should be complete using the algorithm already in place.