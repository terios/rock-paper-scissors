import ConfigureStore from '../configureStore'
import PubSub from '../../pubsub'

console.warn = jest.fn()
console.error = jest.fn()
const pushNewPlayer = jest.fn()

const params = {
  actions: {
    pushNewPlayer: pushNewPlayer
  },
  reducers: {
    pushNewPlayer: (state, payload) => {
      return {
        ...state,
        players: payload.name
      }
    }
  },
  state: { players: '' }
}

beforeEach(() => {
  console.warn.mockClear()
})

describe('testing ConfigureStore', () => {
  test('test store is correctly created with given props', () => {
    const store = new ConfigureStore(params)
    // checking existance
    expect(store.hasOwnProperty('actions')).toBeTruthy()
    expect(store.hasOwnProperty('reducers')).toBeTruthy()
    expect(store.hasOwnProperty('state')).toBeTruthy()
    expect(store.hasOwnProperty('events')).toBeTruthy()

    // check is events is an instance of PubSub
    expect(store['events'] instanceof PubSub).toBeTruthy()

    expect(store['state']).toEqual({ players: '' })
    expect(store['reducers'].hasOwnProperty('pushNewPlayer')).toBeTruthy()
    expect(store['actions'].hasOwnProperty('pushNewPlayer')).toBeTruthy()
  })

  test('log warning when non autorized state change occure', () => {
    const store = new ConfigureStore(params)
    store.state = Object.assign(store.state, {
      ...store.state,
      players: 'jake'
    })
    expect(console.warn).toHaveBeenCalledTimes(1)
  })

  test('dispatch should call an action', () => {
    const store = new ConfigureStore(params)
    const hasSucceded = store.dispatch('pushNewPlayer', { name: 'jake' })
    expect(pushNewPlayer).toHaveBeenCalledTimes(1)
    expect(hasSucceded).toBeTruthy()
  })

  test('dispatch witch action that does not exist', () => {
    const store = new ConfigureStore(params)
    const hasSucceded = store.dispatch('tototo', { name: 'jake' })
    expect(console.error).toHaveBeenCalledTimes(1)
    expect(hasSucceded).toBeFalsy()
  })

  test('commit should update state without any warning', () => {
    const store = new ConfigureStore(params)
    expect(store['status']).toEqual('resting')
    const hasSucceded = store.commit('pushNewPlayer', { name: 'jake' })
    expect(store['state'].players).toEqual('jake')
    expect(console.warn).toHaveBeenCalledTimes(0)
    expect(hasSucceded).toBeTruthy()
  })

  test('commit witch reducer that does not exist', () => {
    const store = new ConfigureStore(params)
    const hasSucceded = store.commit('tototo', { name: 'jake' })
    expect(console.error).toHaveBeenCalledTimes(1)
    expect(hasSucceded).toBeFalsy()
  })
})
