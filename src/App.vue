<script setup>
import { RouterLink, RouterView } from 'vue-router'

</script>

<template>

  <nav class="navbar navbar-light bg-dark">
    <form class="container-fluid justify-content-start">
      <button class="btn btn-success me-2" type="button"><RouterLink to="/">Termékek</RouterLink></button>
      <button class="btn btn-success" type="button"><RouterLink to="/cart">Kosár</RouterLink></button>
    </form>
  </nav>
  <div class="container"><RouterView /></div>
 
      
</template>


