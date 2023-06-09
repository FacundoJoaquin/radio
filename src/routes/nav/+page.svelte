<script>
    import '../../app.css'
</script>


<nav>
    <div class="grid">
        <ul class="col-2">
            <li>Dashboard</li>
            <li>Transmisión</li>
            <li>Producción</li>
        </ul>
        <h1 class="col-1">RADIO</h1>
        <ul class="col-2">
            <li>Clientes</li>
            <li>Configuración</li>
        </ul>
    </div>
</nav>
<div class="hero">
    <img src="city (1).png" alt="" class="city">
</div>

<style>
    .grid {
        display: grid;
        grid-template-columns: repeat(5, 1fr);
        gap: 1rem;
        background-color: #C4DFDF;
    }

    .col-1 {
        grid-column: span 1;
        text-align: center;
        margin-top: 20px;
    }

    .col-2 {
        grid-column: span 2;
        list-style: none;
        display: flex;
        justify-content: space-evenly;
        margin-top: 20px;
    }

    .hero {
        background-color: #C4DFDF;
        height: 400px;
        position: relative;
    }

    .city {
        position: absolute;
        top: 0;
        left: 0;
        width: 100%;
        object-fit: fill;
}
</style>
