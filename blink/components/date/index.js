// components/date/index.js

const Month = {
  0: '一月',
  1: '二月',
  2: '三月',
  3: '四月',
  4: '五月',
  5: '六月',
  6: '七月',
  7: '八月',
  8: '九月',
  9: '十月',
  10: '十一月',
  11: '十二月',
}

Component({
  /**
   * 组件的属性列表
   */
  properties: {
    index: {
      type: String,
      observer: function(newVal, oldVal, changedPath) {
        let index = newVal
        index = index.length === 1 ? '0' + index : index
        this.setData({
          _index: index
        })
      }
    }
  },

  /**
   * 组件的初始数据
   */
  data: {
    year: '',
    month: '',
    _index: ''
  },

  attached: function() {
    let date = new Date()
    let year = date.getFullYear()
    let month = date.getMonth()
    this.setData({
      year: year,
      month: Month[month]
    })
  },

  /**
   * 组件的方法列表
   */
  methods: {

  }
})
