const wordSearch = (letters, word) => {
  let result = false;
  const horizontalJoin = letters.map(ls => {
    return ls.join('');
  });
  for (const l of horizontalJoin) {
    if (l.includes(word)) {
      result = true;
    }
    // else
    // {
    //   result = false;
    // }
  }
  const verticalJoin = transpose(letters).map(ls => {
    return ls.join('');
  });
  for (const l of verticalJoin) {
    if (l.includes(word)) {
      result = true;
    }
    // else {
    //   result = false;
    // }
  }
  
  return result;
};


const transpose = function(matrix) {
  let output = [];
  for (let i = 0; i < matrix[0].length; i++) {
    let tempOutput = [];
    for (let j = 0; j < matrix.length; j++) {
      tempOutput.push(matrix[j][i]);
    }
    output.push(tempOutput);
  }
  return output;
};

module.exports = wordSearch;

// const result1 = wordSearch([
//   ['A', 'W', 'C', 'F', 'Q', 'U', 'A', 'L'],
//   ['S', 'E', 'I', 'N', 'F', 'E', 'L', 'D'],
//   ['Y', 'F', 'C', 'F', 'Q', 'U', 'A', 'L'],
//   ['H', 'M', 'J', 'T', 'E', 'V', 'R', 'G'],
//   ['W', 'H', 'C', 'S', 'Y', 'E', 'R', 'L'],
//   ['B', 'F', 'R', 'E', 'N', 'E', 'Y', 'B'],
//   ['U', 'B', 'T', 'W', 'A', 'P', 'A', 'I'],
//   ['O', 'D', 'C', 'A', 'K', 'U', 'A', 'S'],
//   ['E', 'Z', 'K', 'F', 'Q', 'U', 'A', 'L'],
// ], 'FRANK');
// console.log(result1);

// const result2 = wordSearch([
//   ['A', 'W', 'C', 'F', 'Q', 'U', 'A', 'L'],
//   ['S', 'E', 'I', 'N', 'F', 'E', 'L', 'D'],
//   ['Y', 'F', 'C', 'F', 'Q', 'U', 'A', 'L'],
//   ['H', 'M', 'J', 'T', 'E', 'V', 'R', 'G'],
//   ['W', 'H', 'C', 'S', 'Y', 'E', 'R', 'L'],
//   ['B', 'F', 'R', 'E', 'N', 'E', 'Y', 'B'],
//   ['U', 'B', 'T', 'W', 'A', 'P', 'A', 'I'],
//   ['O', 'D', 'C', 'A', 'K', 'U', 'A', 'S'],
//   ['E', 'Z', 'K', 'F', 'Q', 'U', 'A', 'L'],
// ], 'SEINFELD');

// For this challenge, you'll be implementing a word search solver, as a function that receives a 2D array of letters and a word. The function must:

// Check to find the word horizontally and vertically
// Return true if the word is found, and return false if the word is not found
// NOTE: You do not need to check to see if a word is written backwards or diagonally.