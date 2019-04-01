<template>
  <van-swipe :autoplay="4000" class="boxshow">
    <van-swipe-item v-for="(image, index) in images" :key="index">
      <img v-lazy="`/api/image/${image}`" />
    </van-swipe-item>
  </van-swipe>
</template>

<script>
export default {
  name: 'Swipe',
  data () {
    return {
      images: [
        'ACE/ace05.jpg',
        'chuanqi/chuanqi04.jpg',
        'messi/m06.jpg',
        'cike/cike01.jpg'
      ]
    }
  }
}
</script>

<style scoped>
  img{
    width: 65%;
    margin-left: 17%;
  }
  .boxshow{
    border-bottom: 1px solid rgba(180, 180, 180, 0.18);
  }
</style>
