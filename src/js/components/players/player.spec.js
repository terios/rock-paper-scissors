import Player from './'

const element = {
  querySelectorAll: jest.fn().mockImplementation(() => {
    return []
  })
}

describe('testing Player Component', () => {
  test('having Element attribute', () => {
    const player = new Player({})
    expect(player.hasOwnProperty('element')).toBeTruthy()
  })
  test('having Element contain our html code', () => {
    const player = new Player({element})
    player.render()
    expect(player.element.innerHTML).toEqual(expect.stringContaining('player'))
    expect(element.querySelectorAll).toHaveBeenCalledTimes(1);
  })
})
