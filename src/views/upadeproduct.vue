<script setup>

import { reactive, onMounted } from 'vue';
import { useRoute, useRouter } from 'vue-router';
import axios from 'axios'

const router = useRouter();
const route = useRoute();

const updateproduct = reactive({
    name: '',
    id: '',
    price: ''
});


onMounted(() => {
    axios.get(`http://localhost:3000/products/${route.params.id}`)
    .then((resp) => {
        updateproduct.name = resp.data.name;
        updateproduct.id = resp.data.id;
        updateproduct.price = resp.data.price;

    });
});

const update = () => {
    axios.put(`http://localhost:3000/products/${route.params.id}`, updateproduct)
    .then(() => {
        router.push("/")
    }); 
};

</script>


<template>

    <div class="container w-50">
        <form @submit.prevent="update">
            <legend>Modosítás</legend>
            <div class="mb-3">
                <label for="productname" class="form-label">Terméknév</label>
                <input type="text" v-model=" updateproduct.name" class="form-control" id="productname">
            </div>

            <div class="mb-3">
                <label for="productid" class="form-label">Termékazonosító</label>
                <input type="text" v-model=" updateproduct.id" class="form-control" id="productid">
            </div>

            <div class="mb-3">
                <label for="productprice" class="form-label">Termékár</label>
                <input type="text" v-model=" updateproduct.price" class="form-control" id="productprice">
            </div>
            <button type="submit" class="btn btn-success fw-bold">Modosít</button>
        </form>
    </div>
   
</template>


