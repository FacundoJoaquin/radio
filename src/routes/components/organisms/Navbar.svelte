<script>

  import NavLink from "../atoms/NavLink.svelte";

</script>
<nav class="navBar">
    <ul>
      <NavLink href='/dashboard'>Dashboard</NavLink>
      <NavLink href='/clients'>Clientes</NavLink>
      <NavLink href='/bookings'>Transmisión</NavLink>
      <NavLink href='/productions'>Producción</NavLink>
      <NavLink href='/configurations'>Configuración</NavLink>
    </ul>
  </nav>
  
  <slot />

  <style>

    .navBar {
      width: 100%;
      box-shadow: 0px 0px 15px 0px rgba(0, 0, 0, 0.25);
    }
  
    ul {
      display: flex;
      list-style: none;
      gap: 20px;
      height: 50px;
      justify-content: center;
    }
  
 

  </style>