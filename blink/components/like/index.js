// components/like/index.js
Component({
  /**
   * 组件的属性列表
   */
  properties: {
    onLike: {
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
      let onLike = this.properties.onLike
      let likeCount = this.properties.likeCount

      likeCount = onLike? likeCount - 1 : likeCount + 1;
      this.setData({
        onLike: !onLike,
        likeCount
      })
      let behavior = this.properties.onLike ? 'like' : 'cancel'
      this.triggerEvent('isLike', {
        behavior: behavior
      }, {})
    }
  }
})
