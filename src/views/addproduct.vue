<script setup>

import { reactive } from 'vue';
import axios from 'axios'
import { useRouter } from 'vue-router';

const router = useRouter();

const addnew = () => {
   axios.post("http://localhost:3000/products", newproduct)
   .then(() => {
    router.push("/")
   });
};

const newproduct = reactive({
    name: '',
    id: '',
    price: ''
});

</script>


<template>

    <div class="container w-50">
        <form @submit.prevent="addnew">
            <legend>Új termék hozzáadása</legend>
            <div class="mb-3">
                <label for="productname" class="form-label">Terméknév</label>
                <input type="text" v-model=" newproduct.name" class="form-control" id="productname">
            </div>

            <div class="mb-3">
                <label for="productid" class="form-label">Termékazonosító</label>
                <input type="text" v-model=" newproduct.id" class="form-control" id="productid">
            </div>

            <div class="mb-3">
                <label for="productprice" class="form-label">Termékár</label>
                <input type="text" v-model=" newproduct.price" class="form-control" id="productprice">
            </div>
            <button type="submit" class="btn btn-success fw-bold">Hozzáad</button>
        </form>
    </div>
   
</template>


