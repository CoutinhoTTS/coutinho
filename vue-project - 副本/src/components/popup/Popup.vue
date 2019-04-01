<template>
  <van-popup v-model="show" :position="top" :overlay="fshow" @click-overlay="clickoverlay" >
    <!--确定、取消-->
    <van-row type="flex" justify="space-between">
      <van-col span="8"><van-button type="default" size="small" @click="clickoverlay">取消</van-button></van-col>
      <van-col span="8"><span v-show="spanshow" class="tishi">请选择正确的品牌样式</span></van-col>
      <van-col span="8"><van-button type="info" size="small" @click="StyleYes">确定</van-button></van-col>
    </van-row>
    <div class="productclass">
      <!--选择框-->
      <van-collapse v-model="activeName" accordion @change="changecollapse">
        <!--阿迪达斯-->
        <van-collapse-item title="Adidas" name="1" >
          <van-radio-group v-model="radio">
          <van-cell-group>
          <van-cell title="ACE" clickable @click="radio = '1'">
          <van-radio name="1" />
          </van-cell>
          <van-cell title="猎鹰" clickable @click="radio = '2'">
          <van-radio name="2" />
          </van-cell>
          <van-cell title="Messi" clickable @click="radio = '3'">
          <van-radio name="3" />
          </van-cell>
          </van-cell-group>
          </van-radio-group>
        </van-collapse-item>
        <!--耐克-->
        <van-collapse-item title="Nike" name="2">
          <van-radio-group v-model="radio01">
            <van-cell-group>
              <van-cell title="刺客" clickable @click="radio01 = '4'">
                <van-radio name="4" />
              </van-cell>
              <van-cell title="毒蜂" clickable @click="radio01 = '5'">
                <van-radio name="5" />
              </van-cell>
              <van-cell title="传奇" clickable @click="radio01 = '6'">
                <van-radio name="6" />
              </van-cell>
              <van-cell title="毒液" clickable @click="radio01 = '7'">
                <van-radio name="7" />
              </van-cell>
            </van-cell-group>
          </van-radio-group>
        </van-collapse-item>
      </van-collapse>
    </div>
  </van-popup>
</template>

<script>
export default {
  name: 'Popup',
  data () {
    return {
      show: false,
      fshow: true,
      top: 'bottom',
      list: [],
      activeName: '0',
      radio: 0,
      radio01: 0,
      spanshow: false
    }
  },
  methods: {
    clickoverlay: function () {
      this.$store.dispatch('hideFooter')
      this.activeName = '0'
      this.radio = 0
      this.radio01 = 0
    },
    changecollapse: function (activeNames) {
      this.activeName = activeNames
      if (this.radio !== 0) {
        this.radio01 = 0
      }
      if (this.radio01 !== 0) {
        this.radio = 0
      }
    },
    //  样式确定
    StyleYes: function () {
      if (this.radio !== 0 || this.radio01 !== 0) {
        if (this.radio !== 0) {
          this.$router.push({
            path: `/productlist/${this.radio}`
          })
          this.clickoverlay()
        }
        if (this.radio01 !== 0) {
          this.$router.push({
            path: `/productlist/${this.radio01}`
          })
          this.clickoverlay()
        }
      } else {
        this.spanshow = true
        setTimeout(() => {
          this.spanshow = false
        }, 500)
      }
    }
  },
  computed: {
    getUserIcons () {
      return this.$store.state.show
    }
  },
  watch: {
    getUserIcons (val) {
      this.show = val
    }
  }
}
</script>

<style scoped>
  .productclass{
    width: 100vw;
    height: 30vh;
    background-color: #fff;
  }
  .van-col{
    text-align: center;
  }
  .tishi{
    font-size: 3vw;
    color: red;
  }

</style>
