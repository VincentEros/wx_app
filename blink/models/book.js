import { HTTP } from '../utils/http-p.js'

class BookModel extends HTTP {
  getTrendingList() {
    return this.request({
      url: 'book/hot_list'
    })
  }
  
  getMyBookCount() {
    return this.request({
      url: 'book/favor/count'
    })
  }

  getBookDetail(id) {
    return this.request({
      url: `book/${id}/detail`
    })
  }

  getBookComment(id) {
    return this.request({
      url: `book/${id}/short_comment`
    })
  }

  getLikeStatus(id) {
    return this.request({
      url: `book/${id}/favor`
    })
  }
}

export { BookModel }