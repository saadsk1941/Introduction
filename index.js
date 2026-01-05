document.addEventListener("contextmenu", function (e) {
  e.preventDefault();
});

// Disable key shortcuts
document.addEventListener("keydown", function (e) {

  // F12
  if (e.key === "F12") {
    e.preventDefault();
    return false;
  }

  // Ctrl + Shift + I / J / C
  if (
    e.ctrlKey &&
    e.shiftKey &&
    ["i", "j", "c"].includes(e.key.toLowerCase())
  ) {
    e.preventDefault();
    return false;
  }

  // Ctrl + U (View Source)
  if (e.ctrlKey && e.key.toLowerCase() === "u") {
    e.preventDefault();
    return false;
  }

  // Ctrl + S (Save)
  if (e.ctrlKey && e.key.toLowerCase() === "s") {
    e.preventDefault();
    return false;
  }

  // Ctrl + P (Print)
  if (e.ctrlKey && e.key.toLowerCase() === "p") {
    e.preventDefault();
    return false;
  }
});