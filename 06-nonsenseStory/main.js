function tellStory() {
    // Constructing the arrays from the text area inputs
    let nounArray = document
      .querySelector("#nouns")
      .value.toLowerCase()
      .replace(/,/g, " ")
      .split(/\s+/);
    
  
    let verbArray = document
      .querySelector("#verbs")
      .value.trim()
      .toLowerCase()
      .replace(/,/g, " ")
      .split(/\s+/);
  
    
  
    let adjArray = document
      .querySelector("#adjectives")
      .value.trim()
      .toLowerCase()
      .replace(/,/g, " ")
      .split(/\s+/);
  
    //Story string and assignment to p area
    const myStory = `Once upon a time there was a ${adjArray[0]} ${nounArray[0]} who was packing up everything to go to ${nounArray[1]}. ${nounArray[0]} was feeling ${adjArray[1]}, but knew that this new life would be ${adjArray[2]}. With a ${verbArray[2]} of faith, ${nounArray[0]} ${verbArray[2]} the dream life with ${nounArray[3]}. Together they travled to ${nounArray[4]} and ate ${nounArray[5]}. Everyday was full of exciting ${nounArray[6]}. It was the ${nounArray[0]} they always wanted.`
    let storyBox = document.querySelector("#theStory");
    storyBox.textContent = myStory;

  
    //Simple if statment to check the length of the arrays is correct, and error if not
    if (nounArray.length < 7) {
      storyBox.textContent = "Please put seven nouns in the nouns box.";
    } else if (adjArray.length < 3) {
      storyBox.textContent = "Please put three adjectives in the adjectives box.";
    } else if (verbArray.length < 3) {
      storyBox.textContent = "Please put three verbs in the verbs box.";
    }
  }