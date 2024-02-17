
<script setup>
import axios from 'axios';
import { onMounted, ref } from 'vue';


const name = ref([]);


onMounted(() => {
  axios.get("http://localhost:3000/products")
    .then((resp) => {
      name.value = resp.data;
    });
});




</script>

<template>
 

        <div v-for="n in name" class="modal-header">
          <h5 v-if="n.id == 1" class="modal-title w-75" id="staticBackdropLabel">Rendelt termék neve: {{ n.name }}</h5> 
        </div>
        
</template>

