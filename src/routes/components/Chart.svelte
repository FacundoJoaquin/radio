<script>
  import { onMount, afterUpdate } from 'svelte';
  import Chart from 'chart.js/auto';

  export let data;
  
  let chartInstance;

  function createChart() {
    const ctx = document.getElementById('myChart');
    
    chartInstance = new Chart(ctx, {
      type: 'bar',
      data: {
        labels: ['Red', 'Blue', 'Yellow', 'Green', 'Purple', 'Orange'],
        datasets: [{
          label: '# of Votes',
          data,
          borderWidth: 1
        }]
      },
      options: {
        scales: {
          y: {
            beginAtZero: true
          }
        }
      }
    });
  }

  function updateChart() {
    if (chartInstance) {
      chartInstance.data.datasets[0].data = data;
      chartInstance.update();
    }
  }

  onMount(createChart);
  afterUpdate(updateChart);
</script>

<style>
  div {
    height: 400px;
    width: 400px;
  }
</style>

<div>
  <canvas width="1" height="1" id="myChart"></canvas>
</div>
