import { HTTP } from '../utils/http.js'

class LikeModel extends HTTP {
  postLike(behavior, artID, category) {
    let url = behavior == 'like' ? 'like' : 'like/cancel'    
    this.request({
      url: url,
      method: 'POST',
      data: {
        art_id: artID,
        type: category
      }
    })
  }

  getCLassicLikeStatus(artID, category, sCallBack) {
    this.request({
      url: 'classic/' + category + '/' + artID + '/favor',
      success: (res) => {
        sCallBack(res)
      }
    })
  }
}

export { LikeModel }