const ctx = document.getElementById('chart');

new Chart(ctx, {
  type: 'line',
  data: {
    labels: ['1','2','3','4','5','6','7'],
    datasets: [{
      label: 'System Load',
      data: [12,19,10,15,22,18,25],
      tension:0.4
    }]
  },
  options:{
    plugins:{
      legend:{display:false}
    }
  }
});