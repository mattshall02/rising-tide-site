<!-- For example, in +layout.svelte head -->
<link rel="preconnect" href="https://fonts.googleapis.com">
<link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
<link href="https://fonts.googleapis.com/css2?family=Peralta&family=Montserrat:wght@400;600&display=swap" rel="stylesheet">


<style>
  .font-peralta { font-family: 'Peralta', cursive; }
  .font-body { font-family: 'Montserrat', sans-serif; }
  @import '../app.css';
</style>


<script>
  export let data;
</script>
<slot />
