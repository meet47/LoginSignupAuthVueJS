<template>
  <div class="container">
    <form>
      <div class="form-group">
        <label for="exampleInputName">Full Name</label>
        <input
          v-model="fullname"
          type="text"
          class="form-control"
          id="fullname"
          aria-describedby="emailHelp"
          placeholder="Enter Full Name"
        />
        <label for="exampleInputEmail1">Email address</label>
        <input
          v-model="email"
          type="email"
          class="form-control"
          id="email"
          aria-describedby="emailHelp"
          placeholder="Enter email"
        />
        <small id="emailHelp" class="form-text text-muted"
          >We'll never share your email with anyone else.</small
        >
      </div>
      <div class="form-group">
        <label for="exampleInputPassword1">Password</label>
        <input
          v-model="password"
          type="password"
          class="form-control"
          id="exampleInputPassword1"
          placeholder="Password"
        />
      </div>
      <div class="form-group form-check">
        <input type="checkbox" class="form-check-input" id="exampleCheck1" />
        <label class="form-check-label" for="exampleCheck1">Check me out</label>
      </div>
      <div class="submit">
        <button type="button" class="btn btn-dark" @click="signup">
          Submit
        </button>
      </div>
    </form>
  </div>
</template>

<script>
export default {
  name: "SignUp",

  data() {
    return {
      fullname: "",
      email: "",
      password: "",
    };
  },

  computed: {
    signup: function () {
      let data = {
        fullname: this.fullname,
        email: this.email,
        password: this.password,
      };
      this.$store.dispatch("signup", data);
    },
  },
};
</script>

<style>
.container {
  width: 500px;
  margin-top: 250px;
  border: 2px solid black;
  padding: 20px;
  border-radius: 10px;
}
.submit {
  margin-left: 150px;
}
#fullname {
  margin-bottom: 20px;
}
</style>
