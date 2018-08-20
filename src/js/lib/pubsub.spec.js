import PubSub from './pubsub'

describe('testing PubSub', () => {
  test('having event object', () => {
    const pubsubInstance = new PubSub()
    expect(pubsubInstance.hasOwnProperty('events')).toBeTruthy()
  })

  test('subscribe to an Event', () => {
    const pubsubInstance = new PubSub()
    const callbackCount = pubsubInstance.subscribe('testEvent', () => {})
    expect(pubsubInstance.events.hasOwnProperty('testEvent')).toBeTruthy()
    expect(callbackCount).toEqual(1)
  })

  describe('testing subscribe service', () => {
    test('return empty array if no event with that name has been found', () => {
      const pubsubInstance = new PubSub()
      let result = pubsubInstance.publish('testEvent', {})
      expect(result).toEqual([])
    })

    test('execute all callbacks when registered event has been found', () => {
      const pubsubInstance = new PubSub()

      const data = {test: 'test data'}
      const callbackCount = pubsubInstance.subscribe('testEvent', (data) => {return data})
      let result = pubsubInstance.publish('testEvent', data)
      expect(result).toEqual([data])
    })
  })
})
