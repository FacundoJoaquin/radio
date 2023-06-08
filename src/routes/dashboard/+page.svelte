<nav class="navBar">
    <ul>
      <li>Dashboard</li>
      <li>Clientes</li>
      <li>Transmisión</li>
      <li>Producción</li>
      <li>Configuración</li>
    </ul>
  </nav>
  
  <style>
    :global(body) {
      margin: 0;
      padding: 0;
      margin-top: -16px;
    }
  
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
  
    li {
      cursor: pointer;
      display: flex;
      align-items: center;
      font-family: 'Roboto';
      position: relative;
      overflow: hidden;
      margin: 0 10px;
    }
  
    li::after {
      content: '';
      position: absolute;
      left: 0;
      top: -100%;
      width: 100%;
      height: 100%;
      background-color: #C4DFDF;
      transition: top 0.2s;
      z-index: -1;
      border-radius: 0px 0px 10px 10px;
    }
  
    li:hover::after {
      top: 0;
    }
  

  </style>
  