<template>
  <div>
    <!--图片-->
    <div class="productPhoto">
      <img v-lazy="`/api/image/messi/m06.jpg`" />
      <div class="productName">Messi003</div>
    </div>
    <!--具体详情-->
    <div class="productdata">
      <van-row>
        <van-col span="12"><span class="sizespan" @click="choosesize">尺码</span><van-icon name="arrow-down" /></van-col>
        <van-col span="12" class="sizename">{{sizename}}</van-col>
      </van-row>
      <!--信息框-->
      <div class="Pprice">
        <van-row>
          <van-col span="12">价格：</van-col>
          <van-col span="12" class="price">￥990</van-col>
        </van-row>
        <van-row>
          <van-col span="12">发售日期：</van-col>
          <van-col span="12" class="firstdata">2018.05.05</van-col>
        </van-row>
        <van-row>
          <van-col span="12">发售价格（仅供参考）：</van-col>
          <van-col span="12" class="firstdata">￥699</van-col>
        </van-row>
      </div>

    </div>
    <Gaozhi></Gaozhi>
    <GoodAction></GoodAction>
    <!--尺码选择框-->
    <Size @sizech="sizech"></Size>
  </div>
</template>

<script>
import Size from '@/components/size/Size'
import GoodAction from '@/components/goodaction/GoodAction'
import Gaozhi from '@/components/gaozhi/Gaozhi'
export default {
  name: 'ProductData',
  components: {
    Size,
    GoodAction,
    Gaozhi
  },
  data () {
    return {
      sizeid: '',
      sizename: ''
    }
  },
  methods: {
    choosesize: function () {
      this.$store.dispatch('showSize')
    },
    sizech: function (s, sn) {
      console.log(sn)
      this.size = s
      this.sizename = sn
    }
  }
}
</script>

<style scoped>
.productPhoto{
  width: 94vw;
  margin-top: 1vw;
  margin-left: 3vw;
  box-shadow:3px 3px 5px rgba(178, 178, 178, 0.33);
  position: relative;
}
  img{
    width: 60%;
    margin-left: 20%;
  }
  .productName{
    width: 50%;
    margin: 0 auto;
    color: black;
    font-size: 4vw;
    font-weight: lighter;
    position: absolute;
    bottom: 0;
    left: 25%;
    text-align: center;
  }
  .productdata{
    width: 92vw;
    margin-top: 3vw;
    margin-left: 3vw;
    padding: 1vw 1vw;
    box-shadow:3px 3px 5px rgba(178, 178, 178, 0.33);
  }
  .sizespan{
    color: cornflowerblue;
    font-size: 4vw;
  }
  .van-icon{
    font-size: 3vw;
    margin-left: 1vw;
 }
  .van-col{
    font-size: 3.2vw;
    font-weight: lighter;
  }
  .sizename{
    text-align: right;
    font-size: 4vw;
  }
  .price{
    text-align: right;
    /*font-size: 3vw;*/
    color: red;
  }
  .Pprice{
    width: 100%;
    margin: 0 auto;
    padding: 3vh 0;
  }
  .van-row{
    margin-top: 3vw;
    padding: 0 10vw;
  }
  .firstdata{
    text-align: right;
  }
</style>
