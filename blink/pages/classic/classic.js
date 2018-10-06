// pages/classic/classic.js
import { ClassicModel } from '../../models/classic.js'
import { LikeModel } from '../../models/like.js'

let classicModel = new ClassicModel()
let likeModel = new LikeModel()

Page({

  /**
   * 页面的初始数据
   */
  data: {
    classic: null,
    latest: true,
    latest_index: 0,
    whosPlaying: 0
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    classicModel.getLatest((res) => {
      this.setData({
        ...res,
        latest_index: res.index,
      })
    })
  },

  onLike: function(e) {
    let behavior = e.detail.behavior
    likeModel.postLike(behavior, this.data.id, this.data.type)
  },

  changeInfo: function(e) {
    let behavior = e.detail.behavior
    let index = this.data.index
    classicModel.changeInfo(index, behavior, (res) => {
      console.log(res)
      this.setData({
        ...res
      })
    })
    likeModel.getCLassicLikeStatus(this.data.id, this.data.type, (res) => {
      // console.log(Boolean(res.like_status))
      this.setData({
        like_status: Boolean(res.like_status),
        fav_nums: res.fav_nums
      })
    })    
  },

  isPlaying: function(e) {
    let index = e.detail.whosPlaying
    this.setData({
      whosPlaying: index
    })
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