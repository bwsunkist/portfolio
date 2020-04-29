import axios from 'axios'
import qmtype from '../assets/apitypes'
const qiitaUrl = 'https://qiita.com/api/v2/users/MasahiroBW/items'

export const state = () => ({
  qitemserror: '',
  qitemsisfetching: false,
  qitems: [],
  qitemsex: [
    {
      day: '2020-3-30',
      title: '1st',
      url: 'https://www.google.com/'
    },
    {
      day: '2020-3-30',
      title: '2nd',
      url: 'https://www.google.com/'
    }
  ]
})
export const mutations = {
  [qmtype.GET_POSTS_REQUEST](state) {
    console.log('start')
    state.qitemsisfetching = true
  },
  [qmtype.GET_POSTS_SUCCESS](state, qitems) {
    state.qitemsisfetching = false
    console.log('success')
    console.log(qitems)
    state.qitems = qitems
  },
  [qmtype.GET_POSTS_REQUEST](state, err) {
    state.qitemsisfetching = false
    console.log('error')
    state.qitems = null
    state.err = err
  },
  updat(state) {
    state.testCount++
  }
}
export const actions = {
  change({ commit }) {
    const newel = {
      day: '2020-3-31',
      title: 'new',
      url: 'https://www.google.com/'
    }
    commit('updat')
    state.qitemsex = newel
  },
  async getqiitapost({ commit }) {
    commit(qmtype.GET_POSTS_REQUEST)
    try {
      const response = await axios.get(qiitaUrl, {
        params: {
          page: 1,
          per_page: 4
        }
      })
      return commit(qmtype.GET_POSTS_SUCCESS, response.data)
    } catch (error) {
      return commit(qmtype.GET_POSTS_FAILURE, error)
    }
  }
}
