import axios from 'axios'
import qmtype from '../assets/apitypes'
const qiitaUrl = 'https://qiita.com/api/v2/users/MasahiroBW/items'

export const state = () => ({
  qitemserror: '',
  qitemsisfetching: false,
  qitems: []
})
export const mutations = {
  [qmtype.GET_POSTS_REQUEST](state) {
    state.qitemsisfetching = true
  },
  [qmtype.GET_POSTS_SUCCESS](state, qitems) {
    state.qitemsisfetching = false
    state.qitems = qitems
  },
  [qmtype.GET_POSTS_FAILURE](state, err) {
    state.qitemsisfetching = false
    state.qitems = null
    state.err = err
  }
}
export const actions = {
  async getqiitapost({ commit }) {
    commit(qmtype.GET_POSTS_REQUEST)
    try {
      const response = await axios.get(qiitaUrl, {
        params: {
          page: 1,
          per_page: 4
        }
      })
      for (let index = 0; index < 4; index++) {
        const date = response.data[index].created_at
        response.data[index].created_at = date.substr(0, 10)
      }
      return commit(qmtype.GET_POSTS_SUCCESS, response.data)
    } catch (error) {
      return commit(qmtype.GET_POSTS_FAILURE, error)
    }
  }
}
