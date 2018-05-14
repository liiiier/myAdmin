<template>
  <div class="login">
    <div class="login-wrapper">
      <login-form @login="_login"></login-form>
    </div>
  </div>
</template>
<script>
import LoginForm from "components/form/LoginForm";
import login from "api/login.js";
import { mapGetters, mapMutations } from "vuex";
export default {
  components: {
    LoginForm
  },
  computed: {
    ...mapGetters(["admin"])
  },
  methods: {
    _login(info) {
      login(info).then(res => {
        console.log(res);
        if (res.code === 0) {
          this.setAdmin(info.username);
        }
      });
    },
    ...mapMutations({
      setAdmin: "SET_ADMIN"
    })
  },
  mounted() {}
};
</script>
<style lang="stylus" >
.login {
  position: relative;
  left: 0;
  top: 0;
  bottom: 0;
  height: 100%;

  .login-wrapper {
    position: absolute;
    top: 0;
    bottom: 0;
    left: 0;
    right: 0;
    height: 40%;
    width: 25%;
    margin: auto;
  }
}
</style>


