<template>
  <div class="home">
    <div class="container m-5">
      <h6>Search</h6>
      <!-- <form @submit.prevent="searchFunc">
        <input type="text" v-model="searchForm.skateboards" name="" id="">
      </form> -->
      <button>
        <Modal2/>
      </button>
      <table class="table">
        <thead>
          <tr>
            <th>ID</th>
            <th>Skateboard</th>
            <th>Quantity</th>
            <th>Amount</th>
            <th>Category</th>
            <th>Product Url</th>
            <th>Action</th>
          </tr>
        </thead>
        <tbody>
          <tr v-for="item in skateboards" :key="item.skateID">
            <td>{{ item.skateID }}</td>
            <td>{{ item.skateboards }}</td>
            <td>{{ item.quantity }}</td>
            <td>{{ item.amount }}</td>
            <td>{{ item.category }}</td>
            <td><img :src="item.prodUrl" alt="" style="width: 10rem;"></td>
            <td>
                <button class="btn btn-primary me-3" @click="viewProductDetails(item.skateID)">Edit</button>
                <button type="button" class="btn" @click="showModal">Open Modal</button>
              <button class="btn btn-primary" @click="delProb(item.skateID)">Delete</button>
            </td>
          </tr>
        </tbody>
      </table>

      <button>
        <UserModal/>
      </button>
      <table class="table">
        <thead>
          <tr>
            <th>User</th>
            <th>User</th>
            <th>User</th>
            <th>User</th>
            <th>User</th>
            <th>User</th>
            <th>User</th>
            <th>Actions</th>
          </tr>
        </thead>
        <tbody>
          <tr v-for="user in users" :key="user.userID">
            <td>{{ user.firstName }}</td>
            <td>{{ user.lastName }}</td>
            <td>{{ user.userAge }}</td>
            <td>{{ user.gender }}</td>
            <td>{{ user.userRole }}</td>
            <td>{{ user.emailAdd }}</td>
            <td>{{ user.profileUrl }}</td>
            <td>
              <button class="btn btn-primary mx-3">Edit</button>
              <button class="btn btn-primary">Delete</button>
            </td>
          </tr>
        </tbody>
      </table>

      <Modal v-show="isModalVisible" @click="closeModal">
        <template v-slot:header>
          This is a new modal header.
        </template>
      
        <template v-slot:body>
          This is a new modal body.
        </template>
      
        <template v-slot:footer>
          This is a new modal footer.
        </template>
      </Modal>
    </div>
    <h1>Add a user</h1>
    <router-link to="/about">test</router-link>
    <!-- <form @submit.prevent="submitContentFrom">
      <input type="text" v-model="formData.firstName" placeholder="firstName"/>
      <input type="text" v-model="formData.lastName" placeholder="lastName"/>
      <input type="text" v-model="formData.userAge" placeholder="userAge"/>
      <input type="text" v-model="formData.gender" placeholder="gender"/>
      <input type="text" v-model="formData.userRole" placeholder="userRole"/>
      <input type="text" v-model="formData.emailAdd" placeholder="emailAdd"/>
      <input type="text" v-model="formData.userPass" placeholder="userPass"/>
      <input type="text" v-model="formData.profileUrl" placeholder="profileUrl"/>
      <button type="submit">Submit</button>
    </form> -->
    <h1>Add a product</h1>
  </div>
</template>

<script>
// import Modal from '../components/AddProductComp.vue'
import Modal2 from '../components/AddProductComp.vue'
import UserModal from '../components/AddUserComp.vue'

export default {
  name: 'App',
  components:{
    Modal2,
    UserModal
  },
  data() {
    return{
      isModalVisible: false
    }
  },
  computed:{
    skateboards(){
      return this.$store.state.skateboards
    },
    users(){
      return this.$store.state.users
    }
  },
  mounted(){
    this.$store.dispatch('fetchBoards')
    this.$store.dispatch('fetchUsers')
  },
  methods: {
    async submitContentFrom(){
      this.$store.dispatch('submitContent', this.formData)
    },
    // goToProduct(){
    //   this.$router.push({
    //     name: this.$name,
    //     params: this.$params.id,
    //     query: this.query.name
    //   })
    // },
    delProb(skateID){
      this.$store.dispatch('delProduct', skateID)
    },
    viewProductDetails(skateID){
      this.$router.push({ name: 'byProduct', params: {skateID}})
    },
    showModal(){
      this.isModalVisible= true
    },
    closeModal(){
      this.isModalVisible = false
    }
  },
};
</script>
