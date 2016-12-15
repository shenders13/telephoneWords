var telephoneWords = function(integerArray) {
  // create a library object holding each number and associated letters
  var library = {
    "1": [],
    "2": ['A','B','C'],
    "3": ['D', 'E', 'F'],
    "4": ['G', 'H', 'I'],
    "5": ['J', 'K', 'L'],
    "6": ['M', 'N', 'O'],
    "7": ['P', 'Q', 'R', 'S'],
    "8": ['T', 'U', 'V'],
    "9": ['W', 'X', 'Y', 'Z']
  };
  // define output array = []
  if (integerArray.length) {
    var output = library[integerArray[0].toString()];
  } else {
    return [];
  }
  // iterate through integerArray
  for (var i = 1; i < integerArray.length; i++) {
    // for each integer of inputArray (e.g 2)
    var correspondingLettersArray = library[integerArray[i].toString()]
    // for each of the integers letters e.g A, B, C
    // store old output array
    var oldOutput = output.slice();
    // initialise new output array
    var newOutput = [];
    // push letter to each element in output array
    for (var k = 0; k < oldOutput.length; k++) {
      var oldBlock = output[k]
      for (var m = 0; m < correspondingLettersArray.length; m++) {
        var letter = correspondingLettersArray[m];
        newOutput.push(oldBlock + letter);
      }
    }
    output = newOutput;
  }
  return output;
}

console.log(telephoneWords([]));

module.exports = telephoneWords;
