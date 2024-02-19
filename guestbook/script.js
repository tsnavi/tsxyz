const form = document.getElementById('guestbook-form');
const entriesDiv = document.getElementById('entries');


// Fetch and display entries
async function fetchEntries() {
  const response = await fetch('/.netlify/functions/get-entries');
  const entries = await response.json();
  console.log(entries);
  //entriesDiv.innerHTML = entries.map(entry => `<p><strong>${entry.name}</strong> ${entry.message}</p>`).join('');
  entriesDiv.innerHTML = entries.map(entry => `<p>${entry.name}</strong>`).join('');
}

// Add a new entry
async function addEntry(event) {
  event.preventDefault();
  const name = document.getElementById('name').value;
// const message = document.getElementById('message').value;
	const message = 'na';
  await fetch('/.netlify/functions/add-entry', {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify({ name, message }),
  });
  form.reset();
  fetchEntries();
}

form.addEventListener('submit', addEntry);
fetchEntries();
