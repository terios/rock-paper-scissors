import StateContainer from './stateContainer'

jest.mock('../store/store.js')

describe('testing StateContainer component', () => {
  beforeEach(() => {

  })
  test('having render method', () => {
    const stateContainer = new StateContainer({})
    expect(stateContainer.hasOwnProperty('render')).toBeTruthy()
  })

  test('having Element property', () => {
    const dummyElement = { element: 'dummyElement' }
    const stateContainer = new StateContainer(dummyElement)
    expect(stateContainer.hasOwnProperty('element')).toBeTruthy()
    expect(stateContainer.element).toEqual(dummyElement.element)
  })
})
