<template>
   <div>
     <van-goods-action>
       <van-goods-action-mini-btn
         icon="chat-o"
         text="客服"
       />
       <van-goods-action-mini-btn
         info="0"
         icon="cart-o"
         text="购物车"
       />
       <van-goods-action-big-btn text="加入购物车" />
       <van-goods-action-big-btn
         primary
         text="立即购买"
       />
     </van-goods-action>
   </div>
</template>

<script>
export default {
  name: 'GoodAction'
}
</script>

<style scoped>

</style>
