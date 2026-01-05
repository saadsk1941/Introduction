// Disable Right Click
document.addEventListener("contextmenu", function (e) {
  e.preventDefault();
  return false;
});

// Disable Key Shortcuts
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
    (e.key === "I" || e.key === "J" || e.key === "C")
  ) {
    e.preventDefault();
    return false;
  }

  // Ctrl + U (View Source)
  if (e.ctrlKey && e.key === "U") {
    e.preventDefault();
    return false;
  }
});
