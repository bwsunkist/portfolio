import axios from 'axios'
import sbtype from '../assets/apitypes'
const sbUrl = 'https://scrapbox.io/api/pages/itall'

export const state = () => ({
  sbitemserror: '',
  sbitemsisfetching: false,
  sbitems: []
})
export const mutations = {
  [sbtype.GET_POSTS_REQUEST](state) {
    state.sbitemsisfetching = true
  },
  [sbtype.GET_POSTS_SUCCESS](state, sbitems) {
    state.sbitemsisfetching = false
    state.sbitems = sbitems
  },
  [sbtype.GET_POSTS_FAILURE](state, err) {
    state.sbitemsisfetching = false
    state.sbitems = null
    state.err = err
  }
}
export const actions = {
  async getscrapboxpost({ commit }) {
    commit(sbtype.GET_POSTS_REQUEST)
    try {
      const response = await axios.get(sbUrl, {
        params: {
          skip: 2,
          limit: 4
        }
      })
      for (let index = 0; index < 4; index++) {
        const unixtime = response.data.pages[index].updated
        const dateTime = new Date(unixtime * 1000)
        response.data.pages[
          index
        ].updated = dateTime.toLocaleDateString().replace('/', '-')
      }
      return commit(sbtype.GET_POSTS_SUCCESS, response.data.pages)
    } catch (error) {
      return commit(sbtype.GET_POSTS_FAILURE, error)
    }
  }
}
