<template>
  <div class="footer">
    <van-row type="flex" justify="space-around" >
      <van-col span="9">
        <router-link to="/">帮助中心</router-link>
      </van-col>
      <van-col span="9"><router-link to="/">联系我们</router-link></van-col>
    </van-row>
    <van-row type="flex" justify="space-around" >
      <van-col span="9">
        <router-link to="/">会员制度</router-link>
      </van-col>
      <van-col span="9"><router-link to="/">订单查询</router-link></van-col>
    </van-row>
    <van-row type="flex" justify="space-around" >
      <van-col span="9">
        <router-link to="/">关于我们</router-link>
      </van-col>
      <van-col span="9"><router-link to="/">联盟营销</router-link></van-col>
    </van-row>
    <!--微信微博-->
    <van-row type="flex" justify="space-around" >
      <van-col span="9">
        <router-link to="/" class="fa fa-weixin"></router-link>
      </van-col>
      <van-col span="9"><router-link to="/" class="fa fa-weibo"></router-link></van-col>
    </van-row>
  </div>
</template>

<script>

export default {
  name: 'Footer'
}
</script>

<style scoped>
  .footer{
    background-color: rgba(180, 180, 180, 0.18);
    padding-top: 3vh;
    width: 100vw;
    min-height: 20vh;
  }
  .van-col{
    text-align: center;
    font-size: 3vw;
    font-weight: lighter;
  }
  a{
    color: black;
  }
  .van-row{
    padding: 2vw 0;
  }
</style>
