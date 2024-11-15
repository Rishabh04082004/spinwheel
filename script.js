// script.js
// Fetch JSON data (or load it directly)
fetch('constitution_clues.json')
  .then(response => response.json())
  .then(data => {
    // Create the crossword grid
    createCrosswordGrid(data);

    // Display clues
    displayClues(data.across, 'across-clues');
    displayClues(data.down, 'down-clues');
  });

// Function to create crossword grid
function createCrosswordGrid(data) {
  // ... logic to create the grid dynamically using HTML elements
}

// Function to display clues
function displayClues(clues, containerId) {
  // ... logic to create and append clue elements to the specified container
}
