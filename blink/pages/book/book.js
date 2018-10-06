// pages/book/book.js
import { BookModel } from '../../models/book.js'

const bookModel = new BookModel()

Page({

  /**
   * 页面的初始数据
   */
  data: {
    trendingList: [],
    detailManager: false,
    bookDetail: {}
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    const TrendingList = bookModel.getTrendingList()
    TrendingList.then(
      res => this.setData({
        trendingList: res
      })
    )


    // const promise = new Promise((resolve, reject) => {
    //   wx.getSystemInfo({
    //     success: res =>  resolve(res),
    //     fail: res => reject(error)
    //   })
    // })

    // promise.then(
    //   res => console.log(res), 
    //   error => console.log(error)
    // )

  },

  /**
   * 生命周期函数--监听页面初次渲染完成
   */
  onReady: function () {

  },

  /**
   * 生命周期函数--监听页面显示
   */
  onShow: function () {

  },

  /**
   * 生命周期函数--监听页面隐藏
   */
  onHide: function () {

  },

  /**
   * 生命周期函数--监听页面卸载
   */
  onUnload: function () {

  },

  /**
   * 页面相关事件处理函数--监听用户下拉动作
   */
  onPullDownRefresh: function () {

  },

  /**
   * 页面上拉触底事件的处理函数
   */
  onReachBottom: function () {

  },

  /**
   * 用户点击右上角分享
   */
  onShareAppMessage: function () {

  }
})