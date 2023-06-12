<script>
    import { onMount } from "svelte";
    import SearchIcon from "../../components/atoms/icons/SearchIcon.svelte";
    import Th from "../../components/atoms/Th.svelte";
    import Td from "../../components/atoms/Td.svelte";
    import Tr from "../../components/atoms/Tr.svelte";
    import Modal from "../../components/organisms/Modal.svelte";
    import CreateClientForm from "../../components/molecules/CreateClientForm.svelte";
    import Button from "../../components/atoms/Button.svelte";

    let clients = [];
    let search = "";

    async function fetchClients() {
        const URL = "https://jsonplaceholder.typicode.com/users";
        try {
            let response = await fetch(URL);
            return await response.json();
        } catch (error) {
            console.log(error);
        }
    }
    onMount(async () => {
        clients = await fetchClients();
    });

    let showModal = false;

    function openModal() {
		showModal = true;

	}

	function closeModal() {
		showModal = false;
	}
   
</script>

 <Modal title='Agregar monos' {showModal} on:closeModal={closeModal}>
    <CreateClientForm />
</Modal> 

<main class="flex flex-col">
    <div style="margin-top:-0.4rem" class="flex justify-center">
        <div class="flex flex-row justify-between w-full">
            <h1 class="text-5xl text-gray-600 font-bold font-roboto opacity-70 mt-2 ml-2" >Clientes</h1>
            <form action="" class="mb-1">
                <label for="search" class="">
                    <SearchIcon />
                </label>
                <input
                    bind:value={search}
                    type="text"
                    name="search"
                    class="rounded-2xl border shadow-md py-1 px-2 pl-8 ring-1 focus:outline-edgewater-400"
                />
            </form>
            <div class="mt-6 mr-2">
                <button class="border border-edgewater-500 bg-white font-semibold text-edgewater-500 rounded-xl self-center px-3 py-1 hover:bg-edgewater-300 hover:text-white duration-500" on:click={openModal}>Agregar nuevo cliente</button>
            </div>
        </div>
        
    </div>
    <div class="absolute h-full bg-edgewater-200 w-1/3 mix-blend-multiply">
    </div>
    <div class="border flex justify-center w-full shadow-2xl z-10 bg-white mt-4">
        <table id="t1" class="w-full cursor-default">
            <thead>
                <tr>
                    <Th>Nombre</Th>
                    <Th>taxId</Th>
                    <Th>Telefono</Th>
                    <Th>Direccion</Th>
                    <Th>Email</Th>
                </tr>
            </thead>
            <tbody>
                {#if clients}
                    {#each clients as client}
                        <Tr>
                            <Td>{client.name}</Td>
                            <Td>{client.id}</Td>
                            <Td>{client.phone}</Td>
                            <Td>{client.address.street}, {client.address.city}</Td
                            >
                            <Td>{client.email}</Td>
                        </Tr>
                    {/each}
                {/if}
            </tbody>
        </table>
    </div>
    <div class="flex justify-end mt-5">

    </div>


<!--  -->

</main>

<style>
</style>
