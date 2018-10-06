// components/book/index.js
Component({
  /**
   * 组件的属性列表
   */
  properties: {
    bookItem: Object
  },
  
  /**
   * 组件的初始数据
   */
  data: {

  },

  ready: function() {
    // console.log(this.data.bookItem)
  },

  /**
   * 组件的方法列表
   */
  methods: {
    onTap() {
      const detailID = this.data.bookItem.id
      wx.navigateTo({
        url: `/pages/book-detail/book-detail?bid=${detailID}`,
      })
    }
  }
})
