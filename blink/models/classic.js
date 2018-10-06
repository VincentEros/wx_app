import { HTTP } from '../utils/http.js'

class ClassicModel extends HTTP {
  getLatest(sCallback) {
    this.request({
      url: 'classic/latest',
      success: (res) => {
        let key = this._createStorageKey(res.index)
        wx.setStorageSync(key, res)
        sCallback(res)
      }
    })
  }

  changeInfo(index, behavior_name, sCallback) {
    let findIndex = behavior_name == 'previous' ? index - 1 : index + 1
    let key = this._createStorageKey(findIndex)

    let classic = wx.getStorageSync(key)
    if (!classic) {
      this.request({
        url: `classic/${index}/${behavior_name}`,
        success: (res) => {
          wx.setStorageSync(this._createStorageKey(res.index), res)

          sCallback(res)
        }
      })
    } else {
      sCallback(classic)
    }
  }

  _createStorageKey(index) {
    let key = 'classic-' + String(index)
    return key
  }
  
}
export { ClassicModel }