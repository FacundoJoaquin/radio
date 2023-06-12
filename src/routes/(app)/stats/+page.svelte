<script>

  import StackedChart from "../../components/organisms/StackedChart.svelte";


  let radios = [
    { name: 'AM540 - LU17', freeSeconds: 0.55, bookedSeconds: 0.45 },
    { name: 'Paraiso FM - 96.1', freeSeconds: 0.72, bookedSeconds: 0.28 },
    { name: 'Trelew Noticias - 96.9', freeSeconds: 0.34, bookedSeconds: 0.66 },
    {name: 'Total', freeSeconds: (0.55+0.72+0.34)/3, bookedSeconds: (0.45+0.28+0.66)/3}
  ];


</script>

<div class='flex max-h-96 bg-white p-4 shadow-md rounded-md '>
      <StackedChart {radios} />

  </div>
