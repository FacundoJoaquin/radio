<script>
    import "../../app.css";
    import Td from "../components/atoms/Td.svelte";
    import Th from "../components/atoms/Th.svelte";
    import Tr from "../components/atoms/Tr.svelte";
    import {onMount} from 'svelte';
    import SearchIcon from "../components/atoms/icons/SearchIcon.svelte";
    
    let clients = [];

    async function fetchClients() {
        const URL = 'https://jsonplaceholder.typicode.com/users';
        try {
            let response = await fetch(URL);
            return (await response.json());
        } catch (error) {
            console.log(error);
        }
    }
    onMount(async () => {
        clients = await fetchClients()
        console.log(clients);
    });

    let name;
    let phone;
    let address;
    let taxid;
    let email;

</script>

<main class="flex flex-col">
    <div class="absolute h-screen bg-edgewater-200 w-1/3 mix-blend-multiply "/>

    <div class="flex justify-center mt-4">
        <form action="" class="mb-2">
            <label for="search" class="">
                <SearchIcon/>
            </label>
            <input type="text" name="search" class="rounded-2xl border shadow-md py-1 px-2 pl-8 ring-1 focus:outline-edgewater-400 " />
        </form>
    </div>
    <div class="border flex justify-center w-full z-2 shadow-2xl  mt-4 ">
        <table class="w-full cursor-default">
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
                
                {#each clients as client}
                <Tr>
                    <Td>{client.name}</Td>
                    <Td>{client.id}</Td>
                    <Td>{client.phone}</Td>
                    <Td>{client.address.street}, {client.address.city}</Td>
                    <Td>{client.email}</Td>
                </Tr>
                {/each}

            </tbody>
        </table>

    </div>
</main>
