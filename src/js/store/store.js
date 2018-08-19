import actions from './actions.js'
import reducers from './reducers.js'
import initialState from './initialState.js'
import Store from './configureStore.js'

export default new Store({
  actions,
  reducers,
  state: initialState
})
