// Word Search Data
const words = [
  "Democracy", "Justice", "Rights", "Equality", "Secularism", "Liberty", "Sovereignty", "Federalism", "Constitution", "Amendment"
];

const gridSize = 10;
let wordSearchGrid = [];
let foundWords = [];

// Function to generate a word search grid
function generateGrid() {
  // Initialize the grid with empty spaces
  wordSearchGrid = Array(gridSize).fill().map(() => Array(gridSize).fill(''));

  // Randomly place each word in the grid
  words.forEach(word => {
    placeWordInGrid(word);
  });

  // Fill empty spots with random letters
  for (let row = 0; row < gridSize; row++) {
    for (let col = 0; col < gridSize; col++) {
      if (wordSearchGrid[row][col] === '') {
        wordSearchGrid[row][col] = String.fromCharCode(65 + Math.floor(Math.random() * 26));  // Random letter A-Z
      }
    }
  }
}

// Function to place a word randomly in the grid
function placeWordInGrid(word) {
  const directions = [
    { x: 1, y: 0 },  // Horizontal
    { x: 0, y: 1 },  // Vertical
    { x: 1, y: 1 },  // Diagonal Down-Right
    { x: -1, y: 1 }, // Diagonal Down-Left
  ];

  let placed = false;

  while (!placed) {
    const direction = directions[Math.floor(Math.random() * directions.length)];
    const startX = Math.floor(Math.random() * gridSize);
    const startY = Math.floor(Math.random() * gridSize);

    // Check if the word fits in the selected direction
    if (canPlaceWord(word, startX, startY, direction)) {
      // Place the word in the grid
      for (let i = 0; i < word.length; i++) {
        const x = startX + i * direction.x;
        const y = startY + i * direction.y;
        wordSearchGrid[x][y] = word[i].toUpperCase();
      }
      placed = true;
    }
  }
}

// Function to check if a word can be placed at the specified position and direction
function canPlaceWord(word, startX, startY, direction) {
  for (let i = 0; i < word.length; i++) {
    const x = startX + i * direction.x;
    const y = startY + i * direction.y;

    if (x < 0 || x >= gridSize || y < 0 || y >= gridSize || wordSearchGrid[x][y] !== '') {
      return false;
    }
  }
  return true;
}

// Function to render the grid in the HTML
function renderGrid() {
  const container = document.getElementById('word-search-container');
  container.innerHTML = '';

  for (let row = 0; row < gridSize; row++) {
    for (let col = 0; col < gridSize; col++) {
      const cell = document.createElement('span');
      cell.textContent = wordSearchGrid[row][col];
      cell.addEventListener('click', () => selectCell(row, col));
      container.appendChild(cell);
    }
  }
}

// Function to highlight selected cells and check for words
let selectedCells = [];
function selectCell(row, col) {
  const cell = document.getElementById('word-search-container').children[row * gridSize + col];
  
  // Toggle selection
  if (selectedCells.some(c => c.row === row && c.col === col)) {
    cell.classList.remove('selected');
    selectedCells = selectedCells.filter(c => c.row !== row || c.col !== col);
  } else {
    cell.classList.add('selected');
    selectedCells.push({ row, col });
  }

  checkSelectedCells();
}

// Function to check if selected cells form a valid word
function checkSelectedCells() {
  const word = selectedCells.map(cell => wordSearchGrid[cell.row][cell.col]).join('');
  if (words.includes(word)) {
    foundWords.push(word);
    updateWordList();
    selectedCells.forEach(cell => {
      const index = cell.row * gridSize + cell.col;
      document.getElementById('word-search-container').children[index].classList.add('found');
    });
    selectedCells = [];
  }
}

// Function to update the word list display
function updateWordList() {
  const wordList = document.getElementById('word-list');
  wordList.innerHTML = '';

  words.forEach(word => {
    const li = document.createElement('li');
    li.textContent = word;
    if (foundWords.includes(word)) {
      li.style.textDecoration = 'line-through';
    }
    wordList.appendChild(li);
  });
}

// Reset the game
document.getElementById('reset-btn').addEventListener('click', () => {
  foundWords = [];
  selectedCells = [];
  generateGrid();
  renderGrid();
  updateWordList();
});

// Initialize the game
generateGrid();
renderGrid();
updateWordList();
