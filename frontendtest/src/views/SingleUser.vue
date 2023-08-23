<template>
    <div>
        <div class="card">
            <h2>Edit Products</h2>
            <label for="name">Skateboard</label>
            <p></p>
            <p></p>
            
        </div>
        <div class="card m-5" style="width: 18rem;">
            <img :src=$route.query.prodUrl class="card-img-top" alt="...">
            <div class="card-body">
                    <input type="text" v-model="$route.query.skateboard" name="" id="">
                    <input type="text" v-model="$route.query.quantity" name="" id="">
                    <input type="text" v-model="$route.query.amount" name="" id="">
                    <input type="text" v-model="$route.query.category" name="" id="">
                    <input type="text" v-model="$route.query.prodUrl" name="" id="">
                    <button class="btn btn-primary mt-2">Update Product</button>
            </div>
          </div>
    </div>
</template>

<script>
    export default {
        data(){
            return {
                query:{
                    skateboard: "",
                    quantity: "",
                    amount: "",
                    category: "",
                    prodUrl: ""
                }
            }
        },
    }
</script>

<style lang="scss" scoped>

</style>