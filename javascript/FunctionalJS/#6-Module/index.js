const path = require('path');

const {
  readFilesPaths,
  filterFilesEndExtension,
  filesIntoUniqueFile,
  removeUnnecessaryLines,
  removePatternOfText,
  removePatternOfTextThatContainNumbers,
  breakLines,
  splitBadCharacters,
  countUseWords,
  sorting,
} = require('./utils');

const { toArray, groupBy, mergeMap, map } = require('rxjs/operators');
const { group } = require('console');

const pathName = path.join(__dirname, 'legendas');

const filePaths = readFilesPaths(pathName);

filePaths.pipe(
  filterFilesEndExtension('.srt'),
  filesIntoUniqueFile(),
  breakLines('\n'),
  removeUnnecessaryLines(),
  removePatternOfText('-->'),
  splitBadCharacters('<i>'),
  splitBadCharacters('i>'),
  splitBadCharacters('<'),
  breakLines(' '),
  splitBadCharacters('font>'),
  splitBadCharacters('>www'),
  splitBadCharacters('>'),
  removePatternOfTextThatContainNumbers(),
  removeUnnecessaryLines(),
  groupBy(word => word),
  mergeMap(groupWord => groupWord.pipe(toArray())),
  map(groupWord => ({ word: groupWord[0], amount: groupWord.length })),
  toArray(),
  sorting()
).subscribe(data => console.log(data))

// filePaths.pipe(
//   filterFilesEndExtension('.srt'),
//   filesIntoUniqueFile(),
//   breakLines('\n'),
//   removeUnnecessaryLines(),
//   removePatternOfText('-->'),
//   splitBadCharacters('<i>'),
//   splitBadCharacters('i>'),
//   splitBadCharacters('<'),
//   breakLines(' '),
//   splitBadCharacters('font>'),
//   splitBadCharacters('>www'),
//   splitBadCharacters('>'),
//   removePatternOfTextThatContainNumbers(),
//   removeUnnecessaryLines(),
//   toArray(),
//   countUseWords(),
//   sorting()
// ).subscribe(data => console.log(data))
