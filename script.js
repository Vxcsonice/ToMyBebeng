const textarea = document.querySelector('textarea');

// Save the notes to local storage
textarea.addEventListener('input', () => {
  localStorage.setItem('notes', textarea.value);
});

// Load saved notes
document.addEventListener('DOMContentLoaded', () => {
  const savedNotes = localStorage.getItem('notes');
  if (savedNotes) {
    textarea.value = savedNotes;
  }
});