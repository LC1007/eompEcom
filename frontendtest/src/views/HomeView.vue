<template>
  <div class="home">
    <div class="container m-5">
      <h6>Search</h6>
      <form @submit.prevent="searchFunc">
        <input type="text" v-model="searchForm.skateboards" name="" id="">
      </form>
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
              <router-link :to="{ name: 'byUser', params: {id: item.skateID}, query:{skateboard: item.skateboard, quantity: item.quantity, amount: item.amount, category: item.category, prodUrl: item.prodUrl}}">
                <button class="btn btn-primary me-3">Edit</button>
              </router-link>
              <button class="btn btn-primary">Delete</button>
            </td>
          </tr>
        </tbody>
      </table>
    </div>
    <h1>Add a user</h1>
    <router-link to="/about">test</router-link>
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
    <h1>Add a product</h1>
  </div>
</template>

<script>

export default {
  data() {
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
      },
      searchForm: {
        skateboards: ""
      }
    };
  },
  computed:{
    skateboards(){
      return this.$store.state.skateboards
    }
  },
  mounted(){
    this.$store.dispatch('fetchBoards')
  },
  methods: {
    async submitContentFrom(){
      this.$store.dispatch('submitContent', this.formData)
    },
    goToProduct(){
      this.$router.push({
        name: this.$name,
        params: this.$params.id,
        query: this.query.name
      })
    },
  },
};
</script>
