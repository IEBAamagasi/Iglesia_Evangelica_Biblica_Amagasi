document.getElementById('donate-btn').addEventListener('mouseenter', function () {
  const tooltip = document.getElementById('donation-tooltip');
  tooltip.style.display = 'block';
});

document.getElementById('donate-btn').addEventListener('mouseleave', function () {
  const tooltip = document.getElementById('donation-tooltip');
  tooltip.style.display = 'none';
});
