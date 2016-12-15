
# telephoneWords problem

Given a list of integers, print out all possible words that can be spelled by using the telephone letter mapping.

I've written a step by step guide below to my solution below.

<img src='http://www.berryreview.com/wp-content/uploads/2008/02/wp-contentuploadsphonekeypad.png'/>

I found it helpful to think of all letter combinations in a tree like structure.

<img src='http://res.cloudinary.com/small-change/raw/upload/v1481766676/Screen_Shot_2016-12-15_at_12.50.52_pm_cl78nw.png'/>

## Steps

The solution is written in JavaScript. I've used the Mocha and Chai testing suites.

### Step 1: Create a 'library' object that associates phone digits to their letters

`var library = {
    "1": [],
    "2": ['A','B','C'],
    "3": ['D', 'E', 'F'],
    "4": ['G', 'H', 'I'],
    "5": ['J', 'K', 'L'],
    "6": ['M', 'N', 'O'],
    "7": ['P', 'Q', 'R', 'S'],
    "8": ['T', 'U', 'V'],
    "9": ['W', 'X', 'Y', 'Z']
  };`

### Step 2: Add letters associated with the first input integer straight away.

`var output = library[integerArray[0].toString()];`

### Step 3: Iterate through input array of integers.

- for each of the letters arrays (correspondingLettersArray)
    - make a copy of where the output array is up to (oldOutput)
    - iterate through oldOutput array
        - add the letter we are up to in correspondingLettersArray to the end of each block in oldOutput array
        - push the new block to a new array called newOutput
    - set output to newOutput
 - return output
 
 ### Time Complexity
