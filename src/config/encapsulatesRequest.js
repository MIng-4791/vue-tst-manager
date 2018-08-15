import axios from 'axios'
import store from '../store/index'

const header = {
  'Content-Type': 'application/json;charset=utf-8'
};

export default {
  post(url, data) {
    return new Promise((resolve, reject) => {
      axios({
        method: 'POST',
        url: store.state.apiBase + url,
        headers: header,
        data: JSON.stringify(data)
      }).then(res => {
        resolve(res.data)
      }).catch(err => {
        reject(err)
      })
    })
  },
  get(url) {
    return new Promise((resolve, reject) => {
      axios({
        method: 'get',
        url: store.state.apiBase + url,
        headers: header
      }).then((res) => {
        resolve(res.data)
      }).catch(err => {
        reject(err)
      })
    })
  }
}
