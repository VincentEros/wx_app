// components/navi/index.js
Component({
  /**
   * 组件的属性列表
   */
  properties: {
    title: String,
    latest: Boolean,
    last: Boolean
  },

  /**
   * 组件的初始数据
   */
  data: {
    left_img: 'images/triangle@left.png',
    left_img_dis: 'images/triangle.dis@left.png',
    right_img: 'images/triangle@right.png',
    right_img_dis: 'images/triangle.dis@right.png'
  },

  /**
   * 组件的方法列表
   */
  methods: {
    nextItem: function () {
      if (!this.properties.latest) {
        this.triggerEvent('changeMovieEvent', {
          behavior: 'next'
        }, {})
      }
    },
    preItem: function () {
      if (!this.properties.last) {
        this.triggerEvent('changeMovieEvent', {
          behavior: 'previous'
        }, {})
      }
    }
  }
})
