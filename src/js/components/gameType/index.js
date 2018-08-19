import stateContainer from '../../hoc/stateContainer.js'
import store from '../../store/store'

import './index.scss'
export default class GameType extends stateContainer {
  constructor (props) {
    super({
      store,
      element: props.element || {}
    })
  }

  render () {
    let self = this
    self.element.innerHTML = `
     <div class="gameType-container">
        <button value="1" class="${
  store.state.game.type == 1 ? 'active' : ''
}">Player VS COM</button>
        <button value="2" class="${
  store.state.game.type == 2 ? 'active' : ''
}">COM VS COM</button>
    </div>
      `

    self.element.querySelectorAll('button').forEach((button) => {
      button.addEventListener('click', evt => {
        const gameType = evt.target.value
        store.dispatch('selectedGame', { gameType })
      })
    })
  }
}
