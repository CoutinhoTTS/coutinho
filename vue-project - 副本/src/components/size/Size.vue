<template>
  <div>
    <van-popup v-model="Show" position="bottom" @click-overlay="cancel">
      <!--尺码-->
      <span>尺码：</span>
     <div class="sizech">
       <van-radio-group v-model="radio">
         <van-cell-group>
           <van-cell v-for="(item , index) in sizeT" :title="item.size" clickable @click="Ysize(index+1 , item.size)" :key="index">
             <van-radio :name="index+1" />
           </van-cell>
         </van-cell-group>
       </van-radio-group>
     </div>
    </van-popup>
  </div>
</template>

<script>
export default {
  name: 'Size',
  data () {
    return {
      Show: this.$store.state.Sshow,
      False: false,
      radio: 0,
      bottom: 'bottom',
      //  选中尺码
      size: '',
      sizename: '',
      //  尺码表
      sizeT: [{id: '1', size: '39'}, {id: '2', size: '40'}, {id: '3', size: '41'}, {id: '4', size: '42'}, {id: '5', size: '43'}]
    }
  },
  methods: {
    cancel: function () {
      this.$store.dispatch('hideSize')
      this.Show = this.$store.state.Sshow
      this.radio = 0
    },
    Ysize: function (Event, size) {
      this.radio = Event
      this.size = this.radio
      this.sizename = size
      this.$emit('sizech', this.size, this.sizename)
      setTimeout(() => {
        this.cancel()
      }, 500)
    }
  },
  computed: {
    getUserIcons () {
      return this.$store.state.Sshow
    }
  },
  watch: {
    getUserIcons (val) {
      this.Show = val
    }
  }
}
</script>

<style scoped>
.sizech{
  max-height: 20vh;
}
</style>
