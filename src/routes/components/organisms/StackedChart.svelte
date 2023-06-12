<script>
  import { onMount } from 'svelte';
  import Chart from 'chart.js/auto';
  export let radio;
  let chartInstance;
  let id = radio.name;

  $: name = radio.name; // declaración reactiva

  function createChart() {
    const ctx = document.getElementById(id);
    
    chartInstance = new Chart(ctx, {
      type: 'bar',
      data: {
        labels: [name],
        datasets: [
          {
            label: 'Free Seconds',
            data: [radio.freeSeconds],
            backgroundColor: 'rgba(75, 192, 192, 0.2)', // Color para freeSeconds
            borderColor: 'rgba(75, 192, 192, 1)', // Border color para freeSeconds
            borderWidth: 1
          },
          {
            label: 'Booked Seconds',
            data: [radio.bookedSeconds],
            backgroundColor: 'rgba(255, 99, 132, 0.2)', // Color para bookedSeconds
            borderColor: 'rgba(255, 99, 132, 1)', // Border color para bookedSeconds
            borderWidth: 1
          },
        ]
      },
      options: {
        scales: {
          x:{
            stacked: true
          },
          y: {
            stacked: true,
            beginAtZero: true
          }
        }
      }
    });
  }
  onMount(createChart);
</script>

<div>
<canvas id={id}></canvas>
</div>
<style>
  div {
    height: 400px;
    width: 400px;
  }
</style>