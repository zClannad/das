import wepy from 'wepy'

export default class testMixin extends wepy.mixin {
  data = {
    height: '',
    mixin: 'This is mixin data.'
  }
  methods = {
    tap () {
      this.mixin = 'mixin data was changed'
      console.log('mixin method tap')
    }
  }
  // onShow() {
  //   console.log('mixin onShow')
  // }

  onLoad() {
    wepy.getSystemInfo({
      success: (res) => {
        this.height = res.windowHeight
      }
    })
  }
  postMethod(url, data, call) {
    wepy.request({
      url: this.$parent.globalData.apiUrl + url,
      method: 'POST',
      success(res) {
        if (res.data.isSuccess) {
          call(res.data.retEntity)
        }
      }
    })
  }
}
