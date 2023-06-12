<script>
  import { createEventDispatcher } from "svelte";
  import CloseModalIcon from "../atoms/icons/CloseModalIcon.svelte";

  export let showModal = false;
  export let title = "";

  const dispatch = createEventDispatcher();
</script>

{#if showModal}
  <div class="absolute z-40 w-screen h-screen bg-opacity-70 bg-black flex justify-center items-center">
    <div class='flex'>
      <h3>
        {title}
      </h3>
      <button type="button" on:click={() => dispatch("closeModal")}>
        <CloseModalIcon />
      </button>
      <slot />
    </div>
  </div>
{/if}
