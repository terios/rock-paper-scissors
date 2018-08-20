import GameType from './'

const element = {
  querySelectorAll: jest.fn().mockImplementation(() => {
    return []
  })
}

describe('testing GameTypeComponent', () => {
  test('having Element attribute', () => {
    const gameType = new GameType({element})
    expect(gameType.hasOwnProperty('element')).toBeTruthy()
  })
  test('having Element contain our html code', () => {
    const gameType = new GameType({element})
    gameType.render()
    expect(gameType.element.innerHTML).toEqual(expect.stringContaining('gameType-container'))
    expect(element.querySelectorAll).toHaveBeenCalledTimes(1);
  })
})
