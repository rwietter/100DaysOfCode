const fs = require('fs');
const path = require('path');
const { Observable } = require('rxjs')

const createCompleteFilePath = (dirPaths) => {
  return dirPaths.map((file) => path.join(__dirname, 'legendas', file));
};

const readFilesPaths = (pathName) => {
  return new Observable((sub) => {
    try {
      fs.readdirSync(pathName).forEach(file => {
        sub.next(path.join(pathName, file))
      })
      sub.complete()
    } catch (error) {
      sub.error(error);
    }
  });
};

// transform all files into unique file with strings
const filesIntoUniqueFile = () => {
  return createPipleableOperator(sub => ({
    next(filePath) {
      try {
        const stringFile = fs.readFileSync(filePath, {
          encoding: 'utf-8',
        });
        const strings = stringFile.toString()
        sub.next(strings.toString())
      } catch (error) {
        sub.error(error)
      }
    }
  }))
};

const removeUnnecessaryLines = () => {
  return createPipleableOperator(sub => ({
    next(text) {
      try {
        return text.trim() && sub.next(text);
      } catch (error) {
        sub.error(error)
      }
    }
  }))
};

const removePatternOfText = (pattern) => {
  return createPipleableOperator(sub => ({
    next(text) {
      try {
        const newText = text.split('-->').join(',')
        return sub.next(newText)
      } catch (error) {
        sub.error(error)
      }
    }
  }))
};

const removePatternOfTextThatContainNumbers = (fileText) => {
  return createPipleableOperator(sub => ({
    next(text) {
      try {
        const number = parseInt(text.trim(), 10);
        return Number.isNaN(number) && sub.next(text)
      } catch (error) {
        sub.error(error)
      }
    }
  }))
};

const breakLines = (pattern) => {
  return createPipleableOperator(sub => ({
    next(fileText) {
      try {
        fileText.split(pattern).forEach(part => sub.next(part));
      } catch (error) {
        sub.error(error)
      }
    }
  }))
}

const splitBadCharacters = (char) => {
  return createPipleableOperator(sub => ({
    next(fileText) {
      try {
        const textLine = fileText.replace(/[^\w|ç|<i>|?|!|']/g, ' ').split(char).join('').trim()
        sub.next(textLine)
      } catch (error) {
        sub.error(error)
      }
    }
  }))
};

const countUseWords = () => {
  return createPipleableOperator(sub => ({
    next(words) {
      try {
        const newWords = words.reduce((acc, el) => {
          const word = el.toLowerCase();
          const repeat = acc[word] ? acc[word].repeat + 1 : 1;
          acc[word] = { word, repeat };
          return acc;
        }, {})
        sub.next(newWords)
      } catch (error) {
        sub.error(error)
      }
    }
  }))
};

const sorting = (attr = 'amount', type = 'asc') => {
  return createPipleableOperator(sub => ({
    next(structWords) {
      try {
        const order = {
          asc: (a, b) => b[attr] - a[attr],
          desc: (a, b) => a[attr] - b[attr],
        };
        sortingWords = Object.values(structWords).sort(order[type]);
        sub.next(sortingWords)
      } catch (error) {
        sub.error(error.message)
      }
    }
  }))

};

// filter files end with .srt extension
const filterFilesEndExtension = (pattern) => {
  return createPipleableOperator(sub => ({
    next(text) {
      if (text.endsWith(pattern)) {
        sub.next(text)
      }
    }
  }))
};

const createPipleableOperator = (op) => {
  return (source) => {
    return new Observable(observer => {
      const sub = op(observer);
      source.subscribe({
        next: sub.next,
        error: sub.error || (e => observer.error(e)),
        complete: sub.complete || (e => observer.complete(e))
      })
    })
  }
}


module.exports = {
  readFilesPaths,
  createCompleteFilePath,
  filterFilesEndExtension,
  filesIntoUniqueFile,
  removeUnnecessaryLines,
  removePatternOfText,
  removePatternOfTextThatContainNumbers,
  breakLines,
  splitBadCharacters,
  countUseWords,
  sorting,
};
