
# telephoneWords problem

Given a list of integers, print out all possible words that can be spelled by using the telephone letter mapping.

I've written a step by step guide below to my solution below.

<img src='http://www.berryreview.com/wp-content/uploads/2008/02/wp-contentuploadsphonekeypad.png'/>

I found it helpful to think of all letter combinations in a tree like structure.

<img src='http://res.cloudinary.com/small-change/raw/upload/v1481766676/Screen_Shot_2016-12-15_at_12.50.52_pm_cl78nw.png'/>

## Steps

The solution is written in JavaScript. I've used the Mocha and Chai testing suites.

### Step 1: Create a 'library' object that associates phone digits to their letters


