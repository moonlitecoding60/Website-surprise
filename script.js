function showPart(partId) {
  // Hide all sections
  document.querySelectorAll('.section').forEach(section => {
    section.style.display = 'none';
  });

  // Show the specific part
  if (partId === 'bouquet') {
    document.getElementById('part-bouquet').style.display = 'block';
  } else {
    document.getElementById('part' + partId).style.display = 'block';
  }
  
  // Scroll to top when changing parts
  window.scrollTo(0, 0);
}

