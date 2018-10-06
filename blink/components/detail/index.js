// components/detail/index.js
Component({
  /**
   * 组件的属性列表
   */
  properties: {
    bookDetail: Object
  },

  /**
   * 组件的初始数据
   */
  data: {

  },

  attached: ()=> {
    console.log(1)
    // console.log(this.properties.bookDetail)
  },

  /**
   * 组件的方法列表
   */
  methods: {
    close() {
      this.triggerEvent('detailClose', {}, {})
      console.log(this.properties.bookDetail)
      
    }
  }
})
