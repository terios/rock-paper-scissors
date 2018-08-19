import Choices from './'

describe('testing Choices Component', () => {
  test('having Element attribute', () => {
    const choices = new Choices({})
    expect(choices.hasOwnProperty('element')).toBeTruthy()
  })
  test('having Element contain our html code', () => {
    const choices = new Choices({})
    choices.render()
    expect(choices.element.innerHTML).toEqual(expect.stringContaining('class="choice"'))
  })

  test('having Element contain html code for one single choice', () => {
    const choices = new Choices({
      selected: {
        name: 'rock',
        img: 'images/actions/rock.png',
        strength: {
          win: ['scissors'],
          lose: ['paper']
        }
      }
    })
    choices.render()
    expect(choices.element.innerHTML).toEqual(expect.stringContaining('class="choice single"'))
  })
})
