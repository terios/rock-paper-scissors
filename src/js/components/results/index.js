import stateContainer from '../../hoc/stateContainer.js'
import store from '../../store/store'

import './index.scss'
export default class Reasult extends stateContainer {
  constructor (props) {
    super({
      store,
      element: props.element || {}
    })
  }

  render () {
    let self = this
    let content = ''
    const gameType = store.state.game.type

    if (!store.state.winner) {
      if (gameType == 1) {
        content = `
        <p class="waiting">select something</p>
      `
      } else {
        content = `
        <button class="start"> Go! </button>
        <p class="waiting">Let them fight</p>
      `
      }
    }
    const winner = store.state.winner
    if (winner) {
      if (winner.choice) {
        content = `
        <div class="choice-image">
            <img src="${winner.choice.img}">
        </div>
        <span>${winner.type}</span>
        <div class="play-again"></div>
      `
      } else {
        content = `
        <div class="play-again"></div>
        <div class="choice-image draw"></div>
        <span>DRAW</span>
      `
      }
    }

    self.element.innerHTML = `
      <div class="result-container">
        ${content}
      </div>
      `

    self.element.querySelectorAll('.play-again').forEach((choice) => {
      choice.addEventListener('click', () => {
        // start a new game
        store.dispatch('restartGame')
      })
    })

    self.element.querySelectorAll('.start').forEach((choice) => {
      choice.addEventListener('click', () => {
        // dispatch event for both coms
        store.dispatch('selectedChoice', { player: 'the com' })
        store.dispatch('selectedChoice', { player: 'com' })
      })
    })
  }
}
