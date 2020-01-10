<template>
<div class="">
这是提交订单页面
<ul>
  <li v-for="goods in goodsList" :key="goods.id+goods.name">
    {{goods.name}}
  </li>
</ul>
</div>
</template>

<script type="text/ecmascript-6">
export default{
  name:"SubmitOrder",
  data(){
    return {
      goodsList:[] 
    }
  },
  mounted(){
    this.goodsList = this.$store.state.cart
  },
  components:{}
}
</script>
<style scoped lang='scss'>
</style>