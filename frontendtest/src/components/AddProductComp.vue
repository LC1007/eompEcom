<!-- <template>
  <div class="text-white">
    <div class="modal-backdrop">
        <div class="modal">
            <header class="modal-header">
                <slot name="header">
                    Heading
                </slot>
                <button type="button" class="btn-close" @click="close">
                    x
                </button>

            </header>

            <section class="modal-body">
                <slot name="body">
                    Body  
                </slot>

            </section>

            <footer>
                <slot name="footer">
                    
                </slot>
                <button type="button" class="btn-green" @click="close">
                    Close Modal
                </button>
            </footer>
        </div>
    </div>
  </div>
</template>

<script>
export default {
    name: 'Modal',
    methods:{
        close(){
            this.$emit('close')
        }
    }
};
</script>

<style scoped></style> -->

<template>
  <div>
    <!-- Button trigger modal -->
    <button
      type="button"
      class="btn btn-primary"
      data-bs-toggle="modal"
      data-bs-target="#exampleModal"
    >
      Add Product
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
             <form @submit.prevent="submitContentFrom">
      <input type="text" v-model="formData.firstName" placeholder="firstName"/>
      <input type="text" v-model="formData.lastName" placeholder="lastName"/>
      <input type="text" v-model="formData.userAge" placeholder="userAge"/>
      <input type="text" v-model="formData.gender" placeholder="gender"/>
      <input type="text" v-model="formData.userRole" placeholder="userRole"/>
      <input type="text" v-model="formData.emailAdd" placeholder="emailAdd"/>
      <input type="text" v-model="formData.userPass" placeholder="userPass"/>
      <input type="text" v-model="formData.profileUrl" placeholder="profileUrl"/>
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
        return {
      formData: {
        firstName: "",
        lastName: "",
        userAge: "",
        gender: "",
        userRole: "",
        emailAdd: "",
        userPass: "",
        profileUrl: "",
      }
    };
    },
    methods:{
        async submitContentFrom(){
      this.$store.dispatch('submitContent', this.formData)
    }
    }
};
</script>

<style lang="scss" scoped></style>
