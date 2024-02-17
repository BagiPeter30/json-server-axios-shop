
<script setup>
import axios from 'axios';
import { onMounted, ref } from 'vue';

import user from '../views/user.vue';
import orderproductname from '@/views/orderproductname.vue';

const order = ref([]);


onMounted(() => {
  axios.get("http://localhost:3000/order")
    .then((resp) => {
      order.value = resp.data;
    });
});




</script>

<template>
  <!-- Button trigger modal -->
  <button type="button" class="btn btn-outline-success  mt-2 fw-bold ms-3" data-bs-toggle="modal" data-bs-target="#staticBackdrop">
    Rendelések
  </button>

  <!-- Modal -->
  <div class="modal fade" id="staticBackdrop" data-bs-backdrop="static" data-bs-keyboard="false" tabindex="-1"
    aria-labelledby="staticBackdropLabel" aria-hidden="true">
    <div v-for="o in order" class="modal-dialog">
      <div class="modal-content">
        <div class="modal-header">
          <h5 class="modal-title w-75" id="staticBackdropLabel">Rendelés dátuma: {{ o.datum }}</h5> 
        </div>
        <div class="modal-header">
          <h5 class="modal-title w-75" id="staticBackdropLabel">Rendelt mennyiség: {{ o.quantity }}</h5> 
        </div>
        <orderproductname />
          <user />
        <div class="modal-footer">
          <button type="button" class="btn btn-secondary" data-bs-dismiss="modal">Bezár</button>
        </div>
      </div>
    </div>
  </div>
</template>

