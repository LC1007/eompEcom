<template>
  <div>
    <!-- Button trigger modal -->
    <button
      type="button"
      class="btn btn-primary"
      data-bs-toggle="modal"
      data-bs-target="#exampleModal"
    >
      Add User
    </button>

    <!-- Modal -->
    <div
      class="modal fade"
      id="exampleModal"
      tabindex="-1"
      aria-labelledby="exampleModalLabel"
      aria-hidden="true"
    >
      <div class="modal-dialog">
        <div class="modal-content">
          <div class="modal-header">
            <h1 class="modal-title fs-5" id="exampleModalLabel">Modal title</h1>
            <button
              type="button"
              class="btn-close"
              data-bs-dismiss="modal"
              aria-label="Close"
            ></button>
          </div>
          <div class="modal-body">
            <form @submit.prevent="submitProbForm">
                <input type="text" v-model="prodData.skateboard" placeholder="skateboard"/>
                <input type="text" v-model="prodData.quantity" placeholder="quantity"/>
                <input type="text" v-model="prodData.amount" placeholder="amount"/>
                <input type="text" v-model="prodData.category" placeholder="category"/>
                <button type="submit">Submit</button>
            </form>
          </div>
          <div class="modal-footer">
            <button
              type="button"
              class="btn btn-secondary"
              data-bs-dismiss="modal"
            >
              Close
            </button>
            <button type="button" class="btn btn-primary">Save changes</button>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
    data(){
        return{
            prodData:{
                skateboard: "",
                quantity: "",
                amount: "",
                category: "",
                prodUrl: ""
            }
        }
    },
    methods:{
        async submitProbForm(){
            this.$store.dispatch('submitProb', this.prodData)
        }
    }
};
</script>

<style lang="scss" scoped></style>
