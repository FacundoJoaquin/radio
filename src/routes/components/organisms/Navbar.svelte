<script>

  import NavLink from "../atoms/NavLink.svelte";

</script>
<nav class="w-full h-12 z-10 shadow-xl bg-gray-50">
    <ul class='flex flex-row list-none gap-2 h-full justify-center'>
      <NavLink href='/dashboard'>Dashboard</NavLink>
      <NavLink href='/clients'>Clientes</NavLink>
      <NavLink href='/bookings'>Transmisión</NavLink>
      <NavLink href='/productions'>Producción</NavLink>
      <NavLink href='/configurations'>Configuración</NavLink>
    </ul>
  </nav>
  
  <slot />