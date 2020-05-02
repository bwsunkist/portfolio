import axios from 'axios'
import gtype from '../assets/apitypes'
const gitapiurl =
  'https://api.github.com/search/repositories?q=user:bwsunkist%20topic:forportforio'

export const state = () => ({
  gitemserror: '',
  gitemsisfetching: false,
  gitems: []
})
export const mutations = {
  [gtype.GET_POSTS_REQUEST](state) {
    state.gitemsisfetching = true
  },
  [gtype.GET_POSTS_SUCCESS](state, gitems) {
    state.gitemsisfetching = false
    state.gitems = gitems
  },
  [gtype.GET_POSTS_REQUEST](state, err) {
    state.gitemsisfetching = false
    state.gitems = null
    state.err = err
  }
}
export const actions = {
  async getgitpost({ commit }) {
    commit(gtype.GET_POSTS_REQUEST)
    try {
      const response = await axios.get(gitapiurl)
      let resdata = response.data.items
      resdata = resdata.slice(0, 4)
      const len = resdata.length
      for (let index = 0; index < len; index++) {
        const date = resdata[index].updated_at
        resdata[index].updated_at = date.substr(0, 10)
      }
      return commit(gtype.GET_POSTS_SUCCESS, resdata)
    } catch (error) {
      return commit(gtype.GET_POSTS_FAILURE, error)
    }
  }
}
