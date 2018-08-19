/**
 * pubsub library
 */
export default class PubSub {
  constructor () {
    this.events = {}
  }

  /**
   * if event does not alreadt exists, create a new one then
   * pass the callback function to it
   * @param {string} event
   * @param {function} callback
   * @returns {number} A count of callbacks for this event
   */
  subscribe (event, callback) {
    let self = this
    if (!self.events.hasOwnProperty(event)) {
      self.events[event] = []
    }
    return self.events[event].push(callback)
  }

  /**
   * if callback for an event exists, loop over them with the given data
   * @param {string} event
   * @param {object} [data={}]
   * @returns {array} The callbacks for this event
   */
  publish (event, data = {}) {
    let self = this
    if (!self.events.hasOwnProperty(event)) {
      return []
    }
    return self.events[event].map(callback => callback(data))
  }
}
