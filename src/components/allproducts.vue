<script setup>

import axios from 'axios';
import { onMounted, ref } from 'vue';



const allproducts = ref([]);
const dontproduct = ref(false);


onMounted(() => {
  axios.get("http://localhost:3000/products")
    .then((resp) => {
      allproducts.value = resp.data;
    });
});

const deleteproduct = (id) => {
  axios.delete('http://localhost:3000/products/' + id)
    .then(allproducts.value = allproducts.value.filter(product => id != allproducts.id))
  if (allproducts.value.length == 0) dontproduct.value == true
};

</script>

<template>
  <div class="row">
    <div class="col text-center mt-1">
      <RouterLink class="fw-bold btn btn-secondary" to="/addproduct">Termék hozzáadása</RouterLink>
    </div>
  </div>
  <div class="row row-cols-1 row-cols-md-4 g-4 mt-2">
    <h2 v-if="dontproduct" style="color: brown;">Nincs termék.</h2>
    <div class="col" v-for="p in allproducts">
      <div class="card h-100 border-success">
        <img src="../assets/no-image.png" class="card-img-top" alt="nincs kép">
        <div class="card-body bg-dark text-white rounded-top">
          <h5 class="card-title">Termékazonosító: {{ p.id }}</h5>
          <p class="card-text">Terméknév: {{ p.name }}</p>
          <p class="card-text">Termékár: {{ p.price }} FT</p>
          <RouterLink class="btn btn-warning fw-bold me-1" :to="`/updateproduct/${p.id}`">Modosítás</RouterLink>
          <button @click="deleteproduct(p.id)" type="button" class="btn btn-danger fw-bold ms-1">Törlés</button>
        </div>
      </div>
    </div>
  </div>
</template>
