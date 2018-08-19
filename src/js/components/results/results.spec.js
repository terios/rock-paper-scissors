import Results from './'
import store from '../../store/store'

const element = {
  querySelectorAll: () => { return [] }
}
describe('testing Player Component', () => {
  test('having Element attribute', () => {
    const results = new Results({})
    expect(results.hasOwnProperty('element')).toBeTruthy()
  })
  test('having Element contain our html code', () => {
    const results = new Results({element})
    results.render()
    expect(results.element.innerHTML).toEqual(expect.stringContaining('<p class="waiting">select something</p>'))
  })
})
