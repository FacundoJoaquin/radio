<script>
    import { createEventDispatcher } from "svelte";
    import Button from "../atoms/Button.svelte";
    import CloseModalIcon from "../atoms/icons/CloseModalIcon.svelte";
    export let title;
    const dispatch = createEventDispatcher();
</script>

<div class="flex flex-col bg-white p-4 rounded-xl">
    <button type="none" class="self-end" on:click={() => dispatch("closeModal")}
        ><CloseModalIcon /></button
    >

    <h2 class="text-2xl font-bold text-center mt-2 mb-4">
        {title}
    </h2>
    <form action="" class=" ">
        <div class="grid grid-cols-2 gap-4">
            <div class="flex flex-col col-span-2 items-center">
                <label for="text" class="block">Nombre del cliente</label>
                <input
                    type="text"
                    name="name"
                    class="rounded-2xl border shadow-md py-1 px-2 pl-8 ring-1 focus:outline-edgewater-400"
                    required
                    id=""
                />
            </div>

            <div class="flex flex-col items-center">
                <label for="taxid" class="block">CUIT-CUIL</label>
                <input
                    type="text"
                    name="taxid"
                    class="rounded-2xl border shadow-md py-1 px-2 pl-8 ring-1 focus:outline-edgewater-400"
                    required
                    id=""
                />
            </div>

            <div class="flex flex-col items-center">
                <label for="telephone" class="block">Numero de telefono</label>
                <input
                    type="text"
                    name="telephone"
                    class="rounded-2xl border shadow-md py-1 px-2 pl-8 ring-1 focus:outline-edgewater-400"
                    id=""
                />
            </div>

            <div class="flex flex-col items-center">
                <label for="direction" class="block">Dirección</label>
                <input
                    type="text"
                    name="direction"
                    class="rounded-2xl border shadow-md py-1 px-2 pl-8 ring-1 focus:outline-edgewater-400"
                    id=""
                />
            </div>

            <div class="flex flex-col items-center">
                <label for="email" class="block">Email</label>
                <input
                    type="text"
                    name="email"
                    class="rounded-2xl border shadow-md py-1 px-2 pl-8 ring-1 focus:outline-edgewater-400"
                    id=""
                />
            </div>
        </div>
        <!--         <textarea name="" id="" cols="1" class="w-3/4 p-2 bg-red-500 rounded-2xl self-center mt-2 mb-4" rows="8"></textarea>
 -->
        <div class="">
            <Button>Agregar</Button>
        </div>
    </form>
</div>
