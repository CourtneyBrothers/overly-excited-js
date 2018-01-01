// Create an array that contains the words in the sentence
let theWordArray = ["The ", "walrus", " danced", " through", " the", " trees", " in", " the", " light", " of", " the", " moon"];

// The addExcitement function should accept the array as the sole argument
function addExcitement (mySentenceGoesHere) {
    let empty = "";
    for (let i = 0; i < mySentenceGoesHere.length; i++) {
            empty += mySentenceGoesHere[i];
               console.log(empty);
            }
    };
    /*
      Write a `for` loop that iterates over the array argument and
      outputs the words.
     */



// Invoke the function and pass in the array
addExcitement(theWordArray);


