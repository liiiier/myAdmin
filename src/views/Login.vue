<template>
  <div class="login">
    <div class="login-wrapper">
      <login-form @login="login"></login-form>
    </div>
  </div>
</template>
<script>
import LoginForm from "components/form/LoginForm";
export default {
  components: {
    LoginForm
  },
  methods: {
    login(info) {
      console.log(info)
    }
  }
};
</script>
<style lang="stylus" >
.login {
  position relative
  left 0
  top 0
  bottom 0
  height 100%
  .login-wrapper{
    position: absolute;  
    top: 0;  
    bottom: 0;  
    left: 0;  
    right: 0; 
    height: 40%;  
    width: 25%;  
    margin: auto
    
  }
  
}
</style>


