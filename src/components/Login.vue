<template>
  <div class="login-container">
    <el-row >
      <el-col :span="12" :offset="6">
      <h1 class="page-title">CDownPace后台管理系统</h1>
      <el-form ref="loginForm" :model="loginForm" label-width="80px" class="login-form" :rules="rules">
        <el-form-item label="手机号码" prop="username">
          <el-input v-model="loginForm.username"></el-input>

        </el-form-item>
           <el-form-item label="密码" prop="password">
             <el-input v-model="loginForm.password" type="password"></el-input>
           </el-form-item>
           <el-form-item>
             <el-button type="primary">登录</el-button>
           </el-form-item>
        </el-form>
        
    </el-col>
    </el-row>

    
  </div>
</template>

<script>
import {Button,Row ,Col,Form,Input,FormItem} from "element-ui"
export default {
  name: 'Login',
  data(){
    let validateTel = (rule, value, callback) => {
      if(!value.match(/1[3456789]\d{9}/)){
        callback(new Error("请输入正确的手机号码！"))
      }else{
        callback()
      }
    }
    return {
      loginForm:{
         username:"",
         password:""
      },
      rules:{
         username: [
          {required: true,message: "请输入手机号码！",trigger: "blur"},
          {validator: validateTel,trigger: "blur"}
        ],
        password: [
          {required: true,message: "请输入密码！",trigger: "blur"},
          {min: 6, max: 20,message: "密码字符应该在6-20之间！",trigger: "blur"},
        ]
      }
    }
  },
   components: {
    // Login,
    [Button.name]:Button,
    [Row.name]:Row,
    [Col.name]:Col,
    [Form.name]:Form,
    [Input.name]:Input,
    [FormItem.name]:FormItem 
  }
}
</script>

<style  lang="scss">
body{
  background-color: #eee;
}
.login-container{
  padding-top: 80px;
  .page-title{
    text-align: center
  }
  .login-form{
    padding-top:40px;
  }
}


</style>
