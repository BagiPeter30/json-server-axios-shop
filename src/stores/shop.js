import { defineStore } from 'pinia'
export const useTodoStore = defineStore('products', {
    state: () => ({
        lastId : null,
        name: null,
        price: null
    }),
    actions:{
        setLastId(id){ this.lastId = id },
        setname(name){ this.name = name },
        setprice(price){ this.price = price },
    }

})