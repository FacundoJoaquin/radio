<script>
  import { createEventDispatcher } from "svelte";
  import CloseModalIcon from "../atoms/icons/CloseModalIcon.svelte";

  export let showModal = false;
  export let title = "";

  const dispatch = createEventDispatcher();
</script>

{#if showModal}
  <div class="absolute z-40 w-screen h-screen bg-opacity-70 bg-black flex justify-center items-center">
    <div class='flex flex-col  bg-white rounded-xl'>
        <button type="button" class="self-end mr-2" on:click={() => dispatch("closeModal")}>
            <CloseModalIcon />
        </button>
        <h2 class="text-center text-2xl ">
          {title}
        </h2>
      <slot />
    </div>
  </div>
{/if}
