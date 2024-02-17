
<script setup>
import axios from 'axios';
import { onMounted, ref } from 'vue';

const user = ref([]);


onMounted(() => {
  axios.get("http://localhost:3000/user")
    .then((resp) => {
      user.value = resp.data;
    });

   
});




</script>

<template>
   <div v-for="u in user" class="modal-body">
    <p v-if="u.id == 2">Rendelést leadó személy  elérhetősége: {{ u.email }}</p>
    <p v-if="u.id == 2">Rendelést leadó személy  címe: {{ u.address }}</p>
   </div>
</template>

