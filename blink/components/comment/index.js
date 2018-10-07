// components/comment/index.js
Component({
  /**
   * 组件的属性列表
   */
  properties: {
    likeCount: Number,
    like_status: Boolean
  },

  /**
   * 组件的初始数据
   */
  data: {

  },

  /**
   * 组件的方法列表
   */
  methods: {
    toComment() {
      console.log('写下评论')
    }
  }
})
