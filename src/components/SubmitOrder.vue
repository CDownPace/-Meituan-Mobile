<template>
<div class="">
<mt-nav-bar leftArrowStyle="black" title="确认订单"></mt-nav-bar>
<van-cell-group>
  <van-cell title="请选择收货地址" icon="location-o" is-link to="/address">
    <template slot="title" v-if="address">
      <div class="user-info">
        <span>{{address.realname}}</span>
        <span>{{address.telephone}}</span>
      </div>
      <div class="address-info">
        {{address.province}}{{address.city}}{{address.county}}{{address.detail}}

      </div>
    </template>
  </van-cell>
</van-cell-group>
</div>
</template>

<script type="text/ecmascript-6">
import MTNavBar from "./Commen/MTNavBar"
import { Cell, CellGroup } from 'vant';
export default{
  name:"SubmitOrder",
  data(){
    return {
      goodsList:[] ,
      address:{
        realname:"张三",
        telephone:"18877775645",
        province:"湖南省",
        city:"长沙市",
        county:"岳麓区",
        detail:"岳麓区109号"
      }
    }
  },
  mounted(){
    this.goodsList = this.$store.state.cart
  },
  components:{
    [MTNavBar.name]:MTNavBar,
    [Cell.name]:Cell,
    [CellGroup.name]:CellGroup
  }
}
</script>
<style scoped lang='scss'>
</style>