<script>
export let href='';
</script>
<li class='cursor-pointer flex items-center font-roboto z-10 relative overflow-hidden mx-2'>
    <a {href}>
        <slot/>
    </a>
</li>

<style>
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