<template>
    <div>
        <div v-if="item">
            <img :src="item.prodUrl" class="test" alt="">
            <p>{{ item.skateboard }}</p>
            <p>{{ item.category }}</p>
            <p>R{{ item.amount }}</p>
        </div>
        <div v-else>
            <p>loading...</p>
        </div>
        <div class="card">
            <h2>Edit Products</h2>
            
        </div>
        <!-- <div class="card m-5" style="width: 18rem;">
            <img :src=$route.query.prodUrl class="card-img-top" alt="...">
            <div class="card-body">
                {{ $route.query.skateboard }}
                    <input type="text" v-model="$route.query.skateboard" name="" id="">
                    <input type="text" v-model="$route.query.quantity" name="" id="">
                    <input type="text" v-model="$route.query.amount" name="" id="">
                    <input type="text" v-model="$route.query.category" name="" id="">
                    <input type="text" v-model="$route.query.prodUrl" name="" id="">
                    <button class="btn btn-primary mt-2">Update Product</button>
            </div>
          </div> -->
    </div>
</template>

<script>
import { mapGetters } from 'vuex'

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
        computed:{
            ...mapGetters(['getProduct']),
            item(){
                return this.getProduct
            },
            skateID(){
                return this.$route.params.skateID
            }
        },
        created(){
            this.fetchProduct(this.skateID)
        },
        methods:{
            async fetchProduct(skateID){
                try {
                    const response = await this.$store.dispatch('fetchProduct', skateID)
                    console.log('fetched product: ', response);
                } catch (error) {
                    console.error(error);
                }
            }
        }
    }
</script>

<style lang="scss" scoped>

</style>