// components/classic/music/index.js
import { classicBeh } from '../classic-beh.js'

const innerAudioContext = wx.createInnerAudioContext()

Component({
  /**
   * 组件的属性列表
   */
  behaviors: [classicBeh],
  
  properties: {
    index: String,
    audioUrl: String,
    whosPlaying: String,
  },

  /**
   * 组件的初始数据
   */
  data: {
    Play: false,    
    pauseSrc: 'images/player@waitting.png',
    playSrc: 'images/player@playing.png',
  },

  ready: function() {
    // let indexPlay = wx.getStorageSync(`${this.data.index}isPlaying`)
    this.data.whosPlaying == this.data.index && this.setData({
      Play: true
    })  //处理非音源播放页的显示问题
    if(!wx.getStorageSync('audioSrc')) {
      innerAudioContext.autoplay = false
      innerAudioContext.src = this.data.audioUrl
    }
    
  },

  attached: function() {
    this._monitorSwitch()
  },

  /**
   * 组件的方法列表
   */
  methods: {
    playerControlor: function() {

      if (!this.data.Play) {

        innerAudioContext.src = this.data.audioUrl //注入音频地址
        innerAudioContext.play()  //播放

        wx.setStorageSync('audioSrc', this.data.audioUrl) //缓存地址
        this.triggerEvent('isPlaying', {
          whosPlaying: this.data.index
        }, {})  //缓存播放对象的索引码

      } else {
        innerAudioContext.pause()   //暂停
      }     
    },

    // 监听状态
    _recoverStatus: function() {
      if (innerAudioContext.paused) {
        this.setData({
          Play: false
        })
        return
      }
      if (innerAudioContext.src == this.properties.audioUrl) {
        this.setData({
          Play: true
        })
      }
    },

    _monitorSwitch: function() {
      innerAudioContext.onPlay(() => {
        this._recoverStatus()
      })
      innerAudioContext.onPause(() => {
        this._recoverStatus()
      })
      innerAudioContext.onEnded(() => {
        this._recoverStatus()
      })
      innerAudioContext.onStop(() => {
        this._recoverStatus()
      })
    }

  }
})
