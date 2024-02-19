function randomizeParagraphs() {
  const entriesDiv = document.getElementById('entries');
  const paragraphs = Array.from(entriesDiv.getElementsByTagName('p'));

  // Define the padding to avoid overlap and stay within the visible area
  const padding =   10;

  // Calculate the available space within the parent div
  const parentWidth = entriesDiv.clientWidth -   2 * padding;
  const parentHeight = entriesDiv.clientHeight -   2 * padding;

  // Function to check for overlaps
  function checkOverlap(element, area) {
    const rect1 = element.getBoundingClientRect();
    const rect2 = area;
    return !(rect1.right < rect2.left ||
             rect1.left > rect2.right ||
             rect1.bottom < rect2.top ||
             rect1.top > rect2.bottom);
  }
  
function getRandomColor() {
    return '#' + Math.floor(Math.random() *  16777215).toString(16);
  }

  // Function to position each paragraph
  function positionParagraph(p) {
    let attempts =   5; // Maximum number of attempts to find a non-overlapping position
    let positioned = false;
    while (!positioned && attempts >   0) {
      // Generate a random position within the available space
      const randomTop = Math.floor((Math.random() * parentHeight) + 400) + padding;
      const randomLeft = Math.floor((Math.random() * parentWidth) - 100) + padding;

      // Apply the styles
      p.style.position = 'absolute';
      p.style.top = `${randomTop}px`;
      p.style.left = `${randomLeft}px`;
	  p.style.color = getRandomColor();

      // Check for overlaps with other paragraphs
      positioned = paragraphs.every(other => other === p || !checkOverlap(other, p.getBoundingClientRect()));
      attempts--;
    }
  }

  // Position each paragraph
  paragraphs.forEach(positionParagraph);
}
function waitForParagraphs(callback) {
  const checkExist = setInterval(function() {
    if (document.querySelector('#entries p')) {
      clearInterval(checkExist);
      callback();
    }
  },  100); // check every  100ms
}
waitForParagraphs(function() {
randomizeParagraphs();
});