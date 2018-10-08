// components/like/index.js
Component({
  /**
   * 组件的属性列表
   */
  properties: {
    likeStatus: {
      type: Boolean
    },
    likeCount: {
      type: Number
    }
  },

  /**
   * 组件的初始数据
   */
  data: {
    likeImg: "images/like.png",
    dislikeImg: "images/like@dis.png",    
  },

  /**
   * 组件的方法列表
   */
  methods: {
    toggleLike: function () {
      let likeStatus = this.properties.likeStatus
      let likeCount = this.properties.likeCount

      likeCount = likeStatus? likeCount - 1 : likeCount + 1;
      this.setData({
        likeStatus: !likeStatus,
        likeCount
      })
      let behavior = this.properties.likeStatus ? 'like' : 'cancel'
      this.triggerEvent('isLike', {
        behavior: behavior
      }, {})
    }
  }
})
