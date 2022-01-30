<template>
  <router-link to="/sign-up"
    ><button type="button" class="btn btn-primary">SignUp</button></router-link
  >
  <router-link to="/login"
    ><button type="button" class="btn btn-secondary">Login</button></router-link
  >
</template>

<script>
export default {
  name: "Landing",
};
</script>

<style>
button {
  margin-top: 20px;
  margin-left: 20px;
}
</style>
