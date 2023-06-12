<script>
    import { createEventDispatcher } from "svelte";
    import CreateClientForm from "../molecules/CreateClientForm.svelte";
    import ModalForm from "../molecules/ModalForm.svelte";
    import CloseModalIcon from "../atoms/icons/CloseModalIcon.svelte";
    export const title = '';
    export let showModal = false;
    
    const dispatch = createEventDispatcher();

</script>

{#if showModal}
<div class="absolute z-40 w-screen h-screen bg-opacity-70 bg-black flex justify-center items-center">
    <CreateClientForm {title}>
        <button type="button" on:click={() => dispatch('closeModal')}>
            <CloseModalIcon />
        </button>
        <slot />
    </CreateClientForm>
</div>
{/if}