function showPart(partNumber) {
  document.querySelectorAll('.section').forEach(sec => sec.style.display = 'none');
  const targetId = (partNumber === 'bouquet') ? 'part-bouquet' : 'part' + partNumber;
  const target = document.getElementById(targetId);
  if (target) target.style.display = 'block';
  window.scrollTo(0, 0);
}
