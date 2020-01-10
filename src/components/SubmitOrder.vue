<template>
<div class="">
<mt-nav-bar leftArrowStyle="black" title="确认订单"></mt-nav-bar>
</div>
</template>

<script type="text/ecmascript-6">
import MTNavBar from "./Commen/MTNavBar"
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
  components:{
    [MTNavBar.name]:MTNavBar
  }
}
</script>
<style scoped lang='scss'>
</style>