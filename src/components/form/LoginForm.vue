<template>
  <div class='form'>
    <div class="form-wrapper">
      <i-input placeholder="name" clearable class="name" v-model="username"></i-input>
      <i-input placeholder="password" clearable class="password" v-model="password"></i-input>
      <i-button long type="info" @click="login">login</i-button>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      username: "",
      password: ""
    };
  },
  methods: {
    login() {
      this.$emit("login", { username: this.username, password: this.password });
    }
  }
};
</script>

<style lang='stylus' scoped>
.form {
  .form-wrapper {
    .name, .password {
      margin-bottom: 20px;
    }
  }
}
</style>

