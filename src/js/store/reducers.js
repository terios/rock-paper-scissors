import config from '../config'
import {getChoiceObj, randomChoice, getWinner} from '../lib/utils'

export default {
  selectedGame (state, payload) {
    // set the game type
    // restet all scores and choices made
    // update player type
    return {
      ...state,
      game: {type: payload.gameType},
      players: state.players.map((player, index) => {
        const newPlayer = payload.gameType == 1 ? 'human' : 'the com'
        return {
          ...player,
          type: index == 0 ? newPlayer : 'com',
          score: 0,
          choice: null
        }
      })
    }
  },
  selectedChoice (state, payload) {
    let ready = state.ready + 1 || 1
    // set the choice for the human player
    let players = state.players.map(item => {
      if (item.type === payload.player) {
        item.choice = payload.choice
          ? getChoiceObj(config.choices, payload.choice)
          : randomChoice(config.choices)
      }
      return item
    })

    // TODO: this part can be moved to a middlware that checks if both players have made their choice, 
    // and dispatch an action for getting the winner 
    // if all player have finished, check who won
    let winner = false
    if (ready == state.players.length) {
      winner = {}
      const winnerIndex = getWinner(state.players)
      if (winnerIndex >= 0) {
        winner = state.players[winnerIndex]
        // update score of the winner
        players = Object.assign([...state.players], {
          [winnerIndex]: {
            ...state.players[winnerIndex],
            score: state.players[winnerIndex].score + 1
          }
        })
      }
      ready = 0
    }
    return {...state, players, ready, winner}
  },
  restartGame (state) {
    return {
      ...state, ready: 0, winner: false, players: state.players.map(player => {
        return {
          ...player,
          choice: null
        }
      })
    }
  }
}
