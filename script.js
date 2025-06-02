
function showTab(id) {
  document.querySelectorAll('.tab').forEach(tab => tab.classList.remove('active'));
  document.getElementById(id).classList.add('active');
}

document.addEventListener('DOMContentLoaded', () => {
  const pnlCtx = document.getElementById('pnlChart').getContext('2d');
  new Chart(pnlCtx, {
    type: 'bar',
    data: {
      labels: ['Jan', 'Feb', 'Mar', 'Apr'],
      datasets: [{
        label: 'Monthly Profit (€)',
        data: [2000, 3000, 2500, 4000],
        backgroundColor: 'rgba(75, 192, 192, 0.5)'
      }]
    }
  });

  const roiCtx = document.getElementById('roiChart').getContext('2d');
  new Chart(roiCtx, {
    type: 'pie',
    data: {
      labels: ['Padel Setup', 'Gym Setup', 'Overheads'],
      datasets: [{
        data: [60000, 40000, 15000],
        backgroundColor: ['#4bc0c0', '#ffcd56', '#ff6384']
      }]
    }
  });
});
