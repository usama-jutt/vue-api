import http from '@/utils/http-common'

export default {
  getArticles() {
    return http.get('/api/v1/articles/')
      .then(response => {
        return response.data
      })
  },
  
}