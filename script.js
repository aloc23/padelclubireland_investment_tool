
function showTab(id) {
  document.querySelectorAll('.tab').forEach(tab => tab.classList.remove('active'));
  document.getElementById(id).classList.add('active');
}

document.addEventListener("DOMContentLoaded", () => {
  const courts = document.getElementById('courts');
  const peakRate = document.getElementById('peakRate');
  const total = document.getElementById('padelTotal');

  function updatePadel() {
    total.textContent = (parseInt(courts.value) * parseInt(peakRate.value) * 100).toLocaleString();
  }

  courts.addEventListener('input', updatePadel);
  peakRate.addEventListener('input', updatePadel);
  updatePadel();

  const members = document.getElementById('gymMembers');
  const gymRevenue = document.getElementById('gymRevenue');

  members.addEventListener('input', () => {
    gymRevenue.textContent = (parseInt(members.value) * 50).toLocaleString();
  });
  gymRevenue.textContent = (parseInt(members.value) * 50).toLocaleString();
});
