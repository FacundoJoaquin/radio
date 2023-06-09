<script>
  import Chart from "../components/Chart.svelte";

  let data = [0, 5, 0, 7, 0, 18];

  function handleInput(event, index) {
    const newValue = parseInt(event.target.value);
    data[index] = newValue;
  }
</script>

<div>
  {#each data as value, index}
    <input type="number" on:input={(e) => handleInput(e, index)} bind:value={data[index]} />
  {/each}
</div>

<Chart {data} />




<!-- <section>
  <div class="insight">
    <div class="sales">
      <svg xmlns="http://www.w3.org/2000/svg" height="48" viewBox="0 -960 960 960" width="48"><path d="M120-120v-76l60-60v136h-60Zm165 0v-236l60-60v296h-60Zm165 0v-296l60 61v235h-60Zm165 0v-235l60-60v295h-60Zm165 0v-396l60-60v456h-60ZM120-356v-85l280-278 160 160 280-281v85L560-474 400-634 120-356Z"/></svg>
      <div class="middle">
        <div class="left">
          <h3>Ventas totales</h3>
          <h1>$25234</h1>
        </div>
        <div class="progress">
          <svg>
            <circle cx='38' cy='38' r='38'></circle>
          </svg>
          <div class="number">
            <p>81%</p>
          </div>
        </div>
      </div>
    </div>
  </div>
  <div>
    <div class="divbot">Overview</div>
    <div class="divbot">Ventas recientes</div>
  </div>
</section>

<style>
  section {
    margin-top: 1.4rem;
  }
  section .insight {
    display: grid;
    grid-template-columns: repeat(3,1fr);
  }
</style> -->
