import request from 'src/utils/request'

export default {
  getList () {
    return request.get('http://jsonplaceholder.typicode.com/users')
  }
}
