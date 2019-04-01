<template>
 <div>
   <van-row class="rowbgc" type="flex" justify="space-around" v-for="(image, index) in images" :key="index">
     <van-col class="colbgc colbor-1" span="12" >
       <div @click="productdata">
         <!--商品图片-->
         <img v-lazy="`/api/image/${image[0]}`" />
         <!--商品名称...价格-->
       <div class="fontsize">
         <div>ACE</div>
         <div>￥699</div>
       </div>
       </div>
     </van-col>
     <van-col class="colbgc " span="12" >
       <div @click="productdata">
         <!--商品图片-->
         <img v-lazy="`/api/image/${image[1]}`" />
         <!--商品名称...价格-->
         <div class="fontsize">
           <div>传奇</div>
           <div>￥699</div>
         </div>
       </div>
     </van-col>
   </van-row>
 </div>
</template>

<script>
export default {
  name: 'Products',
  data () {
    return {
      images: [
        ['ACE/ace05.jpg',
          'chuanqi/chuanqi04.jpg'
        ],
        ['messi/m06.jpg',
          'cike/cike01.jpg'
        ],
        ['messi/m02.jpg',
          'cike/cike04.jpg'
        ],
        ['messi/m03.jpg',
          'cike/cike05.jpg'
        ]
      ],
      peoductid: ''
    }
  },
  methods: {
    productdata: function () {
      this.peoductid = '1'
      this.$router.push({
        path: `/productdata/${this.peoductid}`
      })
    }
  }
}
</script>

<style scoped>
  .colbgc{
    padding: 1px;
    border-bottom: 1px solid rgba(180, 180, 180, 0.18);
    border-right: 1px solid rgba(180, 180, 180, 0.18);
  }
  .colbor-1{
    border-left: 1px solid rgba(180, 180, 180, 0.18);
  }
  img{
    width: 60%;
    margin-left: 20%;
  }
  .fontsize{
    font-size: 3vw;
    font-weight: lighter;
    text-align: center;
  }
</style>
