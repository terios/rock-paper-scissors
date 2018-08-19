import GameType from './'

describe('testing GameTypeComponent', () => {
  test('having Element attribute', () => {
    const gameType = new GameType({})
    expect(gameType.hasOwnProperty('element')).toBeTruthy()
  })
  test('having Element contain our html code', () => {
    const gameType = new GameType({})
    gameType.render()
    expect(gameType.element.innerHTML).toEqual(expect.stringContaining('gameType-container'))
  })
})
