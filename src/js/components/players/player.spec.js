import Player from './'

describe('testing Player Component', () => {
  test('having Element attribute', () => {
    const player = new Player({})
    expect(player.hasOwnProperty('element')).toBeTruthy()
  })
  test('having Element contain our html code', () => {
    const player = new Player({})
    player.render()
    expect(player.element.innerHTML).toEqual(expect.stringContaining('player'))
  })
})
