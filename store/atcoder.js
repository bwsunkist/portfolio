import axios from 'axios'
import actype from '../assets/apitypes'
const acurl4api =
  'https://kenkoooo.com/atcoder/atcoder-api/results?user=MasahiroBW'
const acurl4link = 'https://atcoder.jp/contests/'

export const state = () => ({
  acitemserror: '',
  acitemsisfetching: false,
  acitems: []
})
export const mutations = {
  [actype.GET_POSTS_REQUEST](state) {
    state.acitemsisfetching = true
  },
  [actype.GET_POSTS_SUCCESS](state, acitems) {
    state.acitemsisfetching = false
    state.acitems = acitems
  },
  [actype.GET_POSTS_REQUEST](state, err) {
    state.acitemsisfetching = false
    state.acitems = null
    state.err = err
  }
}
function compare(a, b) {
  let r = 0
  if (a.epoch_second < b.epoch_second) {
    r = 1
  } else if (a.epoch_second > b.epoch_second) {
    r = -1
  }
  return r
}
function toDoubleDigits(num) {
  num += ''
  if (num.length === 1) {
    num = '0' + num
  }
  return num
}
export const actions = {
  async getatcoderpost({ commit }) {
    commit(actype.GET_POSTS_REQUEST)
    try {
      const response = await axios.get(acurl4api)
      let resdata = response.data
      resdata.sort(compare)
      resdata = resdata.slice(0, 8)
      for (let index = 0; index < 8; index++) {
        const unixtime = resdata[index].epoch_second
        const dateTime = new Date(unixtime * 1000)
        const arr = []
        arr[0] = dateTime.getFullYear()
        arr[1] = toDoubleDigits(dateTime.getMonth() + 1)
        arr[2] = toDoubleDigits(dateTime.getDate())
        resdata[index].epoch_second = arr.join('-')
        resdata[index].id =
          acurl4link +
          resdata[index].contest_id +
          '/submissions/' +
          resdata[index].id
      }
      return commit(actype.GET_POSTS_SUCCESS, resdata)
    } catch (error) {
      return commit(actype.GET_POSTS_FAILURE, error)
    }
  }
}
