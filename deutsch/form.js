          
<!-- Form to add new submissions -->
<form id="submissionForm">
  <label for="word">Word:</label>
  <input type="text" id="word" required>
  <label for="translation">English Translation:</label>
  <input type="text" id="translation" required>
  <label for="sentence">Sentence:</label>
  <input type="text" id="sentence" required>
  <label for="notes">Notes:</label>
  <input type="text" id="notes" required>
  <label for="date">Date:</label>
  <input type="text" id="date" placeholder="Enter date (e.g., Saturday 20th January, 2024)" required>
  <button type="submit" id="submitButton">Submit</button>
</form>

<script>
  function addWordSection() {
    // Get form values
    const wordValue = document.getElementById("word").value;
    const translationValue = document.getElementById("translation").value;
    const sentenceValue = document.getElementById("sentence").value;
    const notesValue = document.getElementById("notes").value;
    const dateValue = document.getElementById("date").value;

    // Create new word-section element
    const newWordSection = document.createElement("div");
    newWordSection.className = "word-section";

    // Create word element with strong tag content
    const newWord = document.createElement("div");
    newWord.className = "word";
    newWord.innerHTML = `<strong>${wordValue}:</strong> <em>${translationValue}</em> <span class="date">${dateValue}</span>`;
    
    // Create sentence element
    const newSentence = document.createElement("div");
    newSentence.className = "sentence";
    newSentence.textContent = sentenceValue;

    // Create notes element
    const newNotes = document.createElement("div");
    newNotes.className = "notes";
    newNotes.innerHTML = `<em>${notesValue}</em>`;

    // Append elements to the newWordSection
    newWordSection.appendChild(newWord);
    newWordSection.appendChild(newSentence);
    newWordSection.appendChild(newNotes);

    // Insert newWordSection at the top of the left-column
    const leftColumn = document.getElementsByClassName("left-column")[0];
    if (leftColumn) {
      leftColumn.insertBefore(newWordSection, leftColumn.firstChild);

      // Clear form values
      document.getElementById("word").value = "";
      document.getElementById("translation").value = "";
      document.getElementById("sentence").value = "";
      document.getElementById("notes").value = "";
      document.getElementById("date").value = "";
    } else {
      console.error("Could not find 'left-column' element.");
    }
  }

  // Set up the event listener for the button
  const submitButton = document.getElementById("submitButton");
  if (submitButton) {
    submitButton.addEventListener("click", addWordSection);
  } else {
    console.error("Could not find submit button.");
  }
</script>