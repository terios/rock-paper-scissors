import Reducers from '../reducers'
import config from '../../config'
import InitialState from '../initialState'
import initialState from '../initialState'

const choices = config.choices
describe('testing Reducers', () => {
  test('test reducers existance', () => {
    expect(Reducers.hasOwnProperty('selectedGame')).toBeTruthy()
    expect(Reducers.hasOwnProperty('selectedChoice')).toBeTruthy()
    expect(Reducers.hasOwnProperty('restartGame')).toBeTruthy()
  })

  test('test reducer selectedGame exucution com vs com and player vs com', () => {
    // checking existance
    let payload = { gameType: 2 }
    let newState = Reducers.selectedGame(InitialState, payload)
    expect(newState.game.type).toEqual(2)
    expect(newState.players[0].type).toEqual('the com')

    payload = { gameType: 1 }
    newState = Reducers.selectedGame(newState, payload)
    expect(newState.game.type).toEqual(1)
    expect(newState.players[0].type).toEqual('human')
  })

  test('test reducer selectedChoice exucution', () => {
    // checking existance
    const payload = {
      player: 'human',
      choice: choices[0].name
    }
    let newState = Reducers.selectedChoice(InitialState, payload)
    expect(newState.players[0].choice.name).toEqual(payload.choice)
    expect(newState.ready).toEqual(1)

    const payload2 = {
      player: 'com',
      choice: choices[1].name
    }
    newState = Reducers.selectedChoice(newState, payload2)
    expect(newState.players[1].choice.name).toEqual(payload2.choice)
    expect(newState.winner.type).toEqual('com')
    expect(newState.ready).toEqual(0)
  })

  test('test reducer restartGame exucution', () => {
    const payload = {
      player: 'human',
      choice: choices[0].name
    }
    const newState = Reducers.selectedChoice(InitialState, payload)

    const freshState = Reducers.restartGame(newState)
    expect(freshState).toEqual(initialState)
  })
})
