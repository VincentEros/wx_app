// components/comment/index.js
import { LikeModel } from '../../models/like.js'

const likeModel = new LikeModel()

Component({
  /**
   * 组件的属性列表
   */
  properties: {
    bookID: Number,
    likeCount: Number,
    likeStatus: Boolean
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
    },
    onLike(e) {
      console.log(this.properties.likeStatus)
      let behavior = e.detail.behavior
      likeModel.postLike(behavior, this.properties.bookID, 400)
    },
  }
})
