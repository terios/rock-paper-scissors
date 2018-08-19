import stateContainer from '../../hoc/stateContainer.js'
import store from '../../store/store'

import Choices from '../choices'

import './index.scss'
export default class Players extends stateContainer {
  constructor (props) {
    super({
      store,
      element: props.element || {}
    })
  }

  render () {
    let self = this
    // loop over players available
    // and inject choices component for each one of them
    self.element.innerHTML = `
     ${store.state.players
    .map((item, key) => {
      // choices is a dumb component, no logic inside is needed
      const selected = item.choice ? item.choice : false
      const choices = new Choices({ selected })
      choices.render()
      return `<div class="player container">
            <div class="score">
              ${item.type} :<span> ${item.score}</span>
            </div>
            <div class="avatar">
              <img src=${item.avatar}>
            </div>
          <div class="${`player${key}-choices`}">
            ${choices.element.innerHTML}
          </div>
          </div>`
    })
    .join('')}
`
    const gameType = store.state.game.type
    if (gameType == 1) {
      self.element.querySelectorAll('.choice').forEach((choice) => {
        choice.addEventListener('click', evt => {
          const choice = evt.target.parentElement.getAttribute('value')
          // dispatch event with human player choice
          store.dispatch('selectedChoice', { choice, player: 'human' })
          // dispatch event for com to generate a choice
          store.dispatch('selectedChoice', { player: 'com' })
        })
      })
    }
  }
}
