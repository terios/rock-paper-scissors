import Store from '../store/configureStore.js'

// represents a higher order, responsible of communicating with our state
export default class stateContainer {
  constructor (props = {}) {
    let self = this
    // use render method of child
    this.render = this.render || function () {}
    if (props.store instanceof Store) {
      // re-render in case state changes
      props.store.events.subscribe('stateChange', () => self.render())
    }
    // set our the element
    if (props.hasOwnProperty('element')) {
      this.element = props.element
    }
  }
}
