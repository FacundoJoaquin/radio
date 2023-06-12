<script>
export let href='';
</script>
<li>
    <a {href}>
        <slot/>
    </a>
</li>

<style>
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