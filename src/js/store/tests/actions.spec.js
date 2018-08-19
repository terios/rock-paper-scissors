import Actions from '../actions'

const context = {
  commit: jest.fn()
}

describe('testing Actions', () => {
  test('test actions are existing', () => {
    // checking existance
    expect(Actions.hasOwnProperty('selectedGame')).toBeTruthy()
    expect(Actions.hasOwnProperty('selectedChoice')).toBeTruthy()
    expect(Actions.hasOwnProperty('restartGame')).toBeTruthy()
  })

  test('test action selectedGame exucution', () => {
    // checking existance
    const data = { test: 'test' }
    Actions.selectedGame(context, data)
    expect(context.commit).toHaveBeenCalledTimes(1)
    expect(context.commit).toHaveBeenCalledWith('selectedGame', data)
  })

  test('test action selectedChoice exucution', () => {
    // checking existance
    const data = { test: 'test' }
    Actions.selectedChoice(context, data)
    expect(context.commit).toHaveBeenCalledTimes(1)
    expect(context.commit).toHaveBeenCalledWith('selectedChoice', data)
  })

  test('test action restartGame exucution', () => {
    // checking existance

    Actions.restartGame(context)
    expect(context.commit).toHaveBeenCalledTimes(1)
    expect(context.commit).toHaveBeenCalledWith('restartGame')
  })
})
