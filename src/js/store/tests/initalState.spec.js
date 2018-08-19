import InitialState from '../initialState'

describe('testing InitialState', () => {
  test('test InitialState existance', () => {
    expect(InitialState.hasOwnProperty('game')).toBeTruthy()
    expect(InitialState.hasOwnProperty('players')).toBeTruthy()
    expect(InitialState.hasOwnProperty('ready')).toBeTruthy()
    expect(InitialState.hasOwnProperty('winner')).toBeTruthy()
  })
})
