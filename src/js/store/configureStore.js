import PubSub from '../pubsub'

export default class Store {
  constructor (params) {
    let self = this
    self.actions = params.actions || {}
    self.reducers = params.reducers || {}
    self.state = {}
    self.status = 'resting'

    // add PubSub module as an `events` element
    self.events = new PubSub()

    // have our state as a proxy to controle how data is set.
    self.state = new Proxy(params.state || {}, {
      set: function (state, key, value) {
        state[key] = value
        // notify other components that may be interessted in this info
        self.events.publish('stateChange', self.state)
        // block any state change thaat does not use reducer
        if (self.status !== 'reducer') {
          console.warn(`please use a reducer to update the state`)
        }
        // Reset the status ready for the next operation
        self.status = 'resting'
        return true
      }
    })
  }

  /**
   * A dispatcher for actions that looks in the actions
   * collection and runs the action if it can find it
   *
   * @param {string} actionKey
   * @param {mixed} payload
   * @returns {boolean}
   */
  dispatch (actionKey, payload) {
    let self = this
    // Run a quick check to see if the action actually exists
    // before we try to run it
    if (typeof self.actions[actionKey] !== 'function') {
      console.error(`Action "${actionKey} not available.`)
      return false
    }
    // Create a console group which will contain the logs from our Proxy etc
    console.groupCollapsed(`performing ACTION: ${actionKey}`)
    // call the action and pass it the Store context and whatever payload was passed
    self.actions[actionKey](self, payload)
    // Close our console group to keep things nice and neat
    console.groupEnd()
    return true
  }

  /**
   * Look for a reducer and modify the state object
   * if that reducer exists by calling it
   *
   * @param {string} reducerKey
   * @param {mixed} payload
   * @returns {boolean}
   */
  commit (reducerKey, payload) {
    let self = this
    // check if the reducer exists
    if (typeof self.reducers[reducerKey] !== 'function') {
      console.error(`reducer "${reducerKey}" doesn't exist`)
      return false
    }
    self.status = 'reducer'
    // get the new state after reducer did it magic
    let newState = self.reducers[reducerKey](self.state, payload)
    // update state only if we have a difference // could also use deep equal
    if (JSON.stringify(newState) !== JSON.stringify(self.state)) {
      // merge the new state with what we already had
      self.state = Object.assign(self.state, newState) // TODO: check with spread later
    }
    return true
  }
}
