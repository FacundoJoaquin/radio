<script>
  import { onMount } from "svelte";
  import Chart from "chart.js/auto";
  export let radios;
  let chartInstance;
  let id = "stackedChart";

  function createChart() {
    const labels = radios.map((radio) => radio.name);
    const freeSecondsData = radios.map((radio) => radio.freeSeconds);
    const bookedSecondsData = radios.map((radio) => radio.bookedSeconds);

    const ctx = document.getElementById(id);

    chartInstance = new Chart(ctx, {
      type: "bar",
      data: {
        labels,
        datasets: [
          {
            label: "Segundos Libres",
            data: freeSecondsData,
            backgroundColor: "rgba(75, 192, 192, 0.2)",
            borderColor: "rgba(75, 192, 192, 1)",
            borderWidth: 1,
          },
          {
            label: "Segundos Ocupados",
            data: bookedSecondsData,
            backgroundColor: "rgba(255, 99, 132, 0.2)",
            borderColor: "rgba(255, 99, 132, 1)",
            borderWidth: 1,
          },
        ],
      },
      options: {
        scales: {
          x: {
            stacked: true,
            ticks: {
              // Update the tick marks to show as percentage
              callback: function (value) {
                return (value * 100).toFixed(0) + "%";
              },
            },
          },
          y: {
            stacked: true,
            ticks: {
              // Update the tick marks to show as percentage
              callback: function (value) {
                return (value * 100).toFixed(0) + "%";
              },
            },
          },
        },
      },
    });
  }
  onMount(createChart);
</script>

<canvas width="100%" height="100%" {id} />
