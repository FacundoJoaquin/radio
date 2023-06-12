<script>
  import StackedChart from "../components/organisms/StackedChart.svelte";

  let values = [45, 55];

  let radios = [
    { name: 'lu17', freeSeconds: 0.55, bookedSeconds: 0.45 },
    { name: 'patagonia', freeSeconds: 0.72, bookedSeconds: 0.28 },
  ];

</script>

{#each radios as radio (radio.name)}
<div class='flex flex-row w-48 h-48'>
  <StackedChart {radio} />
</div>
{/each}