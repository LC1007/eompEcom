<template>
  <div class="home">
    <h1>Add a user</h1>
    <router-link to="/about">test</router-link>
    <form @submit.prevent="submitContent">
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
import axios from "axios";
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
    };
  },
  methods: {
    submitContent() {
      axios
        .post("https://skateboardecomm.onrender.com/user", this.formData)
        .then((response) => {
          console.log(response);
        })
        .catch((error) => {
          console.log(error);
        });
    },
  },
};
</script>
